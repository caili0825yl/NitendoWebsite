<template>
  <div class="buy_main">
    <h2 class="buy_title">商城精选</h2>
    <h4 class="buy_en_title">PICKUP</h4>
    <div style="display: flex">
      <el-card class="box-card" shadow="never">
        <div slot="header">
          <el-image
            :src="require('@/assets/img/nintendo/game/game1.jpg')"
          ></el-image>
        </div>
        <div class="body">
          <span class="game_name">路易吉洋馆３</span>
          <div class="hint">
            盒装版首批有机会获夜光书签一枚
          </div>
          <div class="date">
            <div style="font-weight: bold">2019.10.31</div>
            <div style="font-weight: bold">Nintendo</div>
            <el-image
              class="little_arrow"
              :src="require('@/assets/img/nintendo/news/right-fill-red.svg')"
            ></el-image>
          </div>
        </div>
      </el-card>

      <el-card class="box-card" shadow="never">
        <div slot="header">
          <el-image
            :src="require('@/assets/img/nintendo/game/game2.jpg')"
          ></el-image>
        </div>
        <div class="body">
          <span class="game_name">現嚐好滋味！超級猴子球</span>
          <div class="hint">
            体验版下载序号：D3GM33041X1BVBWB
          </div>
          <div class="date">
            <div style="font-weight: bold">2019.10.31</div>
            <div style="font-weight: bold">SEGA</div>
            <el-image
              class="little_arrow"
              :src="require('@/assets/img/nintendo/news/right-fill-red.svg')"
            ></el-image>
          </div>
        </div>
      </el-card>

      <el-card class="box-card" shadow="never">
        <div slot="header">
          <el-image
            :src="require('@/assets/img/nintendo/game/game3.jpg')"
          ></el-image>
        </div>
        <div class="body">
          <span class="game_name">Resident Evil 6</span>
          <div class="hint">
            10月10日起接受下载版预约购买
          </div>
          <div class="date">
            <div style="font-weight: bold">2019.10.29</div>
            <div style="font-weight: bold">CAPCOM</div>
            <el-image
              class="little_arrow"
              :src="require('@/assets/img/nintendo/news/right-fill-red.svg')"
            ></el-image>
          </div>
        </div>
      </el-card>

      <el-card class="box-card" shadow="never">
        <div slot="header">
          <el-image
            :src="require('@/assets/img/nintendo/game/game4.jpg')"
          ></el-image>
        </div>
        <div class="body">
          <span class="game_name">牧場物語 重聚礦石鎮</span>
          <div class="date">
            <div style="font-weight: bold">2019.10.17</div>
            <div style="font-weight: bold">SEGA</div>
            <el-image
              class="little_arrow"
              :src="require('@/assets/img/nintendo/news/right-fill-red.svg')"
            ></el-image>
          </div>
        </div>
      </el-card>
    </div>

    <div style="display: flex">
      <el-card class="box-card" shadow="never">
        <div slot="header">
          <el-image
            :src="require('@/assets/img/nintendo/game/game5.jpg')"
          ></el-image>
        </div>
        <div class="body">
          <span class="game_name">數碼寶貝物語 網路偵探 駭客追憶</span>
          <div class="date">
            <div style="font-weight: bold">2019.10.17</div>
            <div style="font-weight: bold">BANDAI NAMCO</div>
            <el-image
              class="little_arrow"
              :src="require('@/assets/img/nintendo/news/right-fill-red.svg')"
            ></el-image>
          </div>
        </div>
      </el-card>

      <el-card class="box-card" shadow="never">
        <div slot="header">
          <el-image
            :src="require('@/assets/img/nintendo/game/game6.jpg')"
          ></el-image>
        </div>
        <div class="body">
          <span class="game_name">《鬥陣特攻》傳奇版</span>
          <div class="date">
            <div style="font-weight: bold">2019.10.16</div>

            <div style="font-weight: bold">
              Blizzard Entertainment</div>
            <el-image
              class="little_arrow"
              :src="require('@/assets/img/nintendo/news/right-fill-red.svg')"
            ></el-image>
          </div>
        </div>
      </el-card>

      <el-card class="box-card" shadow="never">
        <div slot="header">
          <el-image
            :src="require('@/assets/img/nintendo/game/game7.jpg')"
          ></el-image>
        </div>
        <div class="body">
          <span class="game_name">《巫師 3：狂獵》－完全版</span>
          <div class="date">
            <div style="font-weight: bold">2019.10.15</div>
            <div style="font-weight: bold">CD PROJEKT</div>
            <el-image
              class="little_arrow"
              :src="require('@/assets/img/nintendo/news/right-fill-red.svg')"
            ></el-image>
          </div>
        </div>
      </el-card>

      <el-card class="box-card" shadow="never">
        <div slot="header">
          <el-image
            :src="require('@/assets/img/nintendo/game/game8.jpg')"
          ></el-image>
        </div>
        <div class="body">
          <span class="game_name">瑪利歐&索尼克 AT 2020東京奧運™ DEMO</span>
          <div class="hint">
            体验版下载序号：D3GM33041GLBVC9B
          </div>
          <div class="date">
            <div style="font-weight: bold">2019.10.11</div>
            <div style="font-weight: bold">SEGA</div>
            <el-image
              class="little_arrow"
              :src="require('@/assets/img/nintendo/news/right-fill-red.svg')"
            ></el-image>
          </div>
        </div>
      </el-card>
    </div>
    <div style="text-align: center">
    <el-button type="primary" plain icon="el-icon-arrow-right ">更多游戏</el-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "buy"
  }
</script>

<style scoped>
  .buy_title::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 50%;
    width: 30px;
    height: 3px;
    margin-left: -13px;
    background-color: #e60012;
  }

  .buy_title {
    position: relative;
    text-align: center;
  }

  .buy_en_title {
    text-align: center;
    position: relative;
  }

  .buy_title, .buy_en_title {
    margin: 0;
  }

  .buy_title {
    margin-bottom: 15px;
  }

  .buy_en_title {
    font-family: "Palatino Linotype", "Book Antiqua", Palatino, serif;
    margin-left: 4px;
    margin-bottom: 30px;
    font-size: 14px;
  }

  .box-card {
    flex: 1;
    margin: 0 2% 3%;
    border-top: 0;
    border-left: 0;
    border-right: 0;
  }

  >>> .el-card__header {
    padding: 0;
    border: 0;
  }

  >>> .el-card__body {
    padding: 0;
    height: 120px;
  }

  .game_name {
    font-size: 14px;
    font-weight: bold;
    position: relative;
    padding-left: 10px;
    border-left: #e60012 8px solid;
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

  .little_arrow {
    height: 20px;
    width: 20px;
    position: absolute;
    bottom: 8px;
    left:250px;
    border-radius: 50px;
  }

  .buy_main {
    margin-top: 5%;
  }

  .el-button {
    width: 250px;
  }

  .el-button--primary.is-plain {
    color: #ffffff;
    background: #e60012;
    border-color: #e60012;
    border-width: medium;

  }

  .el-button--primary.is-plain:hover {
    color: #e60012;
    background: #ffffff;
    border-color: #e60012;
  }

  .el-button--primary.is-plain:active {
    background: #ffffff;
  }
  .hint{
    font-size: 12px;
    color: #e60012;
    margin-top: 5px;
  }
  .box-card:hover{
    color: #e60012;
    cursor: pointer;
    -webkit-filter: opacity(80%); /* Chrome, Safari, Opera */
    filter: opacity(80%);
  }
</style>
