<template>
  <div>
    <div v-if="data.title" class="data_title">{{data.title}}</div>
    <div class="item_main">
      <el-card class="box-card" v-for="item in data.data" shadow="never">
        <div slot="header">
          <el-image
            :src="item.img" style="width: 100%"
          ></el-image>
        </div>
        <div class="body">
          <span class="title">{{item.title}}</span>
          <div class="content">{{item.content}}</div>
          <span class="slogan">{{item.slogan}}
           <i class="el-icon-arrow-right"></i>
          </span>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
  export default {
    name: "item",
    data() {
      return {}
    },
    props: ['data']
  }
</script>

<style scoped>
  .box-card {
    flex: 1;
  }

  .body {
    font-family: "Palatino Linotype", "Book Antiqua", Palatino, serif;
    position: relative;
    height: inherit;
    margin: 1%;
  }

  .title {
    font-size: x-large;
    font-weight: 900;
  }

  >>> .el-card__header {
    padding: 0;
    border: 0;
  }

  >>> .el-card__body {
    padding: 5% 0;
  }

  .el-card {
    border: 0;
    border-radius: 0;
  }

  .item_main {
    display: flex
  }

  .box-card:nth-child(odd) {
    margin-right: 1%;
  }

  .box-card:nth-child(even) {
    margin-left: 1%;
  }

  .box-card:nth-child(2) {
    margin-right: 1%;
  }

  .box-card:nth-child(3) {
    margin-left: 1%;
  }

  .content {
    margin: 2% 0;
  }

  .slogan {
    font-weight: 900;
    color: #0067b8;
    cursor: pointer;
  }
  .data_title{
    font-size: xx-large;
    font-weight: 900;
  }
  .box-card:hover{
    filter: opacity(85%);
    cursor: pointer;
  }
</style>
