<template>
  <!-- 用户页面 -->
  <div>
    <el-card>
      <SearchComponents>
        <template #left>
          <el-input placeholder="根据用户名搜索" size="small" />
          <el-button size="small" style="margin-left: 10px"> 清空 </el-button>
          <el-button type="primary" size="small"> 搜索 </el-button>
        </template>
        <template #right>
          <el-button
            type="success"
            size="small"
            icon="el-icon-edit"
            @click="handleAdd"
          >
            新增用户
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
        <el-table style="width: 100%" :data="userForm">
          <el-table-column label="序号" type="index" :index="indexMethod" />
          <el-table-column label="邮箱" prop="email" />
          <el-table-column label="联系电话" prop="phone" />
          <el-table-column label="用户名" prop="username" />
          <el-table-column label="权限组名称" prop="permission_group_title" />
          <el-table-column label="角色" prop="role" />
          <el-table-column label="操作">
            <template #default="{ row }">
              <el-row>
                <el-button
                  type="primary"
                  icon="el-icon-edit"
                  circle
                  @click="handleRev(row.id)"
                />
                <el-button
                  type="danger"
                  icon="el-icon-delete"
                  circle
                  @click="handleDel(row.id)"
                />
              </el-row>
            </template>
          </el-table-column>
        </el-table>
      </template>
      <!-- 分页组件 -->
      <div style="height: 40px; margin-top: 20px">
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
    <!-- 新增用户 -->
    <el-dialog
      title="新增用户"
      :visible="addShowDialog"
      top="8vh"
      @close="addHandeleDown"
      @open="getPermissions"
    >
      <!-- 表单 -->
      <el-form
        ref="addForm"
        label-width="150px"
        :model="formData"
        :rules="formRules"
      >
        <el-form-item label="用户名" prop="username">
          <el-input
            v-model="formData.username"
            style="width: 80%"
            placeholder="请输入用户名"
          />
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input
            v-model="formData.email"
            style="width: 80%"
            placeholder="请输入邮箱"
          />
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input
            v-model="formData.password"
            style="width: 80%"
            placeholder="请输入密码"
          />
        </el-form-item>
        <el-form-item label="角色">
          <el-input
            v-model="formData.role"
            style="width: 80%"
            placeholder="请输入角色名称"
          />
        </el-form-item>
        <el-form-item label="权限组名称">
          <el-select
            v-model="formData.permission_group_title"
            placeholder="请选择"
          >
            <el-option
              v-for="item in options"
              :key="item.id"
              :value="item.id"
              :label="item.title"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="联系电话">
          <el-input
            v-model="formData.phone"
            style="width: 80%"
            placeholder="请输入联系电话"
          />
        </el-form-item>
        <el-form-item label="介绍">
          <el-input
            v-model="formData.introduction"
            type="textarea"
            style="width: 80%"
            placeholder="请输入角色介绍"
          />
        </el-form-item>
      </el-form>
      <!-- footer插槽 -->

      <template v-slot:footer>
        <el-button @click="addHandeleDown">取消</el-button>
        <el-button type="primary" @click="addEmployee">确定</el-button>
      </template>
    </el-dialog>
    <!-- 修改用户 -->
    <el-dialog
      title="用户"
      :visible="revShowDialog"
      top="8vh"
      @close="revHandeleDown"
      @open="getPermissions"
    >
      <!-- 表单 -->
      <el-form
        ref="addForm"
        label-width="150px"
        :model="formData"
        :rules="formRules"
      >
        <el-form-item label="用户名" prop="username">
          <el-input
            v-model="formData.username"
            style="width: 80%"
            placeholder="请输入用户名"
          />
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input
            v-model="formData.email"
            style="width: 80%"
            placeholder="请输入邮箱"
          />
        </el-form-item>
        <el-form-item label="角色">
          <el-input
            v-model="formData.role"
            style="width: 80%"
            placeholder="请输入角色名称"
          />
        </el-form-item>
        <el-form-item label="权限组名称">
          <el-select
            v-model="formData.permission_group_id"
            placeholder="请选择"
          >
            <el-option
              v-for="item in options"
              :key="item.id"
              :value="item.id"
              :label="item.title"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="联系电话">
          <el-input
            v-model="formData.phone"
            style="width: 80%"
            placeholder="请输入联系电话"
          />
        </el-form-item>
        <el-form-item label="介绍">
          <el-input
            v-model="formData.introduction"
            type="textarea"
            style="width: 80%"
            placeholder="请输入角色介绍"
          />
        </el-form-item>
      </el-form>
      <!-- footer插槽 -->
      <template v-slot:footer>
        <el-button @click="revHandeleDown">取消</el-button>
        <el-button type="primary" @click="revEmployee">确定</el-button>
      </template>
    </el-dialog>
  </div>
