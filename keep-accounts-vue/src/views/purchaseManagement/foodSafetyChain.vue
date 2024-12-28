<template>
  <div>
    <el-dialog :title="'食安链条'" width="40%" :close-on-click-modal="false" :visible.sync="visible">
      <div class="timeline-container">
        <el-timeline>
          <el-timeline-item :color="'#409eff'" :timestamp="purchaseObj.dealTime || '暂无'" placement="top">
            <el-card>
              <div class="card-content">
                <div class="card-content-left">
                  <div>
                    <i class="el-icon-mobile-phone" />
                  </div>
                  <div class="card-content-left-text">
                    <div class="first">采购商手机号：{{ purchaseObj.buyerMobileNo || "暂无" }}</div>
                    <div class="card-content-left-text-time">
                      <i class="el-icon-time" />
                      <div>{{ purchaseObj.dealTime || "暂无" }}</div>
                    </div>
                  </div>
                </div>
                <div>
                  采购
                </div>
              </div>
            </el-card>
          </el-timeline-item>
          <template v-if="allocateList.length > 0">
            <el-timeline-item
              v-for="(item, index) in allocateList"
              :key="index"
              :color="'#409eff'"
              :timestamp="item.dealTime || '暂无'"
              placement="top"
            >
              <el-card>
                <div class="card-content">
                  <div class="card-content-left">
                    <div>
                      <i class="el-icon-mobile-phone" />
                    </div>
                    <div class="card-content-left-text">
                      <div class="first">摊位号：{{ item.boothNo || "暂无" }}</div>
                      <div>商户名称：{{ item.proprietorName || "暂无" }}</div>
                      <div class="card-content-left-text-time">
                        <i class="el-icon-time" />
                        <div>{{ item.dealTime || "暂无" }}</div>
                      </div>
                    </div>
                  </div>
                  <div>
                    配货
                  </div>
                </div>
              </el-card>
            </el-timeline-item>
          </template>
          <el-timeline-item :color="'#409eff'" :timestamp="enterVenueObj.entranceTime || '暂无'" placement="top">
            <el-card>
              <div class="card-content">
                <div class="card-content-left">
                  <div>
                    <!-- <i class="el-icon-truck" /> -->
                    <img
                      :src="'https://axhub.im/ax9/31c4b1bb79511517/images/%E9%87%87%E8%B4%AD%E8%AE%B0%E5%BD%95_1/u95.svg'"
                      alt="SVG Image"
                    >
                  </div>
                  <div class="card-content-left-text">
                    <div class="first">摊位号：{{ enterVenueObj.boothName || "暂无" }}</div>
                    <div class="first">商户名称：{{ enterVenueObj.proprietorName || "暂无" }}</div>
                    <div class="first">产地：{{ enterVenueObj.divisionName || "暂无" }}</div>
                    <div class="first pcNum">
                      <div>批次号：{{ enterVenueObj.traceCode || "暂无" }}</div>
                      <div class="lookDetail" @click="showBatchDetail()">查看详情</div>
                    </div>
                    <div class="card-content-left-text-time">
                      <i class="el-icon-time" />
                      <div>{{ enterVenueObj.entranceTime || "暂无" }}</div>
                    </div>
                  </div>
                </div>
                <div>
                  进场
                </div>
              </div>
            </el-card>
          </el-timeline-item>
        </el-timeline>
      </div>
    </el-dialog>
    <EntranceInfoDialog v-if="entranceInfoDialogVisible" ref="entranceInfo" />
  </div>

</template>

<script>
import { getFoodSafetyChainDetailsAPI } from '@/api/purchaseManagement'
import EntranceInfoDialog from './EntranceInfoDialog'
export default {
  components: {
    EntranceInfoDialog
  },
  data() {
    return {
      visible: false,
      goodsDealDetailId: null,
      timelineData: [],
      // 采购
      purchaseObj: {},
      // 配货
      allocateList: [],
      // 进场
      enterVenueObj: {},
      entranceInfoDialogVisible: false
    }
  },
  created() {
  },
  methods: {
    init(goodsDealDetailId) {
      this.visible = true
      this.goodsDealDetailId = goodsDealDetailId
      this.getFoodSafetyChainDetails(this.goodsDealDetailId)
    },
    getFoodSafetyChainDetails(params) {
      getFoodSafetyChainDetailsAPI(params).then(res => {
        console.log('res', res)
        this.purchaseObj = res.buy
        this.allocateList = res.sell
        this.enterVenueObj = res.entrance
        if (this.enterVenueObj.vmEntranceLicenceEntityList.length > 0) {
          this.enterVenueObj.vmEntranceLicenceEntityList.map((item) => {
            if (item.picUrl) {
              // item.picUrl = "http://10.10.12.200:8087/njzc_demo" + item.picUrl
              item.picUrl = 'https://zsl.njnfwl.com/njzc_demo' + item.picUrl
            }
            return item
          })
        }
      })
    },
    showBatchDetail() {
      this.entranceInfoDialogVisible = true
      this.$nextTick(() => {
        this.$refs.entranceInfo.init(this.enterVenueObj)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.el-input-noboder .el-input__inner {
  border: none;
}

.timeline-container {
  padding: 20px 30px 20px 20px;
  height: 480px;
  overflow-y: scroll;

  .card-content {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    &-left {
      display: flex;
      // 顶部对齐
      align-items: flex-start !important;

      &-text {
        margin-left: 20px;

        .first {
          font-size: 15px;
          color: #666666;
          margin-bottom: 8px;
        }

        .pcNum {
          display: flex;
          align-items: center;

          .lookDetail {
            margin-left: 10px;
            color: #409EFF;
            cursor: pointer;
          }
        }

        &-time {
          margin-top: 10px;
          display: flex;
          align-items: center;
          color: #999999;

          .el-icon-time {
            margin-right: 3px;
          }
        }
      }
    }

    .el-icon-mobile-phone,
    .el-icon-truck {
      font-size: 30px;
    }

    .truck {
      width: 30px;
    }
  }
}

.card-content-left {
  width: 90%;
}

// .each-content {
//   .top {
//     .blue-circle {
//       width: 13.5px;
//       height: 13.5px;
//       border-radius: 50%;
//       border: 3px solid #409EFF;
//       position: relative;

//       .grey-solid {
//         position: absolute;
//         width: 2px;
//         height: 14px;
//         background-color: #C0C0C0;
//         top: 10px;
//         left: 3px;
//       }
//     }
//   }
// }</style>
