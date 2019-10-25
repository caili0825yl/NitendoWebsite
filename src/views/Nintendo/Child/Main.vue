<template>
  <div class="main">
    <news/>
    <el-divider></el-divider>
    <buy/>
  </div>

</template>

<script>
  import news from "@/components/nintendo/main/news";
  import buy from "@/components/nintendo/main/buy";
  export default {
    name: "Main",
    components: {
      news,
      buy
    }
  }
</script>

<style scoped>
  .main{
    padding:0 15% 0;
  }
</style>