</template>

<script>
import {
  getUserListAPI,
  addUserListAPI,
  revUserListAPI,
  delUserListAPI
} from '@/api/usermanagement'
import { getPermissionsAPI } from '@/api/permissiongroups'
export default {
  name: 'User',
  data() {
    return {
      userForm: [], // 页面展示的数据
      options: [], // 权限组名称数据
      query: {
        page: 1, // 页码
        pagesize: 2 // 每页条数
      },
      total: 1, // 总条数
      addShowDialog: false, // 控制新增dialog开关的
      revShowDialog: false, // 控制修改dialog开关的
      // 校验表单内容
      formData: {
        username: '', // 用户名
        email: '', // 邮箱
        password: '', // 密码
        role: '', // 角色
        permission_group_title: '', // 权限组名称
        permission_group_id: '',
        phone: '', // 电话
        introduction: '' // 介绍
      },
      // 校验表单规则
      formRules: {
        username: [
          {
            required: true,
            message: '用户名不能为空',
            trigger: ['blur', 'change']
          }
        ],
        email: [
          {
            required: true,
            message: '邮箱不能为空',
            trigger: ['blur', 'change']
          }
        ],
        password: [
          {
            required: true,
            message: '密码不能为空',
            trigger: ['blur', 'change']
          }
        ]
      }
    }
  },
  created() {
    // 调用获取用户列表的方法
    this.getUserList()
  },
  methods: {
    // 获取用户列表
    async getUserList() {
      const resp = await getUserListAPI(this.query)
      console.log(resp.data)
      this.userForm = resp.data.list
      this.query.page = +resp.data.page
      this.query.pagesize = +resp.data.pagesize
      this.total = resp.data.counts
    },
    // 自定义索引
    indexMethod(index) {
      return index + 1 + (this.query.page - 1) * this.query.pagesize
    },
    // 打开新增dialog表单
    handleAdd() {
      this.addShowDialog = true
    },
    // 打开权限组名称
    async getPermissions() {
      const resp = await getPermissionsAPI(this.query)
      this.options = resp.data.list
    },
    // 关闭新增dialog表单
    addHandeleDown() {
      this.addShowDialog = false
      // 关闭时清空新增dialog表单
      this.$refs.addForm.resetFields()
    },
    // 传输每页条数
    handleSizeChange(val) {
      this.query.pagesize = val
      this.getUserList()
    },
    // 传输页码
    handleCurrentChange(val) {
      this.query.page = val
      this.getUserList()
    },
    // 新增整体校验
    addEmployee() {
      this.$refs.addForm.validate(async (flag) => {
        if (!flag) return
        // 调接口，发请求
        await addUserListAPI(this.formData)
        console.log(await addUserListAPI(this.formData))
        // 关闭弹窗
        this.addHandeleDown()
        // 重新渲染用户列表
        this.getUserList()
        // 添加成功的报告
        this.$message.success('添加成功')
      })
    },
    // 打开修改dialog表单，用于回显
    async handleRev(dataId) {
      this.revShowDialog = true
      const resp = await revUserListAPI(dataId)
      this.formData = resp.data
    },
    // 关闭修改dialog表单
    revHandeleDown() {
      this.revShowDialog = false
    },
    // 修改整体校验
    revEmployee() {
      this.$refs.addForm.validate(async (flag) => {
        if (!flag) return
        // 调接口，发请求
        await addUserListAPI(this.formData)
        console.log(await addUserListAPI(this.formData))
        // 关闭弹窗
        this.revHandeleDown()
        // 重新渲染用户列表
        this.getUserList()
        // 添加成功的报告
        this.$message.success('添加成功')
      })
    },
    // 删除按钮功能
    async handleDel(dataId) {
      try {
        await this.$confirm('此操作将永久删除用户，是否继续？', '提示', {
          type: 'warning',
          cancelButtonText: '取消',
          confirmButtonText: '确定'
        })
        await delUserListAPI(dataId)
        if (this.query.page > 1 && this.userForm.length === 1) {
          this.query.page--
        }
        this.getUserList()
        this.$message.success('删除用户成功')
      } catch (error) {
        this.$message.info('已取消删除操作')
      }

      this.getUserList()
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
