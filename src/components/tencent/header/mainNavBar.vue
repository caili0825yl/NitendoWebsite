<template>
  <el-breadcrumb separator="|" style="display: inline-block">
    <el-breadcrumb-item>公司信息</el-breadcrumb-item>
    <el-breadcrumb-item>企业文化</el-breadcrumb-item>
    <el-breadcrumb-item>业务体系</el-breadcrumb-item>
    <el-breadcrumb-item>投资者关系</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
  export default {
    name: "mainNavBar"
  }
</script>

<style scoped>
  >>>.el-breadcrumb__inner,>>>.el-breadcrumb__item:last-child .el-breadcrumb__inner{
    color: white;
    cursor: pointer;
    font-size: larger;
    margin: 0 20px;
  }
  >>>.el-breadcrumb__item:last-child .el-breadcrumb__inner:hover{
    color: white;
    cursor: pointer;
    font-size: larger;
  }
</style>
