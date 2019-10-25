<template>
  <div class="nav_bar">
    <main-nav-bar/>
    <vice-nav-bar/>
  </div>
</template>

<script>
  import mainNavBar from "@/components/tencent/header/mainNavBar";
  import viceNavBar from "@/components/tencent/header/viceNavBar";
  export default {
    name: "navBar",
    components:{
      mainNavBar,
      viceNavBar
    }
  }
</script>

<style scoped>
  .nav_bar{
    display: inline-block;
    margin-left: 10%;
    vertical-align:middle;
    width: 50%
  }
</style>
