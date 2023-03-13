<template>
  <div>
    <el-row>
      <el-col :span="6">
        <el-form>
          <el-form-item label="标签名称" />
          <el-input size="small" />
        </el-form>
      </el-col>
      <el-col :span="6">
        <el-form>
          <el-form-item label="城市" />
          <!-- <el-select v-model="value" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select> -->
        </el-form>
      </el-col>
      <el-col :span="6">
        <el-form>
          <el-form-item label="城市" />
          <el-input />
        </el-form>
      </el-col>
      <el-col :span="6">
        <el-form>
          <el-form-item label="城市" />
          <el-input />
        </el-form>
      </el-col>
      <el-col :span="6">
        <el-form>
          <el-form-item label="城市" />
          <el-input />
        </el-form>
      </el-col>
      <el-col :span="15">
        <el-button>清除</el-button>
        <el-button>搜索</el-button>
      </el-col>
      <el-col :span="3">
        <el-button>新增用户</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'EnterpriseInput',
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
::v-deep .el-form {
  display: flex;
  justify-content: center;
  .el-input {
    width: 70%;
  }
}
</style>
