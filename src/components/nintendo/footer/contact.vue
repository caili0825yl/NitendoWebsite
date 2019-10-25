<template>
  <div class="contact_main">
    <span>社交网络</span>
    <div style="display: inline">
      <div class="contact">
        <el-image
          class="logo"
          :src="require('@/assets/img/nintendo/contact/weibo.png')"
        ></el-image>
        <span class="contact_name">微博</span>
      </div>
      <div class="contact">
        <el-image
          class="logo"
          :src="require('@/assets/img/nintendo/contact/weixin.png')"
        ></el-image>
        <span class="contact_name">微信</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "contact"
  }
</script>

<style scoped>
  .logo{
    width: 50px;
    padding: 0%;
    vertical-align:middle
  }
  span{
    vertical-align:middle;
  }
  .contact_name{
    margin-left: 1%;
  }
  .contact_main{
    font-family:  Tahoma,Helvetica,Arial,'宋体',sans-serif;    padding: 1% 15% 0;
    font-weight: bold;
    font-size: small;
  }
  .contact{
    display: inline;
    margin: 0 10%;
    cursor: pointer;
  }
  .contact:hover{
    color: #e60012;
  }
</style>
