<template>
  <div style="padding-top: 10px;background-color:#fff">
    <img src="../../../assets/img/microsoft/logo/logo.png" alt="" width="140"
         class="img">
    <div style="display: inline;vertical-align: middle;font-size: 14px">
      <span class="item">Office</span>
      <span class="item">Windows</span>
      <span class="item">Surface</span>
      <span class="item">Xbox</span>
      <span class="item">支持</span>

      <span style="margin-left: 40%">
      <span class="all item" @click="show">所有 Microsoft
        <transition name="el-fade-in">
      <div class="panel" v-show="panel">
        <div class="nav_main">
    <div class="nav" v-for="item in items">
      <div class="title">{{item.title}}</div>
      <div class="content" v-for="content in item.content">
        <span>{{content}}</span>
      </div>
    </div>
  </div>

           <div class="map">
        <span>查看站点地图 <i class="el-icon-arrow-right"></i> </span>
      </div>
      </div>
        </transition>
        <i class="el-icon-arrow-down"></i>

      </span>
      <span class="item">搜索
              <i class="el-icon-search"></i>

      </span>
      <span class="item">购物车
                    <i class="el-icon-shopping-cart-2"></i>
</span>
      <span class="item no_border">登录
          <img src="../../../assets/img/microsoft/logo/user.svg" alt="" width="35"
               style="vertical-align: middle;margin-left:5px">
      </span>
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "navBar",
    data() {
      return {
        panel: false,
        items: [
          {
            title: '软件',
            content: [
              '游戏', 'OneDrive', 'Outlook', 'Skype', 'OneNote'
            ]
          },
          {
            title: 'PC和设备',
            content: [
              'PC和平板电脑', '配件'
            ]
          },
          {
            title: '企业版',
            content: [
              'Microsoft Azure', 'Microsoft 365', 'Microsoft Industry', '数据平台'
            ]
          },
          {
            title: '开发人员与IT',
            content: [
              '.NET', 'Visual Studio', 'Windows Server', '开发Windows应用', '文档'
            ]
          },
          {
            title: '其他',
            content: [
              'Microsoft Store', '免费下载与安全性', '教育'
            ]
          }
        ]
      }
    },
    methods: {
      show() {
        this.panel = !this.panel
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
    right: -240px;
    top: 23px;
    width: 1250px;
    height: 350px;
    z-index: 1000;
    background-color: #f2f2f2;
    cursor: initial;
  }

  .item {
    margin: 0 1%;
    padding-bottom: 5px;
  }

  .item:hover {
    border-bottom: black 2px solid;
    cursor: pointer;
  }

  .no_border:hover {
    border: 0;
  }

  .item:last-child {
    margin-right: 0;
  }

  .img {
    vertical-align: middle;
    margin: 0 2% 0 16px;
    padding-bottom: 5px;
    cursor: pointer;
  }


  .nav {
    width: 240px;
    display: inline-block;
    vertical-align: top;
  }

  .nav_main {
    padding: 2% 2% 0;

  }

  .content {
    margin: 10% 0;
  }

  .content span:hover {
    border-bottom: black 1px solid;
    cursor: pointer;
  }

  .title {
    font-weight: 900
  }

  .map {
    background-color: #e6e6e6;
    text-align: center;
    bottom: 0;
    position: absolute;
    width: 100%;
    line-height: 40px;
    border-bottom: solid 2px black;
  }

  .map span:hover {
    border-bottom: black 1px solid;
    cursor: pointer;
  }
</style>
