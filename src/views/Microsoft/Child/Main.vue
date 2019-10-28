<template>
  <div>
    <banner/>
    <item :data="item1"/>
    <jumbotron :jumbotron="jumbotron1"/>
    <item :data="item2"/>
    <jumbotron :jumbotron="jumbotron2"/>
    <social/>
  </div>
</template>

<script>
  import banner from "@/components/microsoft/main/banner";
  import item from "@/components/microsoft/main/item";
  import jumbotron from "@/components/microsoft/main/jumbotron";
  import social from "@/components/microsoft/main/social";
  export default {
    name: "Main",
    data() {
      return {
        jumbotron1:{
          img:require('@/assets/img/microsoft/banner/banner3.webp'),
          title: 'Xbox One S',
          content:'物超所值的游戏和娱乐设备，内置 4K 超高清蓝光和 4K 视频流',
          button:'立即购买'
        },
        jumbotron2:{
          img:require('@/assets/img/microsoft/banner/banner4.webp'),
          title: '微软中国 Events Hub',
          content:'了解更多微软中国市场活动',
          button:'了解更多'
        },
        item1:{
          data:[
            {
              img: require('@/assets/img/microsoft/item/item1.webp'),
              title: '全新的 Surface Pro X',
              content: 'Pro 具有大胆的时尚设计，以及有史以来最为纤薄的二合一产品，带来极致的便携性。',
              slogan: '了解详细信息 '
            },
            {
              img: require('@/assets/img/microsoft/item/item2.webp'),
              title: 'Surface Book 2',
              content: '性能巨匠。',
              slogan: '立即购买'
            },
            {
              img: require('@/assets/img/microsoft/item/item3.webp'),
              title: '属于你的 365 来了',
              content: '了解 Office 365 可实现的日常功能。',
              slogan: '最多可允许 6 名用户安装 '
            },
            {
              img: require('@/assets/img/microsoft/item/item4.webp'),
              title: 'Xbox One X',
              content: '真4K 60帧超高清游戏机。',
              slogan: '立即购买'
            }
          ]
        },
        item2:{
          title:'适用于工作地点',
          data:[
            {
              img: require('@/assets/img/microsoft/item/item5.webp'),
              title: '了解 Surface Pro 7 商用版',
              content: '借助我们随心所欲，百变菁英的二合一产品，将笔记本电脑转型为平板电脑和便携式工作室，让我们前所未有过的团结如一。',
              slogan: '现在就预订'
            },
            {
              img: require('@/assets/img/microsoft/item/item6.webp'),
              title: 'Windows 10 企业版',
              content: '下载适用于 IT 专业人士的 90 天免费评估版。',
              slogan: '立即下载'
            },
            {
              img: require('@/assets/img/microsoft/item/item7.jpg'),
              title: 'Office 365 商业版',
              content: '无论联机或脱机，均可随时随地访问你的文件。',
              slogan: '立即购买'
            },
            {
              img: require('@/assets/img/microsoft/item/item8.webp'),
              title: '探索 Kubernetes',
              content: '了解 Kubernetes 的工作原理并立即开始进行云原生应用开发。',
              slogan: '开始 '
            }
          ]
        }
      }
    },
    components: {
      banner,
      item,
      jumbotron,
      social
    }
  }
</script>

<style scoped>
</style>
