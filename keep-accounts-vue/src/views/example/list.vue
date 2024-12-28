<template>
  <div class="app-container">
    <el-table v-loading="listLoading" :data="infoList" border fit highlight-current-row style="width: 100%">
      <!-- 序号 -->
      <el-table-column align="center" label="序号">
        <template slot-scope="scope">
          <span>{{ scope.$index + 1 }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="摊位号">
        <template slot-scope="scope">
          <span>{{ scope.row.boothNo }}</span>
        </template>
      </el-table-column>

      <el-table-column align="center" label="买家手机号">
        <template slot-scope="scope">
          <span>{{ scope.row.buyerMobileNo }}</span>
        </template>
      </el-table-column>

      <el-table-column align="center" label="交易时间">
        <template slot-scope="scope">
          <span>{{ scope.row.dealTime }}</span>
        </template>
      </el-table-column>

      <el-table-column class-name="status-col" label="商品名称">
        <template slot-scope="scope">
          <span>{{ scope.row.goodsName }}</span>
        </template>
      </el-table-column>

      <el-table-column label="采购量">
        <template slot-scope="scope">
          <span>{{ scope.row.goodsWeight }}</span>
        </template>
      </el-table-column>

      <el-table-column align="center" label="市场名称">
        <template slot-scope="scope">
          <span>{{ scope.row.marketName }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="经营户手机号">
        <template slot-scope="scope">
          <span>{{ scope.row.mobileNo }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="经营户姓名">
        <template slot-scope="scope">
          <span>{{ scope.row.proprietorName }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="单位">
        <template slot-scope="scope">
          <span>{{ scope.row.unit }}</span>
        </template>
      </el-table-column>
    </el-table>

    <el-pagination
      style="margin-top: 20px;"
      :current-page="listQuery.page"
      :page-sizes="[10, 20, 50, 100]"
      :page-size="listQuery.limit"
      :total="total"
      layout="total, sizes, prev, pager, next, jumper"
      @size-change="sizeChangeHandle"
      @current-change="currentChangeHandle"
    />
  </div>
</template>

<script>
import { fetchList2 } from '@/api/article'

export default {
  name: 'ArticleList',
  data() {
    return {
      list: null,
      total: 0,
      listLoading: true,
      listQuery: {
        page: 1,
        limit: 10
      },
      infoList: []
    }
  },
  created() {
    this.getList()
  },
  methods: {
    getList() {
      this.listLoading = true
      fetchList2(this.listQuery).then(response => {
        this.infoList = response.data
        this.total = Number(response.count)
        this.listLoading = false
      })
    },
    sizeChangeHandle(val) {
      this.listQuery.limit = val
      this.listQuery.page = 1
      this.getList()
    },
    currentChangeHandle(val) {
      this.listQuery.page = val
      this.getList()
    }
  }
}
</script>

<style scoped>
.edit-input {
  padding-right: 100px;
}

.cancel-btn {
  position: absolute;
  right: 15px;
  top: 10px;
}
</style>
