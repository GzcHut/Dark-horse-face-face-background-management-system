<template>
  <div>
    <el-card>
      <SearchComponents>
        <template #left> </template>
        <template #right>
          <el-button type="success" size="small" icon="el-icon-edit">
            新增用户
          </el-button>
        </template>
      </SearchComponents>
      <template>
        <el-table style="width: 100%">
          <el-table-column label="标题" />
          <el-table-column label="权限点代码" />
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
  </div>
</template>

<script>
export default {
  name: 'Menu'
}
</script>

<style>
</style>
