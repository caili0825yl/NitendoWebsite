<template>
  <el-breadcrumb separator="|" style="display: inline-block">
    <el-breadcrumb-item v-for="item in options" :to="item.url" >{{item.title}}</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
  export default {
    name: "mainNavBar",
    data(){
      return{
        options:[
          {
            title:'公司信息',
            url:'/tencent/company'
          },
          {
            title:'企业文化',
            url:'/tencent/company'
          },
          {
            title:'业务体系',
            url:'/tencent/company'
          },
          {
            title:'投资者关系',
            url:'/tencent/company'
          }
        ]
      }
    }
  }
</script>

<style scoped>
  >>>.el-breadcrumb__inner,>>>.el-breadcrumb__item:last-child .el-breadcrumb__inner{
    color: white;
    font-size: larger;
    margin: 0 20px;
    padding-top: 20px;
  }
  >>>.el-breadcrumb__item:last-child .el-breadcrumb__inner:hover{
    cursor: pointer;
    color: white;
    font-size: larger;
    border-top: white 5px solid;
  }
  >>>.el-breadcrumb__inner.is-link, .el-breadcrumb__inner a{
    font-weight: initial;
  }
  >>>.el-breadcrumb__inner.is-link:hover, .el-breadcrumb__inner a:hover{
    color: white;
    border-top: white 5px solid;

  }
</style>
