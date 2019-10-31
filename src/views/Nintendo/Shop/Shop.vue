<template>
  <div>
    <el-backtop :bottom="100" :right="15"></el-backtop>
    <el-container>
      <el-header>
        <Header/>
      </el-header>
      <el-main>
        <Main/>
      </el-main>
      <el-footer>
        <Footer/>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
  import Header from "@/views/Nintendo/Shop/Child/Header";
  import Footer from "@/views/Nintendo/Shop/Child/Footer";
  import Main from "@/views/Nintendo/Shop/Child/Main";

  export default {
    name: "Shop",
    components:{
      Header,Footer,Main
    }
  }
</script>

<style scoped>
  .el-header,.el-footer,.el-main{
    padding: 0;
  }
  .el-main{
    background-color: #f5f4f4;
  }
  .footer{
      background:-webkit-gradient(linear,left top,left bottom,from(#8f8f8f),to(#7d7d7d)) !important
  }
</style>
