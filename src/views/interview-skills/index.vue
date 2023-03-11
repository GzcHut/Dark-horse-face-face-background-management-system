<template>
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
          <span> 共5条记录 </span>
        </template>
        <template #right></template>
      </PageHeader>
      <!-- 信息展示 -->
      <template>
        <el-table style="width: 100%">
          <el-table-column label="序号" />
          <el-table-column label="文章标题" />
          <el-table-column label="阅读数" />
          <el-table-column label="录入人" />
          <el-table-column label="录入时间" />
          <el-table-column label="状态" />
          <el-table-column label="操作">
            <template>
              <el-row>
                <el-button type="text">预览</el-button>
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
export default {
  name: 'InterviewSkills',
  data() {
    return {
      query: {
        page: 1,
        pagesize: 5
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
  methods: {
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
