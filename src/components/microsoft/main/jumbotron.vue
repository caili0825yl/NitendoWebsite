<template>
  <div class="jumbotron">
    <div style="position: relative">
      <el-image
        :src="jumbotron.img"
      ></el-image>
      <div class="introduce">
        <div>
          <span style="font-size:55px;font-weight: 700;">{{jumbotron.title}}</span>
        </div>
        <div style="margin: 4% 0">
          <span>{{jumbotron.content}}</span>
        </div>
        <div>
          <el-button><span>{{jumbotron.button}}</span><i class="el-icon-caret-right"></i></el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "jumbotron",
    props: ['jumbotron']
  }
</script>

<style scoped>
  .jumbotron {
    height: 600px;
    margin: 3% 0 4%;
    cursor: pointer;
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
  .el-button span:hover{
    border-bottom: 1px white solid;
  }
</style>
