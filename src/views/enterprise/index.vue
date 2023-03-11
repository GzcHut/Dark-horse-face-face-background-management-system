<template>
  <div>
    <el-card>
      <EnterpriseInput />
      <PageHeader>
        <template #left>
          <span> 共5条记录 </span>
        </template>
        <template #right></template>
      </PageHeader>
      <!-- 信息展示 -->
      <template>
        <el-table style="width: 100%">
          <el-table-column label="序号" />
          <el-table-column label="企业编号" />
          <el-table-column label="企业简称" />
          <el-table-column label="标签" />
          <el-table-column label="创建者" />
          <el-table-column label="创建日期" />
          <el-table-column label="备注" />
          <el-table-column label="状态" />
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
  name: 'Enterprise',
  data() {
    return {
      query: {
        page: 1,
        pagesize: 5
      },
      total: 5
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
