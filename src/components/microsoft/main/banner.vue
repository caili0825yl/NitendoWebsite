<template>
  <el-carousel  height="70vh" >
    <el-carousel-item v-for="item in imgs" :key="item">
      <el-image
        style="width: inherit;height: inherit"
        :src="item"
        fit="fill"
      ></el-image>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
  export default {
    name: "banner",
    data(){
      return{
        imgs:[require('@/assets/img/microsoft/banner/banner1.jpg'),require('@/assets/img/microsoft/banner/banner2.webp')]

      }
    }
  }
</script>

<style scoped>

</style>
