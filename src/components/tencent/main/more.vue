<template>
  <div class="more_main">
    <div class="more">
    </div>
    <el-image class="tit" :src="require('@/assets/img/tencent/more/moreproj_tit.png')"></el-image>
    <span class="des">扎根消费互联网  拥抱产业互联网</span>
    <span class="more_info">了解更多产品服务
            <i class="el-icon-arrow-right"></i>
          </span>
  </div>

</template>

<script>
  export default {
    name: "more"
  }
</script>

<style scoped>
  .des {
    position: absolute;
    top: 40%;
    left: 5%;
    width: 35%;
    z-index: 100;
    color: white;
    font-size: x-large;

  }

  .tit {
    position: absolute;
    top: 20%;
    left: 8%;
    width: 50%;

  }

  .more {
    background-image: url('../../../assets/img/tencent/more/more_proj.jpg');
    background-size: 100% 100%;
    cursor: pointer;
    transition: transform .7s cubic-bezier(.25, .46, .33, .98);
    height: 100%;
    width: 100%;
    margin: 0 auto;
  }

  .more:hover {
    transform: scale(1.02);
    transition: transform .7s cubic-bezier(.25, .46, .33, .98);

  }

  .more_info {
    position: absolute;
    bottom: 20%;
    left: -2%;
    width: 35%;
    z-index: 100;
    color: white;
    font-size: large;
  }

  .more_main {
    position: relative;
    overflow: hidden;
    height: 40vh;
    margin: 3% 18% 0;
  }
</style>
