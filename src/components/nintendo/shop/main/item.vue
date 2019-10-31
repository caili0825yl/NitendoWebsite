<template>
  <div style="margin-top: 2%">
    <div class="game">所有遊戲軟體</div>
    <div v-for="line in lines" class="line">
      <div v-for="item in line" class="item">
        <div class="bg">
          <img :src="item.image" alt="" style="width: 100%">
        </div>
          <div style="text-align:initial;margin-top: 10px">
            <span class="date"><span class="date_font">发售日期</span>{{item.date}}</span>
            <span class="price"><span style="margin-right: 5px">RMB</span>{{item.price}}</span>
            <div style="margin: 5% 3%;">
              <span class="name">{{item.name}}</span></div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "item",
    data(){
      return{
        lines:[
          [
            {
              image:require('@/assets/img/nintendo/shop/line/game1.jpg'),
              date:'19.11.15',
              price:'429.00',
              name:'寶可夢 盾'
            },
            {
              image:require('@/assets/img/nintendo/shop/line/game2.jpg'),
              date:'19.11.15',
              price:'429.00',
              name:'寶可夢 盾'
            },
            {
              image:require('@/assets/img/nintendo/shop/line/game3.jpg'),
              date:'19.10.17',
              price:'398.00',
              name:'牧場物語 重聚礦石鎮'
            },
            {
              image:require('@/assets/img/nintendo/shop/line/game4.jpg'),
              date:'19.10.17',
              price:'314.00',
              name:'《鬥陣特攻》傳奇版'
            }
          ],
          [
            {
              image:require('@/assets/img/nintendo/shop/line/game5.jpg'),
              date:'19.10.15',
              price:'479.00',
              name:'《巫師 3：狂獵》－完全版'
            },
            {
              image:require('@/assets/img/nintendo/shop/line/game6.jpg'),
              date:'19.10.3',
              price:'449.00',
              name:'超級機器人大戰V'
            },
            {
              image:require('@/assets/img/nintendo/shop/line/game7.jpg'),
              date:'19.9.19',
              price:'156.00',
              name:'Devil May Cry 2'
            },
            {
              image:require('@/assets/img/nintendo/shop/line/game8.jpg'),
              date:'19.10.17',
              price:'228.00',
              name:'Phoenix Wright: Ace Attorney Trilogy\n(逆轉裁判123成步堂精選集)   '
            }
          ]
        ]
      }
    }
  }
</script>

<style scoped>
  .line{
    display: flex;
    margin:1% 0 2%;
  }
  .item{
    flex: 1;
    text-align: center;
    height: 390px;
    width:inherit;
    overflow:hidden;
    background-color:#fff;
    margin: 0 15px
  }
  .price{
    margin-left:29%;
    color: #ff7d01;
    font-size: x-large;
    font-weight: 700;
  }
  .name{
    color:#337ab7;
    font-size: x-large
  }
  .name:hover{
    cursor: pointer;
    border-bottom: 2px solid #23527c;
    color: #23527c;
  }
  .game{
    font-weight: 300;
    font-size: 30px;
    margin-left: 15px;
    color: #666;
  }
  .bg{
    overflow: hidden;
    height: 246px;
    width: 436px;
  }
  .bg img{
    cursor: pointer;
    transition:all  0.3s;
  }
  .bg img:hover{
    transform: scale(1.2)
  }
  .date_font{
    font-weight:700;
    margin-right: 5px;
  }
  .date{
    margin-left:3%;
    font-size: large;
    color: #999;
  }
</style>
