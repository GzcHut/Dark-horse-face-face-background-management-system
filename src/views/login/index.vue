<template>
  <div class="login-container">
    <el-form
      ref="loginForm"
      :model="loginForm"
      :rules="loginRules"
      class="login-form"
      auto-complete="on"
      label-position="left"
    >
      <!-- 标题 -->
      <div class="title-container">
        <img src="@/assets/common/Logo.png" alt="Logo" class="logo" />
        <span class="title">用户登录</span>
      </div>

      <!-- 账号 -->
      <el-form-item prop="username">
        <span class="svg-container">
          <svg-icon icon-class="user" />
        </span>
        <el-input
          ref="username"
          v-model="loginForm.username"
          placeholder="Username"
          name="username"
          type="text"
          tabindex="1"
          auto-complete="on"
        />
      </el-form-item>

      <!-- 密码 -->
      <el-form-item prop="password">
        <span class="svg-container">
          <svg-icon icon-class="password" />
        </span>
        <el-input
          :key="passwordType"
          ref="password"
          v-model="loginForm.password"
          :type="passwordType"
          placeholder="Password"
          name="password"
          tabindex="2"
          auto-complete="on"
          @keyup.enter.native="handleLogin"
        />
        <span class="show-pwd" @click="showPwd">
          <svg-icon
            :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'"
          />
        </span>
      </el-form-item>

      <!-- 登录 -->
      <el-button
        :loading="loading"
        type="primary"
        style="width: 100%; margin-bottom: 30px"
        @click.native.prevent="handleLogin"
      >
        登录
      </el-button>
    </el-form>
  </div>
</template>

<script>
// import { validUsername } from '@/utils/validate'
import Shajs from 'jssha'

export default {
  name: 'Login',
  data() {
    // const validateUsername = (rule, value, callback) => {
    //   if (!validUsername(value)) {
    //     callback(new Error('请输入正确的用户名'))
    //   } else {
    //     callback()
    //   }
    // }
    // const validatePassword = (rule, value, callback) => {
    //   if (value.length < 6) {
    //     callback(new Error('密码不能少于6位数字'))
    //   } else {
    //     callback()
    //   }
    // }
    return {
      loginForm: {
        username: 'root@admin.com',
        password: '123456'
      },
      // 校验规则
      loginRules: {
        username: [
          { required: true, message: '请输入邮箱', trigger: ['blur', 'change'] }
          // { required: true, trigger: 'blur', validator: validateUsername }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: ['blur', 'change'] }
          // { required: true, trigger: 'blur', validator: validatePassword }
        ]
      },
      loginFormRecessiveness: {
        username: 'root@admin.com',
        password: ''
      },
      loading: false,
      passwordType: 'password',
      redirect: undefined
    }
  },
  // watch: {
  //   $route: {
  //     handler: (route) => {
  //       this.redirect = route.query && route.query.redirect
  //     },
  //     immediate: true
  //   }
  // },
  created() {
    this.overtToRecessive()
  },
  methods: {
    showPwd() {
      if (this.passwordType === 'password') {
        this.passwordType = ''
      } else {
        this.passwordType = 'password'
      }
      this.$nextTick(() => {
        this.$refs.password.focus()
      })
    },
    // 传输密码显性转隐性
    overtToRecessive() {
      // 1. 生成 shajs 实例
      const shajs = new Shajs('SHA-256', 'TEXT', { encoding: 'UTF8' })
      // 2. 要加密的密码
      shajs.update(this.loginForm.password)
      // 3. 获取
      const pwd = shajs.getHash('HEX')
      this.loginFormRecessiveness.password = pwd
    },
    async handleLogin() {
      this.$refs.loginForm.validate(async (valid) => {
        if (!valid) return
        try {
          await this.$store.dispatch(
            'user/getLogin',
            this.loginFormRecessiveness
          )
          this.$message.success('登录成功了呀')
          this.$router.replace(this.$route.query.redirectUrl || '/')
        } catch (error) {
          this.$message.error(error.message || '登录失败了呀')
        }
      })
    }
  }
}
</script>

<style lang="scss">
/* 修复input 背景不协调 和光标变色 */
/* Detail see https://github.com/PanJiaChen/vue-element-admin/pull/927 */

// 样式变量
$bg: #283443;
$light_gray: #fff;
$cursor: #fff;

@supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
  .login-container .el-input input {
    color: $cursor;
  }
}

/* 重置元素-UI CSS */
.login-container {
  .el-input {
    display: inline-block;
    height: 47px;
    width: 85%;
    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: $light_gray;
      height: 47px;
      caret-color: $cursor;

      &:-webkit-autofill {
        box-shadow: 0 0 0px 1000px $bg inset !important;
        -webkit-text-fill-color: $cursor !important;
      }
    }
  }

  .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
  }
}
</style>

<style lang="scss" scoped>
// 样式变量
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;

// 整个背景的样式处理
.login-container {
  background-image: url('~@/assets/common/login-background.jpg'); // 设置背景图片
  background-position: center; // 将图片位置设置为充满整个屏幕
  min-height: 100%;
  width: 100%;
  background-color: $bg;
  overflow: hidden;

  //登录框的背景
  .login-form {
    position: relative;
    width: 520px;
    max-width: 100%;
    padding: 10px 35px;
    margin: 200px auto;
    overflow: hidden;
    background: rgba(207, 105, 9, 0.2);
  }

  // 输入框前的小图标样式
  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
  }
  // “用户登录”标题样式
  .title-container {
    position: relative;
    margin: 15px 0;
    .logo {
      height: 28.5px;
      margin-right: 15px;
    }
    .title {
      font-size: 26px;
      font-weight: 700;
      color: $light_gray;
      vertical-align: top;
    }
  }
  // 密码输入框小眼睛样式
  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
}
</style>
