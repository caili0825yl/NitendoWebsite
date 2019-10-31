<template>
  <div class="main">
    <main-nav/>
    <item/>
  </div>

</template>

<script>
  import mainNav from "@/components/nintendo/shop/main/mainNav";
  import item from "@/components/nintendo/shop/main/item";
  export default {
    name: "Main",
    components: {
      mainNav,
      item
    }
  }
</script>

<style scoped>
  .main{
    padding:0 1% 0;
  }
</style>
