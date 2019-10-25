<template>

  <div class="slide">
    <el-backtop :bottom="100"></el-backtop>
    <div class="sticky">
      <el-image
        class="img"
        :src="img"
      ></el-image>
      <nav-menu/>
    </div>
    <el-container>
      <el-header height="70vh">
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
  import Header from "@/views/Nintendo/Child/Header";
  import Footer from "@/views/Nintendo/Child/Footer";
  import Main from "@/views/Nintendo/Child/Main";
  import navMenu from "@/components/nintendo/header/navMenu";

  export default {
    name: "Nintendo",
    data() {
      return {
        img: require('@/assets/img/nintendo/logo/logo.png')
      }
    },
    components: {
      Header,
      Footer,
      Main,
      navMenu
    }
  }
</script>

<style scoped>
  .el-header,.el-footer,.el-main{
    padding: 0;
  }
  .img {
    transform: translate(0, 0);
    width: 15%;
    margin-right: 10%
  }

  .sticky {
    padding: 0 20% 10px 20%;
    position: sticky;
    position: -webkit-sticky;
    top: 0px;
    z-index: 1000;
    background-color: #fff;
    border-bottom: #e60012 1px solid;
  }
</style>
