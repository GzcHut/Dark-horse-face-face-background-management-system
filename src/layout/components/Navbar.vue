<template>
  <div class="navbar">
    <!-- 汉堡包图标 -->
    <hamburger
      :is-active="sidebar.opened"
      class="hamburger-container"
      @toggleClick="toggleSideBar"
    />

    <!-- 标题 -->
    <div class="app-breadcrumb">数据概览</div>

    <!-- 个人信息及操作 -->
    <div class="right-menu">
      <!-- <i class="el-icon-search"></i> -->
      <!-- <i class="el-icon-full-screen"></i> -->
      <el-dropdown class="avatar-container" trigger="click">
        <!-- 个人信息展示 -->
        <div class="avatar-wrapper">
          <span class="avatar-wrapper-font">{{ userInfo.name }}</span>
          <i class="el-icon-arrow-down"></i>
        </div>
        <!-- 用户操作 -->
        <el-dropdown-menu slot="dropdown" class="user-dropdown">
          <router-link to="/">
            <el-dropdown-item> 首页 </el-dropdown-item>
          </router-link>
          <el-dropdown-item divided @click.native="handlelogout">
            <span style="display: block">退出登录</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState, mapActions } from 'vuex'
// import Breadcrumb from '@/components/Breadcrumb'
import Hamburger from '@/components/Hamburger'
// import store from '@/store'

export default {
  components: {
    // Breadcrumb,
    Hamburger
  },
  computed: {
    ...mapGetters(['sidebar', 'avatar']),
    ...mapState('user', ['userInfo'])
  },
  methods: {
    ...mapActions('user', ['emptyTokenAction', 'emptyUserInfoAction']),
    toggleSideBar() {
      this.$store.dispatch('app/toggleSideBar')
    },
    async handlelogout() {
      try {
        await this.$confirm('我要滚啦, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        })
        await this.emptyTokenAction()
        await this.emptyUserInfoAction()
        // this.$router.go(0)
        this.$router.replace(`/login?redirectUrl=${this.$route.fullpath}`)
        this.$message.success('退出我要滚啦')
      } catch (error) {
        this.$message.info('取消你大爷')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  background: -webkit-linear-gradient(left, #f83da4, #5b8cff);
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);

  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background 0.3s;
    -webkit-tap-highlight-color: transparent;
    ::v-deep .hamburger {
      fill: #fff;
    }
    &:hover {
      background: rgba(0, 0, 0, 0.025);
    }
  }

  .app-breadcrumb {
    display: inline-block;
    font-size: 18px;
    line-height: 50px;
    margin-left: 10px;
    color: #fff;
    cursor: text;
    .breadBtn {
      background: #84a9fe;
      font-size: 14px;
      padding: 0 10px;
      display: inline-block;
      height: 30px;
      line-height: 30px;
      border-radius: 10px;
      margin-left: 15px;
    }
  }

  .right-menu {
    float: right;
    height: 100%;
    line-height: 50px;

    &:focus {
      outline: none;
    }
    .avatar-container {
      margin-right: 30px;

      .avatar-wrapper {
        position: relative;

        .avatar-wrapper-font {
          color: #fff;
        }
        .el-icon-arrow-down {
          cursor: pointer;
          position: absolute;
          right: -20px;
          top: 18px;
          font-size: 12px;
          color: #fff;
        }
      }
    }
  }
}
</style>
