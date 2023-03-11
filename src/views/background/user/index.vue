<template>
  <div>
    <el-card>
      <SearchComponents>
        <template #left>
          <el-input placeholder="根据用户名搜索" />
          <el-button size="small"> 清空 </el-button>
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
          <span> 共5条记录 </span>
        </template>
        <template #right></template>
      </PageHeader>
      <!-- 信息展示 -->
      <template>
        <el-table style="width: 100%" :data="userForm">
          <el-table-column label="序号" prop="id" />
          <el-table-column label="邮箱" prop="email" />
          <el-table-column label="联系电话" prop="phone" />
          <el-table-column label="用户名" prop="username" />
          <el-table-column label="权限组名称" prop="permission_group_title" />
          <el-table-column label="角色" prop="role" />
          <el-table-column label="操作">
            <template>
              <el-row>
                <el-button
                  type="primary"
                  icon="el-icon-edit"
                  circle
                  @click="handleRev"
                />
                <el-button
                  type="danger"
                  icon="el-icon-delete"
                  circle
                  @click="handleDel"
                />
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
    <!-- 新增用户 -->
    <el-dialog
      title="新增用户"
      :visible="showDialog"
      top="8vh"
      @close="handeleDown"
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
        <el-button @click="handeleDown">取消</el-button>
        <el-button type="primary" @click="addEmployee">确定</el-button>
      </template>
    </el-dialog>
    <!-- 修改用户 -->
    <el-dialog
      title="用户"
      :visible="showDialog"
      top="8vh"
      @close="handeleDown"
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
        <el-button @click="handeleDown">取消</el-button>
        <el-button type="primary" @click="addEmployee">确定</el-button>
      </template>
    </el-dialog>
  </div>
</template>

<script>
import { getUserListAPI, addUserListAPI } from '@/api/usermanagement'
import { getPermissionsAPI } from '@/api/permissiongroups'
export default {
  name: 'User',
  data() {
    return {
      userForm: [],
      options: [],
      query: {
        page: 1,
        pagesize: 5
      },
      total: 5,
      showDialog: false,
      formData: {
        username: '', // 用户名
        email: '', // 邮箱
        password: '', // 密码
        role: '', // 角色
        permission_group_title: '', // 权限组名称
        phone: '', // 电话
        introduction: '' // 介绍
      },
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
    this.getUserList()
    this.getPermissions()
  },
  methods: {
    async getUserList() {
      const resp = await getUserListAPI(this.query)
      this.userForm = resp.data.list
      // console.log(this.userForm)
    },
    handleSizeChange(val) {
      this.query.pagesize = val
      this.getUserList()
    },
    handleCurrentChange(val) {
      this.query.page = val
      this.getUserList()
    },
    handeleDown() {
      this.showDialog = false
      // 清空
      this.$refs.addForm.resetFields()
    },
    async getPermissions() {
      const resp = await getPermissionsAPI(this.query)
      // console.log(resp.data.list)
      this.options = resp.data.list
    },
    handleAdd() {
      this.showDialog = true
    },
    addEmployee() {
      console.log('9999')
      this.$refs.addForm.validate(async (flag) => {
        if (!flag) return
        await addUserListAPI(this.formData)
        this.handeleDown()
        this.getUserList()
        this.$message.success('添加成功')
      })
    },
    handleRev() {
      console.log('555')
    },
    handleDel() {
      console.log('666')
    }
  }
}
</script>

<style>
</style>
