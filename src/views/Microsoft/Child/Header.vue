<template>
  <div>
    <nav-bar/>
  </div>
</template>

<script>
  import navBar from "@/components/microsoft/header/navBar";
  export default {
    name: "Header",
    data() {
      return {
        img: require('@/assets/img/nintendo/logo/logo.png')
      }
    },
    components: {
      navBar
    }
  }
</script>

<style scoped>
</style>
