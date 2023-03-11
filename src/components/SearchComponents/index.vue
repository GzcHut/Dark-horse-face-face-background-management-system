<template>
  <el-card>
    <div class="page-header">
      <div class="left">
        <div v-if="$slots.left" class="content">
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
  name: 'SearchComponents'
}
</script>

<style lang="scss" scoped>
.page-header {
  display: flex;
  justify-content: space-between;
  .content {
    display: flex;
  }
}
</style>

