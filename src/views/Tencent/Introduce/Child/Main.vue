<template>
  <div class="main" ref="main">
    <div class="select">
      <div class="tit" :style="tit"></div>
      <div class="select_item" @click="jump(height1)">公司动态
      </div>
      <div class="select_item"  @click="jump(height2)">发展历程
      </div>
      <div class="select_item"  @click="jump(height3)">管理团队
      </div>
      <div class="select_item"  @click="jump(height4)">社会责任
      </div>
    </div>
    <div>
      <div style="display:flex;justify-content: space-between">
        <span style="align-self:center;font-size: 20px;font-weight: 600;" ref="item1">公司动态</span>
        <el-button type="text">查看全部</el-button>
      </div>
      <div style="display:flex;justify-content: space-between;margin: 2% 0" v-for="item in report">
        <el-link style="align-self:center" :underline="false">{{item.title}}</el-link>
        <span style="font-size: small;color: #999">{{item.date}}</span>
      </div>
    </div>
    <el-divider/>
    <div>
      <div class="timeline" style="font-size: 20px;font-weight: 600;margin-bottom: 4%" ref="item2">发展历程</div>
      <el-timeline>
        <el-timeline-item v-for="item in activities"
                          :timestamp="item.date" placement="top" size="large">
          <span class="activity">{{item.activity}}</span>
        </el-timeline-item>
      </el-timeline>
    </div>
    <el-divider></el-divider>
    <div>
      <div style="font-size: 20px;font-weight: 600;margin-bottom: 4%" ref="item3">管理团队</div>
      <el-collapse>
        <el-collapse-item v-for="person in people">
          <template slot="title">
            <span style="font-size: 22px;margin-right: 1%;color: #333333">{{person.name}}</span>
            <span style="font-size: 16px;color: #666666">{{person.basis}}</span>
          </template>
          <div style="color: #5e6267;font-size: 14px">{{person.info}}</div>
        </el-collapse-item>
      </el-collapse>
    </div>

    <div>
      <div style="display:flex;justify-content: space-between;margin: 5% 0 1%">
        <span style="align-self:center;font-size: 20px;font-weight: 600;" ref="item4">社会责任</span>
        <div class="link">
          <el-link :underline="false" >腾讯公益网</el-link>
          <el-link :underline="false" style="margin-left: 20px">腾讯基金会</el-link>
        </div>
      </div>
      <el-carousel indicator-position="outside" height="60vh"  arrow="never" trigger="click"  >
        <el-carousel-item v-for="item in social" :key="item.image" >
          <el-image
            style="width: inherit;height: 45vh"
            :src="item.image"
            fit="fill"
          ></el-image>
          <div style="padding-top:2%;color: #5e6267">
            {{item.text}}
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>

</template>

