<template>
  <div>
    <el-row>
      <el-col :span="12">
        <span>说明:目前支持学科和关键字条件筛选</span>
      </el-col>
      <el-col :span="12">
        <el-button icon="el-icon-edit" type="success">新增试题</el-button>
      </el-col>
      <el-col :span="6">
        <el-form>
          <el-form-item label="标签名称">
            <el-input />
          </el-form-item>
        </el-form>
      </el-col>
      <el-col :span="6">
        <el-form>
          <el-form-item label="城市">
            <el-input />
          </el-form-item>
        </el-form>
      </el-col>
      <el-col :span="6">
        <el-form>
          <el-form-item label="城市">
            <el-input />
          </el-form-item>
        </el-form>
      </el-col>
      <el-col :span="6">
        <el-form>
          <el-form-item label="城市">
            <el-input />
          </el-form-item>
        </el-form>
      </el-col>
      <el-col :span="6">
        <el-form>
          <el-form-item label="标签名称">
            <el-input />
          </el-form-item>
        </el-form>
      </el-col>
      <el-col :span="6">
        <el-form>
          <el-form-item label="城市">
            <el-input />
          </el-form-item>
        </el-form>
      </el-col>
      <el-col :span="6">
        <el-form>
          <el-form-item label="城市">
            <el-input />
          </el-form-item>
        </el-form>
      </el-col>
      <el-col :span="6">
        <el-form>
          <el-form-item label="城市">
            <el-input />
          </el-form-item>
        </el-form>
      </el-col>
      <el-col :span="6">
        <el-form>
          <el-form-item label="标签名称">
            <el-input />
          </el-form-item>
        </el-form>
      </el-col>
      <el-col :span="6">
        <el-form>
          <el-form-item label="城市">
            <el-input />
          </el-form-item>
        </el-form>
      </el-col>
      <el-col :span="6">
        <el-form>
          <el-form-item label="城市">
            <el-input />
          </el-form-item>
        </el-form>
      </el-col>
      <el-col :span="6">
        <el-button>清楚</el-button>
        <el-button>搜索</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'QuestionBankInput'
}
</script>

<style lang="scss" scoped>
</style>
