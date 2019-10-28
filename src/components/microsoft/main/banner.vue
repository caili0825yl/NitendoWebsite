<template>
  <div class="banner">
    <el-carousel height="600px" trigger="click">
      <el-carousel-item v-for="item in data" :key="item.title" >
        <div style="position: relative">
          <el-image
            style="width: inherit;height: inherit"
            :src="item.img"
            fit="fill"
          ></el-image>
          <div class="introduce">
            <div>
              <span style="font-size:55px;font-weight: 700;">{{item.title}}</span>
            </div>
            <div style="margin: 4% 0">
              <span>{{item.content}}</span>
            </div>
            <div>
              <el-button><span>{{item.button}}</span><i class="el-icon-caret-right"></i></el-button>
            </div>
          </div>
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
  export default {
    name: "banner",
    data() {
      return {
        data:[
          {
            title:'全新的Surface Pro 7',
            content:'随心所欲，百变菁英',
            button:'现在就预定',
            img:require('@/assets/img/microsoft/banner/banner1.jpg')
          },
          {
            title:'全新的Surface Laptop 3',
            content:'比以往更快的常用笔记本电脑',
            button:'了解详细信息',
            img:require('@/assets/img/microsoft/banner/banner2.webp')
          }
        ]
      }
    }
  }
</script>

<style scoped>
  .banner {
    margin-bottom: 4%;
  }

  .introduce {
    position: absolute;
    bottom: 220px;
    left: 100px;
    color: black;
  }

  .el-button {
    padding-top: 0;
    padding-bottom:6px;
    height: 45px;
    font-size: 18px;
    color: #ffffff;
    background-color: #000;
    border-color: black;
    border-radius: 0;
    font-weight: 900;
  }

  >>>.el-icon-arrow-left:before{
    content: '';
    background: url("../../../assets/img/microsoft/banner/left.svg");
    background-size:cover;
    display: block;
    width: 20px;
    height: 20px;
  }
  >>>.el-icon-arrow-right:before{
    content: '';
    background: url("../../../assets/img/microsoft/banner/right.svg");
    background-size:cover;
    display: block;
    width: 20px;
    height: 20px;
  }
  >>>.el-carousel__arrow{
    background-color: #f7f7f7;
  }
  >>>.el-carousel__arrow:hover{
    background-color: #fafafa;
    box-shadow: 0 4px 8px rgba(0,0,0,.2);
  }
  >>>.el-carousel__arrow--left{
    height: 50px;
    width: 50px;
  }
  >>>.el-carousel__arrow--right{
    height: 50px;
    width: 50px;
  }
  >>>.el-carousel__button{
    background-color: #888888;
    width: 10px;
    height: 10px;
    border-radius: 100px;
    border:1px solid black;
  }
  .el-button span:hover{
    border-bottom: 1px white solid;
  }
</style>
