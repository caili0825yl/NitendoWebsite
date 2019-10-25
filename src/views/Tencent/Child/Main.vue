<template>
  <div class="main">
    <about/>
    <news-banner/>
    <more/>
  </div>

</template>

<script>
  import about from "@/components/tencent/main/about";
  import newsBanner from "@/components/tencent/main/newsBanner";
  import more from "@/components/tencent/main/more";
  export default {
    name: "Main",
    components: {
      about,
      newsBanner,
      more
    }
  }
</script>

<style scoped>
  .main{
    text-align: center;
  }
</style>
