<template>
  <el-carousel indicator-position="outside" height="60vh" style="text-align: center">
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
        imgs:[require('@/assets/img/nintendo/banner/banner1.jpg'),require('@/assets/img/nintendo/banner/banner2.jpg'),require('@/assets/img/nintendo/banner/banner3.jpg'),require('@/assets/img/nintendo/banner/banner4.jpg')]
      }
    }
  }
</script>

<style scoped>
  >>>.el-carousel__arrow{
    background-color: rgba(230, 0, 18, 0.51);
  }
  >>>.el-carousel__arrow:hover{
  background-color: #e60012;
}
  >>>.el-carousel__button{
    background-color: #e60012;
  }
  >>>.el-carousel__arrow--left{
    height: 60px;
    width: 60px;
  }
  >>>.el-carousel__arrow--right{
    height: 60px;
    width: 60px;
  }
</style>
