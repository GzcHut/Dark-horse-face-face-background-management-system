<template>
  <el-card>
    <div class="page-header">
      <div class="left">
        <div v-if="$slots.left" class="content">
          <el-icon name="info" />
          <slot name="left"></slot>
        </div>
      </div>
      <div class="right">
        <div v-if="$slots.right" class="content">
          <slot name="right"></slot>
        </div>
      </div>
    </div>
  </el-card>
</template>

<script>
export default {
  name: 'PageHeader'
}
</script>

<style lang="scss" scoped>
.page-header {
  display: flex;
  justify-content: space-between;
  background-color: #f4f4f5;
  padding: 10px;
  .left {
    .content {
      height: 100%;
      display: flex;
      align-items: center;
      padding: 0px 15px;
      border-radius: 5px;
      color: #909399;
      .el-icon-info {
        color: #909399;
        margin-right: 5px;
      }
    }
  }
}
</style>

