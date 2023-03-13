<template>
  <div>
    <el-card>
      <PageHeader>
        <template #left>
          <span>暂无接口，没有数据展示</span>
          <!-- <span> 共5条记录 </span> -->
        </template>
        <template #right></template>
      </PageHeader>
      <!-- 信息展示 -->
      <template>
        <el-table style="width: 100%">
          <el-table-column label="操作类型" />
          <el-table-column label="操作人" />
          <el-table-column label="执行结果" />
          <el-table-column label="操作时间" />
          <el-table-column label="简述" />
        </el-table>
      </template>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'Log'
}
</script>

<style>
</style>
