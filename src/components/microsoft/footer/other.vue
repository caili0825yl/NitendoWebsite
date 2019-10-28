<template>
  <div class="other_main">
    <div class="global">
      <img src="../../../assets/img/microsoft/footer/global.svg" alt="" class="img">
      <span>中文(中国)</span>
    </div>
    <div class="item_main">
    <div v-for="item in items" class="item">
     <span>{{item}}</span>
    </div>
      <span>© Microsoft 2019</span>
    </div>

  </div>
</template>

<script>
  export default {
    name: "other",
    data(){
      return{
        items:['与 Microsoft 联系','隐私与 Cookie','使用条款','商标','关于我们的广告','京ICP备09042378号-6','京公网安备 11010802023178',]
      }
    }
  }
</script>

<style scoped>
  .item{
    display: inline;
    margin: 0 20px;
  }
  .item span:hover{
    cursor: pointer;
    border-bottom: 1px solid black;
  }
  .other_main{
    padding: 0 8% 2%;
    font-size: small;
    color: #616161
  }
  .global{
    display:inline;
    vertical-align: bottom;
  }
  .global span{
    margin-left: 10px;
  }
  .global span:hover{
    cursor: pointer;
    border-bottom: 1px solid black;
  }
  .img{
    vertical-align: middle;
    width: 20px;
    height: 20px
  }
  .item_main{
    display:inline;
    vertical-align: bottom;
    float: right
  }
</style>
