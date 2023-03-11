<template>
  <div>
    <el-card>
      <SearchComponents>
        <template #left>
          <el-input placeholder="根据用户名搜索" />
          <el-button size="small"> 清空 </el-button>
          <el-button type="primary" size="small"> 搜索 </el-button>
        </template>
        <template #right>
          <el-button type="success" size="small" icon="el-icon-edit">
            新增权限组
          </el-button>
        </template>
      </SearchComponents>
      <PageHeader>
        <template #left>
          <span> 共5条记录 </span>
        </template>
        <template #right></template>
      </PageHeader>
      <!-- 信息展示 -->
      <template>
        <el-table style="width: 100%">
          <el-table-column type="selection" width="55" />
          <el-table-column label="用户名" />
          <el-table-column label="操作">
            <template>
              <el-row>
                <el-button type="primary" icon="el-icon-edit" circle />
                <el-button type="danger" icon="el-icon-delete" circle />
              </el-row>
            </template>
          </el-table-column>
        </el-table>
      </template>
      <!-- 分页组件 -->
      <div style="height: 60px; margin-top: 20px">
        <el-pagination
          :current-page="query.page"
          :page-sizes="[
            2, 4, 6, 8, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38,
            40, 42, 44, 46, 48, 50, 52, 54, 56, 58, 60, 62, 64, 66, 68
          ]"
          :page-size="query.pagesize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'Permissions',
  data() {
    return {
      query: {
        page: 1,
        pagesize: 5
      },
      total: 1
    }
  },
  methods: {
    handleSizeChange(val) {
      this.query.pagesize = val
      this.getUserList()
    },
    handleCurrentChange(val) {
      this.query.page = val
      this.getUserList()
    }
  }
}
</script>

<style>
</style>
