<template>
  <div class="footer">
    <foot-nav/>
    <other/>
  </div>
</template>

<script>
  import footNav from "@/components/microsoft/footer/footNav";
  import other from "@/components/microsoft/footer/other";
  export default {
    name: "Footer",
    components: {
      footNav,
      other
    }
  }
</script>

<style scoped>
  .footer {
    margin-top: 2%;
    background-color: #f2f2f2
  }
</style>
