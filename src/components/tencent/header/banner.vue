<template>
  <el-carousel  height="65vh"  :autoplay="false" arrow="never" trigger="click" style="position: relative" >
    <el-carousel-item v-for="item in videos" :key="item.image" >
      <el-image
        class="img"
        :src="item.image"
      ></el-image>
      <video :src="item.video" loop autoplay preload muted  class="video"></video>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
  export default {
    name: "banner",
    data(){
      return{
        videos:[
          {
            image:require('@/assets/img/tencent/banner/text1.png'),
            video:require('@/assets/img/tencent/banner/bannerbg1.mp4')
          }
          ,
          {
            image:require('@/assets/img/tencent/banner/text2.png'),
            video:require('@/assets/img/tencent/banner/bannerbg2.mp4')
          }
          ]
      }
    }
  }
</script>

<style scoped>

  >>>.el-carousel__button{
    height: 10px;
    width: 10px;
    border-radius: 50px;
  }
  >>>.el-carousel__indicator.is-active button{
    height: 10px;
    width: 50px;
    border-radius: 50px;
  }
  .video{
    width: 100%;
    height: 100%;
    object-fit: fill;
  }
  .img{
    position:absolute;
    bottom: 50%;
    left:50%;
    margin-left:-340px;
  }
</style>
