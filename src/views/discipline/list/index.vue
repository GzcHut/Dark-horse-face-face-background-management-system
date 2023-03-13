<template>
  <!-- 学科 -->
  <div>
    <el-card>
      <SearchComponents>
        <template #left>
          <el-form>
            <el-form-item label="关键字">
              <el-input placeholder="根据编号搜索" />
              <el-button size="small"> 清楚 </el-button>
              <el-button type="primary" size="small"> 搜索 </el-button>
            </el-form-item>
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
        <el-table style="width: 100%" :data="disciplineForm">
          <el-table-column label="序号" />
          <el-table-column label="学科名称" prop="subjectName" />
          <el-table-column label="创建者" prop="username" />
          <el-table-column label="创建日期" prop="addDate" />
          <el-table-column label="前台是否显示" prop="isFrontDisplay" />
          <el-table-column label="二级目录" prop="twoLevelDirectory" />
          <el-table-column label="标签" prop="tags" />
          <el-table-column label="题目数量" prop="totals" />
          <el-table-column label="操作">
            <template>
              <el-row>
                <el-button type="text">学科分类</el-button>
                <el-button type="text">学科标签</el-button>
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
import { getDisciplineListAPI } from '@/api/disciplinemanagement'
export default {
  name: 'DisciplineList',
  data() {
    return {
      disciplineForm: [],
      query: {
        page: 1,
        pagesize: 2
      },
      total: 5
    }
  },
  created() {
    this.getDisciplineList()
  },
  methods: {
    async getDisciplineList() {
      const resp = await getDisciplineListAPI(this.query)
      console.log(resp.data.items)
      this.disciplineForm = resp.data.items
      this.query.page = +resp.data.page
      this.query.pagesize = +resp.data.pagesize
      this.total = resp.data.counts
    },
    handleSizeChange(val) {
      this.query.pagesize = val
      this.getDisciplineList()
      console.log(val)
    },
    handleCurrentChange(val) {
      this.query.page = val
      this.getDisciplineList()
    }
  }
}
</script>

<style>
</style>
