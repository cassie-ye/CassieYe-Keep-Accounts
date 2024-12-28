<template>
  <div class="app-container">
    <el-form :inline="true" :model="formData.formInline" class="demo-form-inline">
      <el-form-item class="el-form-item" label="配货摊位号：">
        <el-input v-model="formData.formInline.allocateStallNo" placeholder="输入搜索关键词" />
      </el-form-item>
      <el-form-item class="el-form-item" label="配货商户名称：">
        <el-input v-model="formData.formInline.allocateBusinessName" placeholder="输入搜索关键词" />
      </el-form-item>
      <el-form-item class="el-form-item" label="配货市场：">
        <el-input v-model="formData.formInline.allocateMarketName" placeholder="输入搜索关键词" />
      </el-form-item>
      <el-form-item class="el-form-item" label="供货摊位号：">
        <el-input v-model="formData.formInline.provideStallNo" placeholder="输入搜索关键词" />
      </el-form-item>
      <el-form-item class="el-form-item" label="供货商户名称：">
        <el-input v-model="formData.formInline.provideBusinessName" placeholder="输入搜索关键词" />
      </el-form-item>
      <el-form-item class="el-form-item" label="供货市场：">
        <el-input v-model="formData.formInline.provideMarketName" placeholder="输入搜索关键词" />
      </el-form-item>
      <el-form-item class="el-form-item" label="商品名称：">
        <el-input v-model="formData.formInline.goodsName" placeholder="输入搜索关键词" />
      </el-form-item>
      <el-form-item style="margin-top: -6px;" class="el-form-item" label="配货时间：">
        <el-date-picker
          v-model="formData.formInline.allocateTime"
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
    <el-table v-loading="listLoading" :data="recordsList" border fit highlight-current-row style="width: 100%">
      <el-table-column label="配货时间">
        <template slot-scope="scope">
          <span style="font-size: 15px; color: #999999;">{{ scope.row.dealTime || "暂无" }}</span>
        </template>
      </el-table-column>
      <el-table-column label="配货摊位号">
        <template slot-scope="scope">
          <span>{{ scope.row.boothNoBuyer || "暂无" }}</span>
        </template>
      </el-table-column>

      <el-table-column label="配货市场">
        <template slot-scope="scope">
          <span>{{ scope.row.proprietorNameBuyer || "暂无" }}</span>
        </template>
      </el-table-column>

      <el-table-column label="配货商户名称">
        <template slot-scope="scope">
          <span>{{ scope.row.marketNameBuyer || "暂无" }}</span>
        </template>
      </el-table-column>

      <el-table-column label="供货摊位">
        <template slot-scope="scope">
          <span>{{ scope.row.boothNo || "暂无" }}</span>
        </template>
      </el-table-column>
      <el-table-column label="供货市场">
        <template slot-scope="scope">
          <span>{{ scope.row.proprietorName || "暂无" }}</span>
        </template>
      </el-table-column>
      <el-table-column label="供货商户名称">
        <template slot-scope="scope">
          <span>{{ scope.row.marketName || "暂无" }}</span>
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
  </div>
</template>

<script>
import { getAllocateGoodsManagementListAPI } from '@/api/allocateGoodsManagement'
import dayjs from 'dayjs'
import XLSX from 'xlsx'
import FileSaver from 'file-saver'

