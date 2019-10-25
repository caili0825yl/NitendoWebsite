<template>
  <div>
    <h2 class="main_title">最新新闻</h2>
    <h4 class="en_title">NEWS</h4>
    <div style="display: flex">

      <el-card class="box-card">
        <div slot="header">
          <el-image
            :src="require('@/assets/img/nintendo/news/news1.jpg')"
          ></el-image>
        </div>
        <div class="body">
          <span class="content">《宝可梦 剑》、《宝可梦 盾》新资讯公开！</span>
          <div class="date">
            <div>Nintendo Switch</div>
            <div  style="font-weight: bold">2019.10.16</div>
            <el-image
              class="little_arrow"
              :src="require('@/assets/img/nintendo/news/right-fill-red.svg')"
            ></el-image>
          </div>
        </div>
      </el-card>

      <el-card class="box-card">
        <div slot="header">
          <el-image
            :src="require('@/assets/img/nintendo/news/news2.jpg')"
          ></el-image>
        </div>
        <div class="body">
          <span class="content">《Super Mario Maker 2（超级马力欧创作家 2）》新增多人游玩，10月2日起开始免费下载更新数据(Ver.1.1.0)! </span>
          <div class="date">
            <div>Nintendo Switch</div>
            <div  style="font-weight: bold">2019.10.03</div>
            <el-image
              class="little_arrow"
              :src="require('@/assets/img/nintendo/news/right-fill-red.svg')"
            ></el-image>
          </div>
        </div>
      </el-card>

      <el-card class="box-card">
        <div slot="header">
          <el-image
            :src="require('@/assets/img/nintendo/news/news3.jpg')"
          ></el-image>
        </div>
        <div class="body">
          <span class="content">《路易吉洋馆３》网站公开！</span>
          <div class="date">
            <div>Nintendo Switch</div>
            <div  style="font-weight: bold">2019.09.27</div>
            <el-image
              class="little_arrow"
              :src="require('@/assets/img/nintendo/news/right-fill-red.svg')"
            ></el-image>
          </div>
        </div>
      </el-card>
    </div>
    <div style="text-align: center">
    <el-button type="primary"  plain icon="el-icon-arrow-right " >查看更多</el-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "news"
  }
</script>

<style scoped>

  .main_title{
    position: relative;
  }

  .main_title::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 50%;
    width: 30px;
    height: 3px;
    margin-left: -13px;
    background-color: #e60012;
  }

  .main_title, .en_title {
    margin: 0;
    text-align: center;
  }

  .main_title {
    margin-bottom: 15px;
  }

  .en_title {
    font-family: "Palatino Linotype", "Book Antiqua", Palatino, serif;
    margin-left: 4px;
    margin-bottom: 30px;
    font-size: 14px;
  }

  .box-card {
    flex: 1;
    margin: 0 2% 3%;

  }
  .box-card:hover{
    color: #e60012;
    cursor: pointer;
    -webkit-filter: opacity(80%); /* Chrome, Safari, Opera */
    filter: opacity(80%);
  }
  >>> .el-card__header {
    padding: 0;
    border: 0;
  }

  >>> .el-card__body {
    padding: 0 5px;
    height: 120px;
  }

  .content {
    font-size: 14px;
    font-weight: bold;
  }

  .date {
    font-size: 13px;
    position: absolute;
    bottom: 10px;
    color: grey;
  }
  .body {
    font-family: "Palatino Linotype", "Book Antiqua", Palatino, serif;
    position: relative;
    height: inherit;
    margin: 1%;
  }
  .little_arrow{
    height: 20px;
    width: 20px;
    position: absolute;
    bottom: 8px;
    left: 340px;
    border-radius: 50px;
  }
  .el-button{
    width: 250px;
  }
  .el-button--primary.is-plain {
    color: #ffffff ;
    background:  #e60012;
    border-color: #e60012;
    border-width: medium;
  }
  .el-button--primary.is-plain:hover {
    color: #e60012;
    background: #ffffff  ;
    border-color: #e60012;
  }
  .el-button--primary.is-plain:active {
    background: #ffffff;
  }
</style>
