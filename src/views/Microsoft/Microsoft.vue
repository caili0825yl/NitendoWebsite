<template>
  <div>
    <el-container>
      <el-header class="main">
        <Header/>
      </el-header>
      <el-main class="main">
        <Main/>
      </el-main>
      <el-footer>
        <Footer/>
      </el-footer>
    </el-container>
  </div>
</template>
<script>
  import Header from "@/views/Microsoft/Child/Header";
  import Main from "@/views/Microsoft/Child/Main";
  import Footer from "@/views/Microsoft/Child/Footer";

  export default {
    name: "Microsoft",
    components:{
      Header,
      Main,
      Footer
    }
  }
</script>

<style scoped>
  .main{
    margin: 0 8%;
  }
  .el-header,.el-footer,.el-main{
    padding: 0;
  }

</style>
