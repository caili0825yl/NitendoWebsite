<template>
  <div class="logo_main">
    <div class="inner">
    <el-image
      class="logo"
      :src="img"
    ></el-image>
    </div>
  </div>
</template>

<script>
  export default {
    name: "logo",
    data() {
      return {
        img: require('@/assets/img/nintendo/logo/logo_white.png')
      }
    }
  }
</script>

<style scoped>
  .logo_main{
    background-color: #e60012;
  }
  .inner{
    padding: 0 10% 0;
    text-align: center
  }
  .logo{
    width: 10%;
    padding: 2%;
    cursor: pointer;
  }
</style>