<script>

  export default {
    name: "Main",
    data() {
      return {
        tit:{
          top:'0px'
        },
        height1:0,
        height2:0,
        height3:0,
        height4:0,
        report: [
          {
            title: '腾讯公布2019年第二季度及中期业绩【PDF file】',
            date: '2019/08/14'
          },
          {
            title: '腾讯布局产业互联网 迎接全球数字化发展机遇',
            date: '2019/05/22'
          },
          {
            title: '腾讯公布2019年第一季度业绩【PDF file】',
            date: '2019/05/15'
          },
          {
            title: ' 腾讯公布2018年第四季度及全年业绩【PDF file】',
            date: '2019/03/21'
          },
          {
            title: '腾讯公布2018年第三季度业绩【PDF file】',
            date: '2018/11/14'
          },
          {
            title: '腾讯公布2018年第二季度及中期业绩【PDF file】',
            date: '2018/08/15'
          },
          {
            title: '腾讯公布2018年第一季度业绩【PDF file】',
            date: '2018/05/16'
          },
          {
            title: '腾讯公布2017年第四季度及全年业绩【PDF file】',
            date: '2018/03/21'
          },
          {
            title: '腾讯公布2017年第三季度业绩【PDF file】',
            date: '2017/11/15'
          },
          {
            title: '腾讯公布2017年第二季度及中期业绩【PDF file】',
            date: '2017/08/16'
          }
        ],
        activities: [
          {
            activity: '移动支付绑卡账户数超过2亿',
            date: '2015-09'
          },
          {
            activity: '马化腾提出“互联网+”被写入政府工作报告成为国家战略',
            date: '2015-03'
          }
          ,
          {
            activity: 'QQ最高同时在线超过2亿',
            date: '2014-03'
          }
          ,
          {
            activity: '市值突破1000亿美金',
            date: '2013-09'
          }
          ,
          {
            activity: '手Q和微信发布游戏中心',
            date: '2013-08'
          }
          ,
          {
            activity: '微信和WeChat总注册用户数突破3亿',
            date: '2013-01'
          }
          ,
          {
            activity: '腾讯发布开放平台战略',
            date: '2011-06'
          }
          ,
          {
            activity: '推出微信',
            date: '2011-01'
          }
          ,
          {
            activity: 'QQ同时最高同时在线超过1亿',
            date: '2010-03'
          }
          ,
          {
            activity: '年收入超过100亿人民币',
            date: '2009-12'
          }
          ,
          {
            activity: '被纳入香港恒生指数成份股',
            date: '2008-06'
          }
          ,
          {
            activity: '成立腾讯公益慈善基金会',
            date: '2007-06'
          }
          ,
          {
            activity: '推出社交网络平台QQ空间',
            date: '2005-05'
          }
          ,
          {
            activity: '香港主板上市，股票代码为00700',
            date: '2004-06'
          }
          ,
          {
            activity: '推出综合门户网站腾讯网',
            date: '2003-11'
          }
          ,
          {
            activity: '推出休闲游戏平台“QQ游戏”',
            date: '2003-08'
          }
          ,
          {
            activity: '腾讯QQ诞生',
            date: '1999-02'
          }
          ,
          {
            activity: '腾讯公司在深圳成立',
            date: '1998-11'
          }
        ],
        people: [
          {
            name: '马化腾',
            basis: '主要创办人，董事会主席兼首席执行官',
            info: '马化腾，腾讯主要创办人之一，董事会主席兼首席执行官，全面负责公司战略规划、定位和管理。在1998年创立腾讯前，马化腾曾在中国电信服务和产品供应商深圳润迅通讯发展有限公司工作，主管互联网传呼系统的研究开发，至今已有逾20年电信及互联网行业经验。马化腾于1993年在深圳大学获得理学士学位，主修计算机及应用。'
          },
          {
            name: '刘炽平',
            basis: '总裁',
            info: '刘炽平，腾讯总裁。2005年加入腾讯，出任腾讯首席战略投资官，负责公司战略、投资、并购与投资者关系方面的工作；并于2006年升任总裁，全面负责管理公司日常运营。2007年，刘炽平被任命为董事会执行董事。加入腾讯之前，刘炽平为高盛亚洲投资银行部的执行董事及电信、媒体与科技行业的首席运营官，并曾在麦肯锡公司工作。刘炽平拥有密歇根大学电子工程学士学位、斯坦福大学电子工程硕士学位以及美国西北大学凯洛格商学院工商管理硕士学位。'
          },
          {
            name: '许晨晔 ',
            basis: '主要创办人，首席信息官',
            info: '许晨晔，腾讯主要创办人之一，腾讯首席信息官，全面负责公司网站等信息系统及客户关系的策略规划与发展工作。加入腾讯之前，许晨晔任职于深圳数据通信局，积累了丰富的软件系统设计、网络管理、市场推广及销售等方面的管理经验。许晨晔于1993年在深圳大学获得理学士学位，主修计算机及应用，并于1996年在南京大学获得计算机应用硕士学位。'
          },
          {
            name: '任宇昕',
            basis: '首席运营官，平台与内容事业群总裁、互动娱乐事业群总裁',
            info: '任宇昕，自2012年5月起出任腾讯首席运营官，现全面负责平台与内容事业群、互动娱乐事业群的管理和发展。任宇昕于2000年加入腾讯，自2005年9月起全面负责互动娱乐业务系统的游戏开发、运营、市场、渠道销售等工作。加入腾讯之前，任宇昕在华为技术有限公司工作。任宇昕于1998年毕业于电子科技大学计算机科学与工程专业，并于2008年获得中欧国际工商学院的EMBA学位。'
          },
          {
            name: '张小龙',
            basis: '集团高级执行副总裁，微信事业群总裁',
            info: '张小龙，集团高级执行副总裁，微信事业群总裁。2005年3月，张小龙加入腾讯任广州研发部总经理，并带领团队将 QQ 邮箱建设成为中国最大的邮件服务商，后升任公司副总裁。2012年9月，张小龙升任集团高级副总裁，全面负责微信、邮箱等产品及团队的管理工作，同时参与腾讯重大创新项目的管理和评审工作。2014年5月，张小龙升任集团高级执行副总裁，全面负责微信事业群的管理工作。加入腾讯之前，张小龙于1997年独立开发了 Foxmail，是中国第一代互联网软件开发者。2000年加入博大公司任副总裁，从事企业邮箱领域工作。张小龙于1994年毕业于华中科技大学电信系，获硕士学位。'
          }
        ],
        social:[
          {
            image:require('@/assets/img/tencent/gongyi/gongyi1.jpg'),
            text:'“99公益日”是由腾讯公益联合数百家公益组织、知名企业、明星名人、顶级创意传播机构共同发起的一年一度全民公益活动。2015年9月9日是中国首个互联网公益日，2015年公益日主题为“一起爱”。通过腾讯公益平台，共有205万人次参与捐款 1.279亿元，发起一起捐的人次高达861671人，见证了移动互联+公益形成的“指尖上的公益”所迸发出来的强大力量。'
          },
          {
            image:require('@/assets/img/tencent/gongyi/gongyi2.jpg'),
            text: '1001创想行动是腾讯公益发起的，通过创新的筹人配捐方式，支持有想法、接地气和靠谱的公益创新型项目在乐捐平台上进行众筹，激励更多的青年人用自己的创意去解决社会问题，让公益更加有爱有趣有想象力。'
          },
          {
            image:require('@/assets/img/tencent/gongyi/gongyi3.jpg'),
            text:'在企业内部，腾讯基金会积极探索联动产品做公益的可能性。利用腾讯产品的技术与特性，连接腾讯的用户，让公益参与更高效、影响更广泛。合作案例：微信的“为盲胞读书”、QQ邮箱的“暖灯行动”、手机QQ的“全程助力”、“QQ红围巾”、电脑管家及手机管家的“清理+”、天天酷跑及微信运动的“酷跑+”等。'
          }
        ]
      }
    },
    components: {},
    mounted() {
      this.height1 = this.$refs.item1.offsetTop;
      this.height2 = this.$refs.item2.offsetTop;
      this.height3 = this.$refs.item3.offsetTop;
      this.height4 = this.$refs.item4.offsetTop;
        window.addEventListener("scroll", this.change);
    },
    methods: {
      change() {
        let height2 = this.$refs.item2.getBoundingClientRect().top;
        let height3 = this.$refs.item3.getBoundingClientRect().top;
        let height4 = this.$refs.item4.getBoundingClientRect().top;
        if ( height2> 86.5) {
          this.$nextTick(() => {
            this.tit.top = '0px'
          });
        }
        if ( height2< 86.5) {
          this.$nextTick(() => {
            this.tit.top = '54px'
          });
        }

        if ( height3< 86.5) {
          this.$nextTick(() => {
            this.tit.top = '108px'
          });
        }

        if ( height4< 86.5) {
          this.$nextTick(() => {
            this.tit.top = '162px'
          });
        }
      },
      jump(height){

        document.documentElement.scrollTop = height -86
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "../../../../assets/theme/tencent";

  .main {
    margin-top: 10vh;
    padding: 0 30%;
  }

  .select {
    position: fixed;
    top: 100px;
    left: 300px;
    font-size: 20px;
    z-index: 100;
  }

  .select_item {
    border-bottom: #f0f0f0 1px solid;
    padding: 15px 20px;
    width: 200px;
    text-align: right;
  }

  .select_item:hover {
    color: #0052d9;
    cursor: pointer;
  }

  .select:nth-child(1) {
    border-top: #f0f0f0 1px solid;
  }

  .tit {
    width: 5px;
    height: 53px;
    background-color: #0052d9;
    position: absolute;
    right: 0;
    transition: 0.8s ease-in-out	;
    -webkit-transition:  0.8s  ease-in-out	;
  }

  .activity {
    font-size: 16px;

  }

  .timeline {

  }

  /deep/ .el-collapse-item__header {
    height: 60px;
  }

  /deep/ .el-timeline-item__timestamp {
    font-size: 20px;
    color: #000000;
  }

  /deep/ .el-timeline-item__content {
    color: #5e6267;
  }

  .link /deep/ .el-link--inner{
    color: #0052d9;
    font-size: 18px;
  }
  /deep/ .el-carousel__indicators--outside{
    text-align: right;
  }
  /deep/.el-carousel__container{
    border-bottom: #dcdcdc 1px solid;
  }

  /deep/.el-carousel__button{
    height: 10px;
    width: 10px;
    border-radius: 50px;
  }
  /deep/.el-carousel__indicator.is-active button{
    height: 10px;
    width: 50px;
    border-radius: 50px;
    background-color: #b7b9bd;
  }
</style>
