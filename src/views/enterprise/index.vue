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
        <el-table style="width: 100%" :data="enterpriseForm">
          <el-table-column label="序号" prop="id" />
          <el-table-column label="企业编号" prop="number" />
          <el-table-column label="企业简称" prop="shortName" />
          <el-table-column label="标签" prop="tags" />
          <el-table-column label="创建者" prop="creatorID" />
          <el-table-column label="创建日期" prop="addDate" />
          <el-table-column label="备注" prop="remarks" />
          <el-table-column label="状态" prop="state" />
          <el-table-column label="操作" fixed="right" width="160px">
            <template>
              <el-row>
                <el-button type="primary" icon="el-icon-edit" circle />
                <el-tooltip content="禁用" placement="top">
                  <el-button type="warning" icon="el-icon-close" circle />
                </el-tooltip>
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
import { getEnterpriseAPI } from '@/api/management'
export default {
  name: 'Enterprise',
  data() {
    return {
      enterpriseForm: [],
      query: {
        page: 1,
        pagesize: 10
      },
      total: 5
    }
  },
  created() {
    this.getEnterprise()
  },
  methods: {
    // 获取了企业展示数据
    async getEnterprise() {
      const resp = await getEnterpriseAPI(this.query)
      console.log(resp.data.items)
      this.enterpriseForm = resp.data.items
    },
    handleSizeChange(val) {
      this.query.pagesize = val
    },
    handleCurrentChange(val) {
      this.query.page = val
    }
  }
}
</script>

<style>
</style>
