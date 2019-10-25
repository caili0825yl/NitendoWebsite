<template>
  <div style="margin-top: 5%">
    <el-breadcrumb separator="|" style="display: inline-block">
      <el-breadcrumb-item>法律声明</el-breadcrumb-item>
      <el-breadcrumb-item>监督举报</el-breadcrumb-item>
      <el-breadcrumb-item>网站地图</el-breadcrumb-item>
      <el-breadcrumb-item>粤网文【2017】6138-1456号</el-breadcrumb-item>
    </el-breadcrumb>
    <span class="copyright">Copyright © 1998 - 2019 Tencent. All Rights Reserved.腾讯公司 版权所有</span>
  </div>
</template>

<script>
  export default {
    name: "copyRight"
  }
</script>

<style scoped>
  >>>.el-breadcrumb__inner,>>>.el-breadcrumb__item:last-child .el-breadcrumb__inner{
    font-size: 16px;
    color: #747b81;
    cursor: pointer;
  }
  .copyright{
    float: right;
    color: #747b81;
    font-size: 14px;
  }
  >>>.el-breadcrumb__inner:hover,>>>.el-breadcrumb__item:last-child .el-breadcrumb__inner:hover{
    cursor: pointer;
    color: black;
    transition: 0.2s linear;
  }
</style>
