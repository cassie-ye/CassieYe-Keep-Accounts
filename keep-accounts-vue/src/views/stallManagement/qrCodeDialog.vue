<template>
  <div>
    <el-dialog center :title="`${stallData.boothNo} 摊位二维码`" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
      <div class="qr-code-container">
        <img :src="qrCodeUrl" alt="摊位二维码">
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  props: {
    stallData: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      dialogVisible: false,
      qrCodeUrl: ''
    }
  },
  methods: {
    created() {

    },
    show() {
      this.dialogVisible = true
      console.log(this.stallData)
      this.$nextTick(() => {
        this.generateQrCode()
      })
    },
    handleClose(done) {
      done()
    },
    generateQrCode() {
      if (!this.stallData || !this.stallData.qrCodeBase64) {
        console.warn('No QR code data available')
        return
      }
      this.qrCodeUrl = 'data:image/png;base64,' + this.stallData.qrCodeBase64
    }
  }
}
</script>

<style lang="scss" scoped>
.qr-code-container {
  text-align: center;
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 60%;
  }
}

// // 自定义 el-dialog 样式
// :deep(.el-dialog__body) {
//   padding: 0px 20px 20px 20px;
// }
</style>
