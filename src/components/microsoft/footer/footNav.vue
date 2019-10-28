<template>
  <div class="nav_main">
    <div class="nav" v-for="item in items">
      <div class="title">{{item.title}}</div>
      <div class="content" v-for="content in item.content">
        <span>{{content}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "footNav",
    data() {
      return {
        items: [
          {
            title: '新增内容',
            content: [
              'Surface Pro 6', 'Surface Laptop 2', 'Surface Go', 'Windows 10 应用程序'
            ]
          },
          {
            title: 'Microsoft Store',
            content: [
              '帐户个人资料', '下载中心', '订单跟踪'
            ]
          },
          {
            title: '教育',
            content: [
              'Microsoft 教育领域', '适合学生的 Office', '适用于学校的 Office 365', 'Microsoft Azure 教育领域'
            ]
          },
          {
            title: '企业',
            content: [
              'Azure', 'AppSource', '汽车', '政府机构','医疗保健','制造业','金融服务','零售业'
            ]
          },
          {
            title: '开发人员',
            content: [
              'Microsoft Visual Studio', 'Windows 开发人员中心', '开发人员网络', 'TechNet','Microsoft 开发人员计划','第9频道','Office 开发人员中心'
            ]
          },
          {
            title: '公司',
            content: [
              '招贤纳士', '关于 Microsoft', '公司新闻', 'Microsoft 隐私','投资人','安全性'
            ]
          }
        ]
      }
    }
  }
</script>

<style scoped>
  .nav {
    width: 260px;
    display: inline-block;
    vertical-align: top;
  }
  .nav_main{
    padding: 2% 8%;
    color: #616161;
  }
  .content{
    margin: 8% 0;
    font-size: small;
  }
  .content span:hover{
    cursor: pointer;
    border-bottom: black 1px solid;
  }
  .title{
    font-weight: 900
  }
</style>
