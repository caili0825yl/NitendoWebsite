<template>
  <div class="other_main">
    <div class="link_main">
      <span class="link"><span>隱私權政策</span></span>
      <span class="link"><span>使用條款</span></span>
      <span class="link"><span>健康及安全注意事項</span></span>
      <span class="link"><span>Nintendo Account使用條款</span></span>
    </div>
    <div class="copyright">
      © Nintendo (Hong Kong) Ltd.Games are properties of their respective owners.
    </div>
  </div>
</template>

<script>
  export default {
    name: "other"
  }
</script>

<style scoped>
  .other_main{
    color: white;
    padding: 2% 15%;
    font-size: small
  }
  .link_main{
    display: flex;
    text-align: center;
  }
  .link{
    flex: 1;
  }
  .link span:hover{
    cursor: pointer;
    border-bottom: white 1px solid;
  }
  .copyright{
    text-align: center;
    margin-top: 2%
  }
</style>
