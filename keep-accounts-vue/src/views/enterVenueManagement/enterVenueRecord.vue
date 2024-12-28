<template>
  <div class="app-container">
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item class="el-form-item" label="进场时间：">
        <el-input v-model="formInline.user" placeholder="输入搜索关键词" />
      </el-form-item>
      <el-form-item class="el-form-item" label="摊位号：">
        <el-input v-model="formInline.user" placeholder="输入搜索关键词" />
      </el-form-item>
      <el-form-item class="el-form-item" label="市场名称：">
        <el-input v-model="formInline.user" placeholder="输入搜索关键词" />
      </el-form-item>
      <el-form-item class="el-form-item" label="商户名称：">
        <el-input v-model="formInline.user" placeholder="输入搜索关键词" />
      </el-form-item>
      <el-form-item class="el-form-item" label="车牌号：">
        <el-input v-model="formInline.user" placeholder="输入搜索关键词" />
      </el-form-item>
      <el-form-item class="el-form-item" label="商品重量：">
        <el-input v-model="formInline.user" placeholder="输入搜索关键词" />
      </el-form-item>
      <el-form-item class="el-form-item" label="产地：">
        <el-input v-model="formInline.user" placeholder="输入搜索关键词" />
      </el-form-item>
      <el-form-item class="button-group">
        <el-button type="primary" class="search-btn" @click="onSearch">搜索</el-button>
        <el-button type="primary" class="reset-btn" @click="onAdd">重置</el-button>
        <el-button type="primary" class="export-btn" @click="onReset">导出</el-button>
      </el-form-item>
    </el-form>
    <el-table v-loading="listLoading" :data="mockList" border fit highlight-current-row style="width: 100%">
      <el-table-column label="进场时间">
        <template slot-scope="scope">
          <span style="font-size: 15px; color: #999999;">{{ scope.row.time }}</span>
        </template>
      </el-table-column>
      <el-table-column label="摊位号">
        <template slot-scope="scope">
          <span>{{ scope.row.phone }}</span>
        </template>
      </el-table-column>

      <el-table-column label="市场名称">
        <template slot-scope="scope">
          <span>{{ scope.row.dealTime }}</span>
        </template>
      </el-table-column>

      <el-table-column label="商户名称">
        <template slot-scope="scope">
          <span>{{ scope.row.goodsName }}</span>
        </template>
      </el-table-column>

      <el-table-column label="车牌号">
        <template slot-scope="scope">
          <span>{{ scope.row.goodsWeight }}</span>
        </template>
      </el-table-column>
      <el-table-column label="商品重量">
        <template slot-scope="scope">
          <span>{{ scope.row.goodsWeight }}</span>
        </template>
      </el-table-column>
      <el-table-column label="商品名称">
        <template slot-scope="scope">
          <span>{{ scope.row.goodsWeight }}</span>
        </template>
      </el-table-column>
      <el-table-column label="产地">
        <template slot-scope="scope">
          <span>{{ scope.row.goodsWeight }}</span>
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
      infoList: [],
      formInline: {
        user: '',
        region: ''
      },
      mockList: [
        {
          time: '2020-01-01 00:00:00',
          phone: '13888888888',
          operate: '食安链条'
        }
      ],
      infoVisible: false
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
    openOperateDialog(scoped) {
      this.infoVisible = true
      this.$nextTick(() => {
        this.$refs.info.init()
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
    },
    onSearch() {
      console.log('onSearch')
    },
    onAdd() {
      console.log('onAdd')
    },
    onReset() {
      console.log('onReset')
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
