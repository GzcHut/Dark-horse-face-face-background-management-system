<template>
  <!-- 基础题库 -->
  <div>
    <el-card>
      <QuestionBankInput />
      <PageHeader>
        <template #left>
          <span> 共89条记录 </span>
        </template>
        <template #right></template>
      </PageHeader>
      <!-- 信息展示 -->
      <template>
        <el-table style="width: 100%" :data="questionForm">
          <el-table-column label="试题编号" prop="number" />
          <el-table-column label="学科" prop="subjectID" />
          <el-table-column label="目录" prop="catalogID" />
          <el-table-column label="题型" prop="questionType" />
          <el-table-column label="题干" prop="question" />
          <el-table-column label="录入时间" prop="addDate" />
          <el-table-column label="难度" prop="difficulty" />
          <el-table-column label="录入人" prop="creator" />
          <el-table-column label="操作" fixed="right" width="210px">
            <template>
              <el-row>
                <el-button type="text">预览</el-button>
                <el-button type="text">审核</el-button>
                <el-button type="text">修改</el-button>
                <el-button type="text">下架</el-button>
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
import { getFQuestionListAPI } from '@/api/questionbankmanagement'
export default {
  name: 'List',
  data() {
    return {
      questionForm: [],
      query: {
        page: 1,
        pagesize: 5
      },
      total: 5
    }
  },
  created() {
    this.getFQuestionList()
  },
  methods: {
    async getFQuestionList() {
      const resp = await getFQuestionListAPI(this.query)
      console.log(resp.data.items)
      this.questionForm = resp.data.items
    },
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
