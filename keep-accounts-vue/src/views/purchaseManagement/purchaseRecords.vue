<template>
  <div class="app-container">
    <el-form :inline="true" :model="formData.formInline" class="demo-form-inline">
      <el-form-item class="el-form-item" label="摊位号：">
        <el-input v-model="formData.formInline.stallNo" placeholder="输入搜索关键词" />
      </el-form-item>
      <el-form-item class="el-form-item" label="采购商手机号：">
        <el-input v-model="formData.formInline.purchaserPhoneNumber" placeholder="输入搜索关键词" />
      </el-form-item>
      <el-form-item class="el-form-item" label="商户名称：">
        <el-input v-model="formData.formInline.businessName" placeholder="输入搜索关键词" />
      </el-form-item>
      <el-form-item class="el-form-item" label="商品名称：">
        <el-input v-model="formData.formInline.goodsName" placeholder="输入搜索关键词" />
      </el-form-item>
      <el-form-item class="el-form-item" label="采购时间：">
        <el-date-picker
          v-model="formData.formInline.purchaseTime"
          format="yyyy-MM-dd"
          type="daterange"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          style="margin-top: 6px;"
        />
      </el-form-item>
      <el-form-item class="button-group">
        <el-button type="primary" class="search-btn" @click="onSearch">搜索</el-button>
        <el-button type="primary" class="reset-btn" @click="onReset">重置</el-button>
        <el-button type="primary" class="export-btn" @click="onExport">导出</el-button>
      </el-form-item>
    </el-form>
    <el-table
      v-loading="listLoading"
      :data="recordsList"
      border
      fit
      highlight-current-row
      style="width: 100%;margin-top: 15px;"
    >
      <el-table-column label="采购时间">
        <template slot-scope="scope">
          <span style="font-size: 15px; color: #999999;">{{ scope.row.dealTime || "暂无" }}</span>
        </template>
      </el-table-column>
      <el-table-column label="采购商手机号">
        <template slot-scope="scope">
          <span>{{ scope.row.buyerMobileNo || "暂无" }}</span>
        </template>
      </el-table-column>

      <el-table-column label="摊位号">
        <template slot-scope="scope">
          <span>{{ scope.row.boothNo || "暂无" }}</span>
        </template>
      </el-table-column>

      <el-table-column label="商户名称">
        <template slot-scope="scope">
          <span>{{ scope.row.proprietorName || "暂无" }}</span>
        </template>
      </el-table-column>

      <el-table-column label="商品名称">
        <template slot-scope="scope">
          <span>{{ scope.row.goodsName || "暂无" }}</span>
        </template>
      </el-table-column>
      <el-table-column label="采购量">
        <template slot-scope="scope">
          <span>{{ scope.row.goodsWeight + scope.row.unit || "暂无" }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button type="text" @click="openOperateDialog(scope.row)">食安链条</el-button>
        </template>
      </el-table-column>
    </el-table>
    <foodSafetyChain v-if="infoVisible" ref="info" />
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
  </div>
</template>

<script>
import dayjs from 'dayjs'
import XLSX from 'xlsx'
import FileSaver from 'file-saver'
import { getPurchaseRecordsManagementListAPI } from '@/api/purchaseManagement'
import foodSafetyChain from './foodSafetyChain'
export default {
  name: 'ArticleList',
  components: {
    foodSafetyChain
  },
  data() {
    return {
      total: 0,
      listLoading: true,
      infoVisible: false,
      recordsList: [],
      formData: {
        page: 1,
        limit: 10,
        formInline: {
          // 摊位号
          stallNo: '',
          // 采购商手机号
          purchaserPhoneNumber: '',
          // 商户名称
          businessName: '',
          // 商品名称
          goodsName: '',
          // 采购时间
          purchaseTime: null
        }
      }
    }
  },
  created() {
    this.getPurchaseRecordsManagementList()
  },
  methods: {
    getPurchaseRecordsManagementList() {
      this.listLoading = true
      let dealTimeStart = ''
      let dealTimeEnd = ''
      if (this.formData.formInline.purchaseTime && this.formData.formInline.purchaseTime.length === 2) {
        const [startDate, endDate] = this.formData.formInline.purchaseTime
        dealTimeStart = dayjs(startDate).format('YYYY-MM-DD')
        dealTimeEnd = dayjs(endDate).format('YYYY-MM-DD')
      }
      const params = {
        limit: this.formData.limit,
        page: this.formData.page,
        boothNo: this.formData.formInline.stallNo,
        buyerMobileNo: this.formData.formInline.purchaserPhoneNumber,
        dealTimeStart,
        dealTimeEnd,
        goodsName: this.formData.formInline.goodsName,
        proprietorName: this.formData.formInline.businessName
      }
      getPurchaseRecordsManagementListAPI(params).then(res => {
        this.recordsList = res.data
        this.total = Number(res.count)
        this.listLoading = false
      })
    },
    openOperateDialog(row) {
      this.infoVisible = true
      this.$nextTick(() => {
        this.$refs.info.init(row.goodsDealDetailId)
      })
    },
    sizeChangeHandle(val) {
      this.formData.limit = val
      this.formData.page = 1
      this.getPurchaseRecordsManagementList()
    },
    currentChangeHandle(val) {
      this.formData.page = val
      this.getPurchaseRecordsManagementList()
    },
    onSearch() {
      this.formData.page = 1
      // this.formData.limit = 10
      this.getPurchaseRecordsManagementList()
    },
    onReset() {
      this.formData.formInline.stallNo = ''
      this.formData.formInline.purchaserPhoneNumber = ''
      this.formData.formInline.businessName = ''
      this.formData.formInline.goodsName = ''
      this.formData.formInline.purchaseTime = null
      this.getPurchaseRecordsManagementList()
    },
    onExport() {
      const params = {
        limit: 999999,
        page: 1,
        boothNo: '',
        buyerMobileNo: '',
        dealTimeStart: '',
        dealTimeEnd: '',
        goodsName: '',
        proprietorName: ''
      }
      getPurchaseRecordsManagementListAPI(params).then(res => {
        if (res.code === 0 && res.data) {
          const exportData = res.data.map(item => {
            return {
              '采购时间': item.dealTime,
              '采购商手机号': item.buyerMobileNo,
              '摊位号': item.boothNo,
              '商户名称': item.proprietorName,
              '商品名称': item.goodsName,
              '采购量': item.goodsWeight + item.unit
            }
          })
          this.generateExcel(exportData)
        } else {
          this.$message.error('导出失败')
        }
      })
    },
    generateExcel(exportData) {
      const wb = XLSX.utils.book_new()
      const ws = XLSX.utils.json_to_sheet(exportData)
      const wscols = [{ wch: 30 }, { wch: 30 }, { wch: 30 }, { wch: 30 }, { wch: 30 }, { wch: 30 }]
      ws['!cols'] = wscols
      XLSX.utils.book_append_sheet(wb, ws, '采购记录导出')
      const wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'binary' })
      const buf = new ArrayBuffer(wbout.length)
      const view = new Uint8Array(buf)
      for (let i = 0; i < wbout.length; i++) {
        view[i] = wbout.charCodeAt(i) & 0xFF
      }
      const blob = new Blob([buf], { type: 'application/octet-stream' })
      FileSaver.saveAs(blob, '采购记录导出.xlsx')
    }
  }
}
</script>

<style lang="scss" scoped>
.app-container {
  .demo-form-inline {
    .el-form-item {
      margin-right: 40px;
      margin-bottom: 10px;

      .search-btn {
        margin-right: 6px;
      }

      .reset-btn {
        margin-right: 6px;
      }

      .export-btn {
        margin-top: 6px;
      }
    }
  }

  // 日期选择器样式
  :deep(.el-date-editor) {
    margin-top: 6px;
  }
}

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
    margin-right: 30px;

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
