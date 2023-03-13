<template>
  <!-- 菜单页面 -->
  <div>
    <el-card>
      <SearchComponents>
        <template #left> </template>
        <template #right>
          <el-button
            type="success"
            size="small"
            icon="el-icon-edit"
            @click="addDialogOpen"
          >
            添加菜单
          </el-button>
        </template>
      </SearchComponents>
      <template>
        <el-table style="width: 100%" :data="menuForm">
          <el-table-column label="标题" prop="title" />
          <el-table-column label="权限点代码" prop="code" />
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
    </el-card>
    <el-dialog
      title="创建菜单"
      :visible="showDialog"
      width="30%"
      @close="addDialogDown"
    >
      <el-form>
        <el-form-item label="权限组名称">
          <el-radio v-model="radio" label="1">菜单</el-radio>
          <el-radio v-model="radio" label="2">权限点</el-radio>
        </el-form-item>
        <el-form-item label="权限组名称">
          <el-select v-model="mebu.title" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.id"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="权限代码">
          <el-input />
        </el-form-item>
        <el-form-item label="权限标题">
          <el-input />
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="addDialogDown">取 消</el-button>
        <el-button type="primary">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { getMenuAPI } from '@/api/menumanagement'
// import { list2Tree } from '@/utils/shift'
export default {
  name: 'Menu',
  data() {
    return {
      menuForm: [], // 数据展示
      showDialog: false, // dialog控制开关
      radio: '1', // 权限组默认展示
      options: [],
      mebu: {
        title: '',
        code: ''
      }
    }
  },
  created() {
    this.getMenu()
  },
  methods: {
    // 获取菜单数据展示内容 暂未展示成功
    async getMenu() {
      const resp = await getMenuAPI()
      // console.log(resp.data)
      this.menuForm = resp.data
      // this.menuForm = list2Tree(resp.data, '')
      // console.log(list2Tree(resp.data, ''))
    },

    // 用以打开dialog表单
    addDialogOpen() {
      this.showDialog = true
    },
    // 用以关闭dialog表单
    addDialogDown() {
      this.showDialog = false
    }
  }
}
</script>

<style lang="scss" scoped>
// dialog样式
::v-deep .el-dialog {
  .el-dialog__header {
    background-color: #409eff;
    .el-dialog__title {
      color: #fff;
    }
    .el-dialog__close {
      color: #fff;
    }
  }
  .el-dialog__footer {
    text-align: center;
  }
}
</style>
