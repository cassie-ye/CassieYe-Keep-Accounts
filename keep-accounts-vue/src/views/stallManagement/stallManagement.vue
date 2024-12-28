<template>
  <div class="app-container">
    <el-form :inline="true" :model="formData.formInline" class="demo-form-inline">
      <el-form-item class="el-form-item" label="摊位号：">
        <el-input v-model="formData.formInline.stallNo" placeholder="输入搜索关键词" />
      </el-form-item>
      <el-form-item class="el-form-item" label="市场：">
        <el-input v-model="formData.formInline.marketName" placeholder="输入搜索关键词" />
      </el-form-item>
      <el-form-item class="el-form-item" label="商户名称：">
        <el-input v-model="formData.formInline.bussinessName" placeholder="输入搜索关键词" />
      </el-form-item>
      <el-form-item style="margin-top: -6px;" class="el-form-item" label="电话：">
        <el-input v-model="formData.formInline.phoneNumber" placeholder="输入搜索关键词" />
      </el-form-item>
      <el-form-item class="button-group">
        <el-button type="primary" class="search-btn" @click="onSearch">搜索</el-button>
        <el-button type="primary" class="reset-btn" @click="onReset">重置</el-button>
        <el-button type="primary" class="export-btn" @click="onExport">批量导出二维码</el-button>
      </el-form-item>
    </el-form>
    <el-table v-loading="listLoading" :data="stallList" border fit highlight-current-row style="width: 100%">
      <el-table-column label="序号">
        <template slot-scope="scope">
          <span>{{ scope.$index + 1 }}</span>
        </template>
      </el-table-column>

      <el-table-column label="摊位号">
        <template slot-scope="scope">
          <span>{{ scope.row.boothNo || "暂无" }}</span>
        </template>
      </el-table-column>

      <el-table-column label="市场">
        <template slot-scope="scope">
          <span>{{ scope.row.marketName || "暂无" }}</span>
        </template>
      </el-table-column>

      <el-table-column label="商户名称">
        <template slot-scope="scope">
          <span>{{ scope.row.proprietorName || "暂无" }}</span>
        </template>
      </el-table-column>

      <el-table-column label="电话">
        <template slot-scope="scope">
          <span>{{ scope.row.mobileNo || "暂无" }}</span>
        </template>
      </el-table-column>

      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button type="text" @click="showQrCode(scope.row)">二维码</el-button>
          <el-button type="text" @click="showUpdatePassword(scope.row)">修改密码</el-button>
        </template>
      </el-table-column>

    </el-table>

    <el-pagination
      style="margin-top: 20px;"
      :current-page="formData.page"
      :page-sizes="[10, 20, 50, 100]"
      :page-size="formData.limit"
      :total="total"
      layout="total, sizes, prev, pager, next, jumper"
      @size-change="sizeChangeHandle"
      @current-change="currentChangeHandle"
    />
    <qr-code-dialog ref="qrCodeDialog" :stall-data="currentStallData" />
    <update-password ref="updatePasswordDialog" :stall-data="currentStallData" />
  </div>
</template>

<script>
import { getStallManagementListAPI, exportQrCodeAPI } from '@/api/stallManagement'
import QrCodeDialog from './qrCodeDialog.vue'
import UpdatePassword from './updatePassword.vue'

export default {
  name: 'ArticleList',
  components: {
    QrCodeDialog,
    UpdatePassword
  },
  data() {
    return {
      // 列表加载控制
      listLoading: true,
      // 摊位列表
      stallList: [],
      // 列表总数
      total: 0,
      // 当前选中的摊位数据
      currentStallData: null,

      // 请求参数
      formData: {
        page: 1,
        limit: 10,
        formInline: {
          stallNo: '',
          marketName: '',
          bussinessName: '',
          phoneNumber: ''
        }
      }

    }
  },
  created() {
    this.getStallManagementList()
  },
  methods: {
    getStallManagementList() {
      this.listLoading = true
      const params = {
        // 当前页
        page: this.formData.page,
        // 页大小
        limit: this.formData.limit,
        // 摊位号
        boothNo: this.formData.formInline.stallNo,
        // 商户名称
        proprietorName: this.formData.formInline.bussinessName,
        // 市场
        marketName: this.formData.formInline.marketName,
        // 电话
        mobileNo: this.formData.formInline.phoneNumber
      }
      getStallManagementListAPI(params).then(res => {
        this.stallList = res.data
        this.total = Number(res.count)
        this.listLoading = false
      })
    },
    sizeChangeHandle(val) {
      this.formData.limit = val
      this.formData.page = 1
      this.getStallManagementList()
    },
    currentChangeHandle(val) {
      this.formData.page = val
      this.getStallManagementList()
    },
    onSearch() {
      this.formData.page = 1
      // this.formData.limit = 10
      this.getStallManagementList()
    },
    onReset() {
      this.formData.formInline.stallNo = ''
      this.formData.formInline.marketName = ''
      this.formData.formInline.bussinessName = ''
      this.formData.formInline.phoneNumber = ''
      this.getStallManagementList()
    },
    showQrCode(row) {
      if (!row.qrCodeBase64) {
        this.$message.warning('该摊位暂无二维码数据')
        return
      }
      this.currentStallData = row
      this.$refs.qrCodeDialog.show()
    },
    showUpdatePassword(row) {
      this.currentStallData = row
      this.$refs.updatePasswordDialog.show()
    },

    /**
     * 选择多选框
     * @param val
     */
    // handleSelectionChange(val) {
    //   this.baseIdList = val.map((item) => {
    //     return item.baseId
    //   })
    // },

    /**
     * 批量导出二维码
     */
    onExport() {
      const params = {
        // 摊位号
        boothNo: this.formData.formInline.stallNo,
        // 商户名称
        proprietorName: this.formData.formInline.bussinessName,
        // 市场
        marketName: this.formData.formInline.marketName,
        // 电话
        mobileNo: this.formData.formInline.phoneNumber
      }
      exportQrCodeAPI(params).then(res => {
        this.downloadExcel('二维码', res.data)
      })
    },
    downloadExcel(fileName, excelData) {
      const blob = new Blob([excelData], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8' })
      const a = document.createElement('a')
      a.href = URL.createObjectURL(blob)
      a.download = fileName
      a.click()
      URL.revokeObjectURL(a.href)
    }
  }
}
</script>

<style lang="scss" scoped>
.edit-input {
  padding-right: 100px;
}

.cancel-btn {
  position: absolute;
  right: 15px;
  top: 10px;
}

.demo-form-inline {
  width: 100%;

  .el-form-item {
    margin-right: 40px;

    .el-input {
      width: 250px;
      margin-top: 6px;
    }
  }
}

.button-group {

  .search-btn,
  .export-btn {
    background-color: #2f58e3;
    border: #2f58e3;
  }

  .reset-btn {
    background-color: #ff2727;
    border: #ff2727;
  }

  .el-button {
    margin-right: 10px;
    padding-left: 30px;
    padding-right: 30px;
    border-radius: 2px;
  }
}
</style>
