<template>
  <div class="other_main">
    <div style="display: inline">
      <div class="item">
        <el-image
          class="little_arrow"
          :src="require('@/assets/img/nintendo/news/right-fill-red.svg')"
        ></el-image>
        <span class="item_name">店铺一览</span>
      </div>
      <div class="item">
        <el-image
          class="little_arrow"
          :src="require('@/assets/img/nintendo/news/right-fill-red.svg')"
        ></el-image>
        <span class="item_name">利用条款</span>
      </div>
    </div>
    <div style="display: inline">
      <span class="slogan">© Nintendo (Hong Kong) Ltd.Games are properties of their respective owners.</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "other"
  }
</script>

<style scoped>
  .little_arrow {
    height: 15px;
    width: 15px;
    position: absolute;
    bottom: 1px;
    left: 0px;
    border-radius: 50px;
    -webkit-filter: grayscale(100%); /* Chrome, Safari, Opera */
    filter: grayscale(100%);
  }

  .item {
    position: relative;
    display: inline;
    margin-right: 5%;
    cursor: pointer;
  }

  .other_main {
    padding: 0 15% 2%;
    font-size: small;

  }

  .item_name {
    margin-left: 20px;
  }
  .slogan{
    float: right;
    color: rgba(141, 141, 141, 0.71);
    font-weight:bold;
  }
</style>
