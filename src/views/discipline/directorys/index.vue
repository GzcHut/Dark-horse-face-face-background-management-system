<template>
  <!-- 目录 -->
  <div>
    <el-card>
      <SearchComponents>
        <template #left>
          <el-form>
            <el-form-item label="关键字">
              <el-input placeholder="根据编号搜索" />
            </el-form-item>
            <el-form-item label="状态">
              <el-select v-model="form.region" placeholder="请选择活动区域">
                <el-option label="区域一" value="beijing" />
                <el-option label="区域二" value="beijing" />
              </el-select>
            </el-form-item>
            <el-button size="small"> 清除 </el-button>
            <el-button type="primary" size="small"> 搜索 </el-button>
          </el-form>
        </template>
        <template #right>
          <el-button size="small" icon="el-icon-edit" type="success">
            新增学科
          </el-button>
        </template>
      </SearchComponents>
      <PageHeader>
        <template #left>
          <span> 共{{ total }}条记录 </span>
        </template>
        <template #right></template>
      </PageHeader>
      <!-- 信息展示 -->
      <template>
        <el-table style="width: 100%" :data="directoryForm">
          <el-table-column label="序号" />
          <el-table-column label="所属学科" prop="subjectName" />
          <el-table-column label="目录名称" prop="directoryName" />
          <el-table-column label="创建者" prop="creatorID" />
          <el-table-column label="创建日期" prop="addDate" />
          <el-table-column label="面试题数量" prop="totals" />
          <el-table-column label="状态" prop="state" />
          <el-table-column label="操作">
            <template>
              <el-row>
                <el-button type="text">禁用</el-button>
                <el-button type="text">修改</el-button>
                <el-button type="text">删除</el-button>
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
import { getDirectoryListAPI } from '@/api/disciplinemanagement'
export default {
  name: 'DisciplineDirectorys',
  data() {
    return {
      directoryForm: [],
      query: {
        page: 1,
        pagesize: 2
      },
      total: 5,
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      }
    }
  },
  created() {
    this.getDirectoryList()
  },
  methods: {
    async getDirectoryList() {
      const resp = await getDirectoryListAPI(this.query)
      console.log(resp.data)
      this.query.page = +resp.data.page
      this.query.pagesize = +resp.data.pagesize
      this.total = resp.data.counts
      this.directoryForm = resp.data.items
      console.log(this.directoryForm)
    },
    handleSizeChange(val) {
      this.query.pagesize = val
      this.getDirectoryList()
    },
    handleCurrentChange(val) {
      this.query.page = val
      this.getDirectoryList()
    }
  }
}
</script>

<style>
</style>
