<template>
  <div style="display: inline-block">
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect"
    :active-text-color="activeColor">
      <el-menu-item index="1">首页</el-menu-item>
      <el-menu-item index="2">公司介绍</el-menu-item>
      <el-menu-item index="3">新闻中心</el-menu-item>
      <el-submenu index="4">
        <template slot="title">产品中心</template>
        <el-menu-item index="4-1">Nintendo Switch</el-menu-item>
        <el-menu-item index="4-2">Nintendo 3DS</el-menu-item>
        <el-menu-item index="4-3">amiibo</el-menu-item>
      </el-submenu>
      <el-submenu index="5">
        <template slot="title">游戏软件</template>
        <el-menu-item index="5-1">Nintendo Switch 游戏软件</el-menu-item>
        <el-menu-item index="5-2">Nintendo 3DS 游戏软件</el-menu-item>
      </el-submenu>
      <el-menu-item index="6">商城</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
  export default {
    name: "navMenu",
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1',
        activeColor: "#e60012"
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    },
    components: {}
  }
</script>

<style scoped >
  .el-menu::after {
    display: none;
  }

  .el-menu.el-menu--horizontal {
    border: none;
  }

  .el-menu--horizontal > .el-menu-item{
    height: 50px;
  }
  .el-menu--horizontal .el-menu-item:not(.is-disabled):hover, .el-menu--horizontal .el-menu-item:not(.is-disabled):focus{
    color: #e60012 ;
  }
  >>>.el-menu--horizontal > .el-submenu:hover .el-submenu__title{
    color: #909399 ;
  }
  >>>.el-menu--horizontal > .el-submenu .el-submenu__title{
    height: 50px;
  }
  >>>.el-menu--horizontal > .el-submenu:focus .el-submenu__title, .el-menu--horizontal > .el-submenu:hover .el-submenu__title{
    color: #909399;
  }
</style>
