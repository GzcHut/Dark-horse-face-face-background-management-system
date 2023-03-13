<template>
  <div class="dashboard-container">
    <el-row>
      <el-col :span="6">
        <el-card>
          <div class="grid-content bg-purple">
            <el-container>
              <el-header>Header</el-header>
              <el-main>Main</el-main>
              <el-footer>Footer</el-footer>
            </el-container>
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card>
          <div class="grid-content bg-purple-light">
            <el-container>
              <el-header>Header</el-header>
              <el-main>Main</el-main>
              <el-footer>Footer</el-footer>
            </el-container>
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card>
          <div class="grid-content bg-purple">
            <el-container>
              <el-header>Header</el-header>
              <el-main>Main</el-main>
              <el-footer>Footer</el-footer>
            </el-container>
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card>
          <div class="grid-content bg-purple-light">
            <el-container>
              <el-header>Header</el-header>
              <el-main>Main</el-main>
              <el-footer>Footer</el-footer>
            </el-container>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-card>
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="前端学科" name="first">前端学科</el-tab-pane>
        <el-tab-pane label="JAVA学科" name="second">JAVA学科</el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Dashboard',
  data() {
    return {
      activeName: 'first'
    }
  },
  computed: {
    ...mapGetters(['name'])
  },
  methods: {
    handleClick() {
      console.log('44')
    }
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
  background-color: #fff;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
.el-header,
.el-footer {
  background-color: yellow;
  color: #333;
  text-align: center;
  line-height: 60px;
}
.el-main {
  background-color: #fff;
  color: #333;
  text-align: center;
  line-height: 160px;
}
body > .el-container {
  margin-bottom: 40px;
}
.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}
.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
