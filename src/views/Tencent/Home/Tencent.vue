<template>
  <div>

    <el-backtop :bottom="100"></el-backtop>
    <div :class="[isTop? sticky_top: sticky]">
      <el-image
        class="img"
        :src="require('@/assets/img/tencent/logo/logo.png')"
        @click="jump"
      ></el-image>
      <nav-bar/>
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
  import Header from "@/views/Tencent/Home/Child/Header";
  import navBar from "@/components/tencent/header/navBar";
  import Main from "@/views/Tencent/Home/Child/Main";
  import Footer from "@/views/Tencent/Home/Child/Footer";

  export default {
    name: "Tencent",
    data() {
      return {
        img: require('@/assets/img/nintendo/logo/logo.png'),
        isTop: false,
        sticky: 'sticky',
        sticky_top: 'sticky_top'
      }
    },
    methods: {
      change() {
        let scrollTop = window.pageYOffset;
        if (scrollTop > 30) {
          this.$nextTick(() => {
            this.isTop = true
          });
        } else {
          this.$nextTick(() => {
            this.isTop = false
          });
        }
      },
      jump() {
        this.$router.push('/tencent').catch(err => err)
      }
    },
    components: {
      Header,
      navBar, Main,
      Footer
    },
    mounted() {
      window.addEventListener("scroll", this.change);
    }
  }
</script>

<style scoped lang="scss">
  @import "../../../assets/theme/tencent";

  .el-header, .el-footer, .el-main {
    padding: 0;
  }

  .img {
    margin: 1% 10% 1% 15%;
    vertical-align: middle;
  }

  .img:hover {
    cursor: pointer;
  }

  .sticky {
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    padding: 5px 0;
    transition: 0.2s;
    -webkit-transition: 0.2s;
  }

  .sticky_top {
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    background-color: #0052d9;
    transition: 0.2s linear;
    -webkit-transition: 0.2s linear;
  }

  .sticky_top:hover {
    padding: 10px 0;
    transition: 0.2s linear;
    -webkit-transition: 0.2s linear;
  }
</style>