export default {
  name: 'ArticleList',
  data() {
    return {
      total: 0,
      listLoading: true,
      // 请求参数
      formData: {
        page: 1,
        limit: 10,
        formInline: {
          // 配货摊位号
          allocateStallNo: '',
          // 配货商户名称
          allocateBusinessName: '',
          // 配货市场
          allocateMarketName: '',
          // 供货摊位号
          provideStallNo: '',
          // 供货商户名称
          provideBusinessName: '',
          // 供货市场
          provideMarketName: '',
          // 商品名称
          goodsName: '',
          // 配货时间
          allocateTime: null
        }
      },

      // 请求得到的配货列表
      recordsList: [],
      // 导出Excel表格的数据
      exportDataList: []
    }
  },
  created() {
    this.getAllocateGoodsManagementList()
  },
  methods: {
    getAllocateGoodsManagementList() {
      this.listLoading = true
      let dealTimeStart = ''
      let dealTimeEnd = ''
      if (this.formData.formInline.allocateTime && this.formData.formInline.allocateTime.length === 2) {
        const [startDate, endDate] = this.formData.formInline.allocateTime
        dealTimeStart = dayjs(startDate).format('YYYY-MM-DD')
        dealTimeEnd = dayjs(endDate).format('YYYY-MM-DD')
      }
      const params = {
        limit: this.formData.limit,
        page: this.formData.page,
        boothNo: this.formData.formInline.provideStallNo,
        boothNoBuyer: this.formData.formInline.allocateStallNo,
        dealTimeStart,
        dealTimeEnd,
        goodsName: this.formData.formInline.goodsName,
        marketName: this.formData.formInline.provideBusinessName,
        marketNameBuyer: this.formData.formInline.allocateBusinessName,
        proprietorName: this.formData.formInline.provideMarketName,
        proprietorNameBuyer: this.formData.formInline.allocateMarketName
      }
      getAllocateGoodsManagementListAPI(params).then(res => {
        this.recordsList = res.data
        this.total = Number(res.count)
        this.listLoading = false
      })
    },
    sizeChangeHandle(val) {
      this.formData.limit = val
      this.formData.page = 1
      this.getAllocateGoodsManagementList()
    },
    currentChangeHandle(val) {
      this.formData.page = val
      this.getAllocateGoodsManagementList()
    },
    onSearch() {
      this.formData.page = 1
      // this.formData.limit = 10
      this.getAllocateGoodsManagementList()
    },
    onReset() {
      this.formData.formInline.allocateStallNo = ''
      this.formData.formInline.allocateBusinessName = ''
      this.formData.formInline.allocateMarketName = ''
      this.formData.formInline.provideStallNo = ''
      this.formData.formInline.provideBusinessName = ''
      this.formData.formInline.provideMarketName = ''
      this.formData.formInline.goodsName = ''
      this.formData.formInline.allocateTime = null
      this.getAllocateGoodsManagementList()
    },
    onExport() {
      const params = {
        limit: 999999,
        page: 1,
        boothNo: '',
        boothNoBuyer: '',
        dealTimeStart: '',
        dealTimeEnd: '',
        goodsName: '',
        marketName: '',
        marketNameBuyer: '',
        proprietorName: '',
        proprietorNameBuyer: ''
      }
      getAllocateGoodsManagementListAPI(params).then(res => {
        if (res.code === 0 && res.data) {
          console.log(res.data)
          const exportData = res.data.map(item => {
            return {
              '配货时间': item.dealTime,
              '配货摊位': item.boothNoBuyer,
              '配货市场': item.proprietorNameBuyer,
              '配货商户名称': item.marketNameBuyer,
              '供货摊位': item.boothNo,
              '供货市场': item.proprietorName,
              '供货商户名称': item.marketName,
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
      const wscols = [{ wch: 30 }, { wch: 30 }, { wch: 30 }, { wch: 30 }, { wch: 30 }, { wch: 30 }, { wch: 30 }, { wch: 30 }, { wch: 30 }, { wch: 30 }]
      ws['!cols'] = wscols
      XLSX.utils.book_append_sheet(wb, ws, '配货记录导出')
      const wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'binary' })
      const buf = new ArrayBuffer(wbout.length)
      const view = new Uint8Array(buf)
      for (let i = 0; i < wbout.length; i++) {
        view[i] = wbout.charCodeAt(i) & 0xFF
      }
      const blob = new Blob([buf], { type: 'application/octet-stream' })
      FileSaver.saveAs(blob, '配货记录导出.xlsx')
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
    margin-right: 30px;

    .el-input {
      width: 250px;
      margin-top: 6px;
    }
  }

  .el-form-item:nth-child(4),
  .el-form-item:nth-child(5),
  .el-form-item:nth-child(6),
  .el-form-item:nth-child(7) {
    margin-top: -6px;
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
