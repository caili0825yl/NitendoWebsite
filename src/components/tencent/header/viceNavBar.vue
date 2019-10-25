<template>
  <el-breadcrumb separator="|" style="display: inline-block;margin-left: 5%">
    <el-breadcrumb-item>简</el-breadcrumb-item>
    <el-breadcrumb-item>繁</el-breadcrumb-item>
    <el-breadcrumb-item>EN</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
  export default {
    name: "viceNavBar"
  }
</script>

<style scoped>
  >>>.el-breadcrumb__inner,>>>.el-breadcrumb__item:last-child .el-breadcrumb__inner{
    color: white;
    cursor: pointer;
    font-size: medium;
  }
  >>>.el-breadcrumb__item:last-child .el-breadcrumb__inner:hover{
    color: white;
    cursor: pointer;
    font-size: medium;
  }
</style>
