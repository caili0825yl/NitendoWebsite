<template>
  <div>
  <el-image
    class="img"
    :src="require('@/assets/img/tencent/about/about.png')"
  ></el-image>
  <P>
    腾讯，1998年11月诞生于中国深圳，是一家以互联网为基础的科技与文化公司。
  </P>
    <P>
      我们的使命是 “通过互联网服务提升人类生活品质”。
    </P>
    <P>
      腾讯秉承着 “一切以用户价值为依归” 的经营理念，致力于为亿万网民提供优质的互联网综合服务。
    </P>
    <el-button type="text">了解更多<i class="el-icon-arrow-right"></i></el-button>
  </div>
</template>

<script>
  export default {
    name: "about"
  }
</script>

<style scoped lang="scss">
  @import "../../../assets/theme/tencent.scss";
  p{
    font-size: x-large;
  }

  .el-button {
    font-size: large;
  }
</style>
