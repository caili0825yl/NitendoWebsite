<template>
  <div class="footer">
    <logo/>
    <div style="background-color: #f2f2f2">
    <contact/>
    <el-divider/>
      <other/>
    </div>
  </div>
</template>

<script>
  import logo from "@/components/nintendo/footer/logo";
  import contact from "@/components/nintendo/footer/contact";
  import other from "@/components/nintendo/footer/other";
  export default {
    name: "Footer",
    components:{
      logo,
      contact,
      other
    }
  }
</script>

<style scoped>
  .footer{
    margin-top: 2%;
  }
</style>
