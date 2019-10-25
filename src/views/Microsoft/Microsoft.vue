<template>
  <div class="main">
    <el-container>
      <el-header>
        <Header/>
      </el-header>
      <el-main>
        <Main/>
      </el-main>
      <el-footer>
      </el-footer>
    </el-container>
  </div>
</template>
<script>
  import Header from "@/views/Microsoft/Child/Header";
  import Main from "@/views/Microsoft/Child/Main";
  export default {
    name: "Microsoft",
    components:{
      Header,
      Main
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
