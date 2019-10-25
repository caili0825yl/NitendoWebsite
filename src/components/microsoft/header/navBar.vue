<template>
  <div style="padding-top: 10px;background-color:#fff">
    <img src="../../../assets/img/microsoft/logo/logo.png" alt="" width="140"
         style="vertical-align: middle;margin:0 2% 0 16px;padding-bottom: 5px">
    <div style="display: inline;vertical-align: middle;font-size: 14px">
      <span class="item">Office</span>
      <span class="item">Windows</span>
      <span class="item">Surface</span>
      <span class="item">Xbox</span>
      <span class="item">支持</span>

      <span style="margin-left: 40%">
      <span class="all item">所有 Microsoft
      <div class="panel" v-show="panel">
        fdjsklfjskldjflksjlkfjslk
      </div>
        <i class="el-icon-arrow-down"></i>

      </span>
      <span class="item">搜索
              <i class="el-icon-search"></i>

      </span>
      <span class="item">购物车
                    <i class="el-icon-shopping-cart-2"></i>
</span>
      <span class="item">登录
          <img src="../../../assets/img/microsoft/logo/user.svg" alt="" width="35" style="vertical-align: middle;margin-left:5px">
      </span>
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "navBar",
    data(){
      return {
        panel:false
      }
    }
  }
</script>

<style scoped>
  .all {
    position: relative;
  }

  .panel {
    position: absolute;
    right: -200px;
    top: 23px;
    width: 800px;
    height: 100px;
    background-color: #000;
  }

  .item {
    margin: 0 1%;
  }
</style>
