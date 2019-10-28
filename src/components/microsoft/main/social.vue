<template>
  <div>
    <span class="follow">关注 Microsoft</span>
    <span>
        <el-image v-for="item in img"
          :src="item" class="img"
        ></el-image>
    </span>
  </div>
</template>

<script>
  export default {
    name: "social",
    data(){
      return {
        img:[require('@/assets/img/microsoft/footer/wechat.svg'),require('@/assets/img/microsoft/footer/weibo.svg')]
      }
    }
  }
</script>

<style scoped>
  .img{
    height: 28px;
    width: 28px;
    vertical-align: middle;
    margin-left:1%;
    cursor: pointer;
  }
  .img:hover{
    filter: contrast(80%);
    cursor: pointer;
  }
  .follow{
    vertical-align: middle;
    color: rgba(0,0,0,.6);
  }
</style>
