<template>
  <div style="position: relative">
    <table>
      <tr style="font-size: 22px;font-weight: 500;padding: 10px">
        <td class="title">关注我们
        </td>
        <td class="title">加入我们
        </td>
        <td class="title">联系我们
        </td>
        <td class="title">法律信息
        </td>
      </tr>
      <tr class="content">
        <td>
          <div class="icon">
          <img src="../../../assets/img/tencent/footer/weixin_active.png" alt="">
         微信</div>
        </td>
        <td><span>社会招聘</span></td>
        <td><span>客户服务</span>
        </td>
        <td><span>服务协议</span></td>
      </tr>
      <tr class="content">
        <td>
          <div class="icon">
          <img src="../../../assets/img/tencent/footer/weibo_active.png" alt="">
         新浪微博
          </div>
        </td>
        <td><span>校园招聘</span></td>
        <td><span>合作洽谈</span>
        </td>
        <td><span>隐私政策</span></td>
      </tr>
      <tr class="content">
        <td></td>
        <td><span>国际招聘</span></td>
        <td><span>服务采购</span>
        </td>
        <td><span>知识产权</span>
        </td>
      </tr>
    </table>
    <img src="../../../assets/img/tencent/logo/footer_logo.png" class="img">
  </div>
</template>

<script>
  export default {
    name: "other"
  }
</script>

<style scoped>
  td{
    width: 180px;
    height: 35px;
  }
  img{
    vertical-align: middle		;
  }
  .content{
    color: #747b81;
  }
  .icon{
    -webkit-filter: grayscale(100%); /* Chrome, Safari, Opera */
    filter: grayscale(100%);
    transition: 0.2s ;
  }
  .icon:hover{
    -webkit-filter: grayscale(0%); /* Chrome, Safari, Opera */
    filter: grayscale(0%);
    cursor: pointer;
    color: black;
    transition: 0.1s linear;

  }
  td span{
    transition: 0.2s ;
  }
  td span:hover{
    color: black;
    cursor: pointer;
    transition: 0.2s ;
  }
  .title{
    padding-bottom: 10px;
  }
  .img{
    position: absolute;
    right: 0px;
    bottom: 50%
  }
</style>
