<template>
  <div class="center">
    <el-button type="danger" @click="nintendo">任天堂</el-button>
    <el-button type="primary" @click="tencent">腾讯</el-button>
    <el-button type="success" @click="microsoft">微软</el-button>
  </div>
</template>

<script>

  export default {
    name: "Select",
    methods:{
      nintendo(){
        this.$router.push("/nintendo")
      },
      tencent(){
        this.$router.push("/tencent")
      },
      microsoft(){
        this.$router.push("/microsoft")
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "../assets/theme/tencent";

  .center{
    position: absolute;
    left: 42%;
    top: 42%
  }
</style>
