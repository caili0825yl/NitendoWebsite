<template>
  <el-carousel height="60vh" class="carousel" arrow="never" trigger="click" type="card" :autoplay="false">
    <el-carousel-item v-for="item in news" :key="item.des">
      <el-card class="box">
        <div slot="header" class="header">
          <el-image
            :src=item.bg
          ></el-image>
          <el-image class="tit"
                    :src=item.tit
          ></el-image>
          <span class="des">{{item.des}}</span>
          <span class="more">了解更多
            <i class="el-icon-arrow-right"></i>
          </span>
        </div>
        <div class="body">
          <div>
            <div class="news">{{item.news1}}</div>
            <div class="date">{{item.date1}}</div>
          </div>
          <el-divider/>
          <div>
            <div class="news">{{item.news2}}</div>
            <div class="date">{{item.date2}}</div>
          </div>
        </div>
      </el-card>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
  export default {
    name: "newsBanner",
    data() {
      return {
        news: [
          {
            tit: require('@/assets/img/tencent/news/news_tit_1.png'),
            des: '构筑智慧未来',
            news1: '腾讯布局产业互联网 迎接全球数字化发展机遇',
            date1: "2019/05/22",
            news2: "首届中国智慧交通大会在京召开，腾讯发布4款智慧出行新品",
            date2: "2018/10/23",
            bg: require('@/assets/img/tencent/news/news_bg_1.png')
          },
          {
            tit: require('@/assets/img/tencent/news/news_tit_2.png'),
            des: '丰富精神生活',
            news1: '腾讯游戏与Qualcomm宣布达成战略合作',
            date1: "2019/07/30",
            news2: "腾讯与法国国家博物馆联合会战略合作  “国宝全球数字博物馆”... ",
            date2: "2019/01/31",
            bg: require('@/assets/img/tencent/news/news_bg_2.png')
          },
          {
            tit: require('@/assets/img/tencent/news/news_tit_3.png'),
            des: '履行使命担当',
            news1: '腾讯举办首届青少年科学小会 联合Science发布科学看点榜单',
            date1: "2019/01/22",
            news2: "联合国教科文组织颁发数字技术增强残疾人权能奖 腾讯为全...",
            date2: "2018/12/04",
            bg: require('@/assets/img/tencent/news/news_bg_3.png')
          }
        ]
      }
    }
  }
</script>

<style scoped>
  .body {
    font-family: "Palatino Linotype", "Book Antiqua", Palatino, serif;
    position: relative;
    height: inherit;
    margin: 1%;
    text-align: initial;
    font-weight: bold;
  }

  .box {
    height: 520px;
    background-color: #f3f5f6;
  }

  >>> .el-card__header {
    padding: 0;
    border: 0;
  }

  .el-image {
    width: 100%;

  }

  .tit {
    position: absolute;
    top: 20%;
    left: 10%;
    width: 35%;
  }

  .carousel {
    width: 90vh;
    margin: 3% auto 0
  }

  .des {
    position: absolute;
    top: 40%;
    left: 10%;
    width: 35%;
    z-index: 100;
    color: white;
    font-size: x-large;
  }

  .header {
    position: relative;
  }
  .more{
    position: absolute;
    bottom: 20%;
    left: 5%;
    width: 35%;
    z-index: 100;
    color: white;
    font-size: large;
  }
  .news{
    font-size: larger;
  }
  .date{
    font-size: 17px;
    color: #919797;
    margin-top: 8px;
  }
</style>
