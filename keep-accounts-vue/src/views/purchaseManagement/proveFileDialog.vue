<template>
  <el-dialog :top="'10vh'" :title="'证明文件'" width="55%" :close-on-click-modal="false" :visible.sync="visible">
    <div class="full">
      <div class="row">
        <div class="title">承诺达标合格证：</div>
        <div v-if="cndbhgzList.length > 0" class="columnImg">
          <img v-for="(item, index) in cndbhgzList" :key="index" class="img" :src="item.picUrl" alt="">
        </div>
        <div v-else>暂无图片</div>
      </div>
      <div class="row">
        <div class="title">进货凭证：</div>
        <div v-if="jhpzList.length > 0" class="columnImg">
          <img v-for="(item, index) in jhpzList" :key="index" class="img" :src="item.picUrl" alt="">
        </div>
        <div v-else>暂无图片</div>
      </div>
      <div class="row">
        <div class="title">其他证明：</div>
        <div v-if="qtzmList.length > 0" class="columnImg">
          <img v-for="(item, index) in qtzmList" :key="index" class="img" :src="item.picUrl" alt="">
        </div>
        <div v-else>暂无图片</div>
      </div>
    </div>
  </el-dialog>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
      vmEntranceLicenceEntityList: [],
      cndbhgzList: [],
      jhpzList: [],
      qtzmList: []
    }
  },
  created() {
  },
  methods: {
    init(vmEntranceLicenceEntityList) {
      this.visible = true
      this.vmEntranceLicenceEntityList = vmEntranceLicenceEntityList
      this.vmEntranceLicenceEntityList.map((item) => {
        switch (item.licenceType) {
          case 1:
            this.cndbhgzList.push(item)
            break
          case 2:
            this.jhpzList.push(item)
            break
          case 3:
            this.qtzmList.push(item)
            break
          default:
            break
        }
        return item
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.columnImg {
  display: flex;
  flex-direction: column;
}

.full {
  width: 800px;
  height: 500px;
  overflow-y: scroll;
}

.row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;

  .title {
    width: 120px;
  }

  .img {
    width: 630px;
    height: auto;
    margin-bottom: 10px;
  }
}
</style>
