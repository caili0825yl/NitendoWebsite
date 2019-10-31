<template>
  <div class="nav">
    <div class="left">
    <span>筛选:</span>
    <span class="filter" tabindex="1">所有發售中商品</span>
    <span class="filter" tabindex="2">暢銷商品</span>
    <span class="filter" tabindex="3">最新推出</span>
    <span class="filter" tabindex="4">Coming Soon</span>
    <span class="filter" tabindex="5">Nintendo Switch Online</span>
    </div>
    <div class="right">
      <span>排序:</span>
      <el-select v-model="option" style="padding-bottom: 10px;margin-left: 10px">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </div>
  </div>
</template>

<script>
  export default {
    name: "mainNav",
    data(){
      return{
        option:'release_date_desc',
        options:[
          {
            value:'price_asc',
            label:'價格 (低至高)'
          },
          {
            value:'price_desc',
            label:'價格 (高至低)'
          },
          {
            value:'release_date_asc',
            label:'發售日 (從最舊開始)'
          },
          {
            value:'release_date_desc',
            label:'發售日 (從最新開始)'
          }
        ]
      }
    }
  }
</script>

<style scoped>
  .nav{
    background-color: #eceaea;
    margin-top: 4%;
    padding: 20px 15px;
    font-size: large;
    position: relative;
  }
  .left{
    display: inline;
  }
  .left span{
    margin-right: 30px;
    color: #999;
  }
  .right{
    display: inline;
    position: absolute;
    right: 0;
    bottom: 0;
    text-align: right;
    width: 50%;
    padding-right: 15px;
  }
  .filter:hover{
    cursor: pointer;
    border-bottom: solid 1px #999;
  }
  .filter:focus{
    color: #337ab7;
    outline: none;
    font-weight: 600;
  }
</style>
