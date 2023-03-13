<template>
  <!-- 精选题库 -->
  <div>
    <QuestionBankInput />
    <el-tabs v-model="activeName" type="card">
      <el-tab-pane label="全部" name="first">
        <PageHeader>
          <template #left>
            <span> 共{{ total }}条记录 </span>
          </template>
          <template #right></template>
        </PageHeader>
        <div>
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
              <el-table-column label="审核状态" prop="chkState" />
              <el-table-column label="审核意见" prop="chkRemarks" />
              <el-table-column label="审核人" prop="chkUser" />
              <el-table-column label="发布状态" />
              <el-table-column label="操作" fixed="right">
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
                2, 4, 6, 8, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36,
                38, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58, 60, 62, 64, 66, 68
              ]"
              :page-size="query.pagesize"
              layout="total, sizes, prev, pager, next, jumper"
              :total="total"
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
            />
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="待审核" name="second">
        <PageHeader>
          <template #left>
            <span> 共5条记录 </span>
          </template>
          <template #right></template>
        </PageHeader>
        <div>
          <!-- 信息展示 -->
          <template>
            <el-table style="width: 100%">
              <el-table-column label="试题编号" />
              <el-table-column label="学科" />
              <el-table-column label="目录" />
              <el-table-column label="题型" />
              <el-table-column label="题干" />
              <el-table-column label="录入时间" />
              <el-table-column label="难度" />
              <el-table-column label="录入人" />
              <el-table-column label="操作">
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
                2, 4, 6, 8, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36,
                38, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58, 60, 62, 64, 66, 68
              ]"
              :page-size="query.pagesize"
              layout="total, sizes, prev, pager, next, jumper"
              :total="total"
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
            />
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="已审核" name="third">
        <PageHeader>
          <template #left>
            <span> 共5条记录 </span>
          </template>
          <template #right></template>
        </PageHeader>
        <div>
          <!-- 信息展示 -->
          <template>
            <el-table style="width: 100%">
              <el-table-column label="试题编号" />
              <el-table-column label="学科" />
              <el-table-column label="目录" />
              <el-table-column label="题型" />
              <el-table-column label="题干" />
              <el-table-column label="录入时间" />
              <el-table-column label="难度" />
              <el-table-column label="录入人" />
              <el-table-column label="操作">
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
                2, 4, 6, 8, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36,
                38, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58, 60, 62, 64, 66, 68
              ]"
              :page-size="query.pagesize"
              layout="total, sizes, prev, pager, next, jumper"
              :total="total"
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
            />
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="已拒绝" name="fourth">
        <PageHeader>
          <template #left>
            <span> 共5条记录 </span>
          </template>
          <template #right></template>
        </PageHeader>
        <div>
          <!-- 信息展示 -->
          <template>
            <el-table style="width: 100%">
              <el-table-column label="试题编号" />
              <el-table-column label="学科" />
              <el-table-column label="目录" />
              <el-table-column label="题型" />
              <el-table-column label="题干" />
              <el-table-column label="录入时间" />
              <el-table-column label="难度" />
              <el-table-column label="录入人" />
              <el-table-column label="操作">
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
                2, 4, 6, 8, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36,
                38, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58, 60, 62, 64, 66, 68
              ]"
              :page-size="query.pagesize"
              layout="total, sizes, prev, pager, next, jumper"
              :total="total"
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
            />
          </div>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import { getSQuestionListAPI } from '@/api/questionbankmanagement'
export default {
  name: 'Choice',
  data() {
    return {
      activeName: 'first',
      questionForm: [],
      query: {
        page: 1,
        pagesize: 2
      },
      total: 5
    }
  },
  created() {
    this.getSQuestionList()
  },
  methods: {
    // 获取精选题库列表
    async getSQuestionList() {
      const resp = await getSQuestionListAPI(this.query)
      console.log(resp)
      console.log(resp.data.items)
      this.questionForm = resp.data.items
      this.total = resp.data.counts
      this.query.page = resp.data.page
      this.query.pagesize = resp.data.pagesize
    },
    handleSizeChange(val) {
      this.query.pagesize = val
      this.getSQuestionList()
    },
    handleCurrentChange(val) {
      this.query.page = val
      this.getSQuestionList()
    }
  }
}
</script>

<style>
</style>
