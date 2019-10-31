<template>
  <div class="nav_main">
    <div>
      <div style="display: inline">
      <span class="orange">China</span>
      <span class="menu">Nintendo Switch</span>
      <span class="menu">Nintendo 3DS</span>
      <span class="menu">支援</span>
      </div>
      <div class="nav_right">
        <el-input placeholder="搜寻" suffix-icon="el-icon-search" style="width: 40%;"
        ></el-input>
        <el-button type="text" style="margin-left:30px;font-size: large">登入</el-button>
        <span class="shop_font"><img src="../../../../assets/img/nintendo/shop/cart.svg" alt="" class="shop">({{shopitem}})</span>
      </div>
    </div>

    <div class="logo" @click="jump">
      <div class="logo_bg">
        <img src="../../../../assets/img/nintendo/logo/logo_white.png" alt=""
             class="img">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "navBar",
    data() {
      return {
        shopitem: 0
      }
    },
    methods:{
      jump(){
        this.$router.push('/nintendo')
      }
    }
  }
</script>

<style scoped>
  .menu {
    font-weight: 300;
    font-size: 18px;
    color: #666;
    line-height: 20px;
    padding: 0 30px;
  }
  .nav_right{
    display: inline;
    position: absolute;
    right: 0;
    bottom: 0;
    text-align: right;
    width: 50%;
    padding-right: 2%;
  }
  >>>i{
    color: black
  }
  .nav_main{
    position: relative;
    padding: 13px 13%;
  }
  .logo{
    position: absolute;
    top: 0;
    left: 20px;
  }
  .logo_bg{
    background-color:#e60012;
    width: 200px;
    text-align: center;
    height: 100px;
    border-radius:0 0 20px 20px;
    transition: all 0.2s

  }
  .img{
    width: 130px;
    transform: translateY(120%)
  }
  .logo_bg:hover{
    cursor: pointer;
    height: 100px;
    padding-top: 20px;
    transition: all 0.2s
  }
  .orange{
    color:#ff7d00;
    font-size: x-large;
    font-weight: 600;
  }

  .nav_main span:hover{
    color: #e60012;
    cursor: pointer;
    transition: 0.2s;
  }.nav_main span{
    transition: 0.2s;
  }
  .shop_font:hover{
    color: #000 !important;
  }
  .shop_font{
    font-weight: 300;
    font-size: 18px;
    color: #666;
  }

  .shop{
    width:25px;
    margin-left:30px;
    vertical-align: middle
  }
  .el-button--text {
    color: #666;
  }
  .el-button--text:hover {
    color: #e60012;
  }
</style>
