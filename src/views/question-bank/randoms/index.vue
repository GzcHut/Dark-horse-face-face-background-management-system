<template>
  <div>
    <el-card>
      <SearchComponents>
        <template #left>
          <el-form>
            <el-form-item label="关键字">
              <el-input placeholder="根据编号搜索" />
            </el-form-item>
          </el-form>
        </template>
        <template #right>
          <el-button size="small"> 清楚 </el-button>
          <el-button type="primary" size="small"> 搜索 </el-button>
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
          <el-table-column label="编号" />
          <el-table-column label="题型" />
          <el-table-column label="题目编号" />
          <el-table-column label="录入时间" />
          <el-table-column label="答题时间(s)" />
          <el-table-column label="正确率(%)" />
          <el-table-column label="录入人" />
          <el-table-column label="操作">
            <template>
              <el-row>
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
  name: 'Randoms',
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
