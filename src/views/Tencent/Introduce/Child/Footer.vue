<template>
  <div class="footer">
    <other/>
    <copy-right/>
  </div>
</template>

<script>
  import other from "@/components/tencent/footer/other";
  import copyRight from "@/components/tencent/footer/copyRight";
  export default {
    name: "Footer",
    components:{
      other,
      copyRight
    }
  }
</script>

<style scoped>
  .footer{
    margin-top: 3%;
    padding: 2% 18%;
    background-color: #ecf0f1;
  }
</style>
