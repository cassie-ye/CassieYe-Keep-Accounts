<template>
  <div>
    <el-dialog :top="'20vh'" :title="'进场信息'" width="35%" :close-on-click-modal="false" :visible.sync="visible">
      <div>
        <div class="row">
          <div class="half">
            摊位号：{{ enterVenueObj.boothName || "暂无" }}
          </div>
          <div class="half">
            经营户：{{ enterVenueObj.proprietorName || "暂无" }}
          </div>
        </div>
        <div class="row">
          <div class="half">
            商品名称：{{ enterVenueObj.goodsName || "暂无" }}
          </div>
          <div class="half">
            重量(KG)：{{ enterVenueObj.weight || "暂无" }}
          </div>
        </div>
        <div class="row">
          <div class="half">
            产地：{{ enterVenueObj.divisionName || "暂无" }}
          </div>
          <div class="half">
            <div style="position: relative; background-color:pink; display: inline-block;">
              <div class="iconNumber">{{ iconNumber }}</div>
              <el-button size="mini" type="success" @click="showProveFileDialog()">查看证明文件</el-button>
            </div>
          </div>
          <!-- <div class="half">
            品牌：{{ enterVenueObj.rateDivisionName || "暂无" }}
          </div> -->
        </div>
        <!-- <div class="row">
          <div class="half">
            费率：{{ enterVenueObj.enterRate || "暂无" }}
          </div>
          <div class="half">
            执行单价(元/KG)：{{ enterVenueObj.unitPricePricing || "暂无" }}
          </div>
        </div> -->
        <!-- <div class="row"> -->
        <!-- <div class="half">
            货值(元)：{{ enterVenueObj.goodsAmoutAct || "暂无" }}
          </div> -->

        <!-- </div> -->
      </div>
    </el-dialog>
    <proveFileDialog v-if="proveFileDialogVisible" ref="proveFileDialog" />
  </div>
</template>

<script>
import proveFileDialog from './proveFileDialog'
export default {
  components: {
    proveFileDialog
  },
  data() {
    return {
      visible: false,
      proveFileDialogVisible: false,
      enterVenueObj: {},
      iconNumber: null
    }
  },
  created() {
  },
  methods: {
    init(enterVenueObj) {
      this.visible = true
      this.enterVenueObj = enterVenueObj
      this.iconNumber = enterVenueObj.vmEntranceLicenceEntityList.length
    },
    showProveFileDialog() {
      this.proveFileDialogVisible = true
      this.$nextTick(() => {
        this.$refs.proveFileDialog.init(this.enterVenueObj.vmEntranceLicenceEntityList)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.row {
  display: flex;
  justify-content: space-between;
  align-items: center;

  .half {
    flex: 1;
    margin-bottom: 15px;

    .iconNumber {
      position: absolute;
      top: -5px;
      right: -5px;
      width: 13px;
      height: 13px;
      border-radius: 50% 50% 50% 20%;
      background-color: red;
      color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 10px;
    }
  }
}
</style>
