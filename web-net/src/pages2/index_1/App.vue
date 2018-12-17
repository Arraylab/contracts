<template>
  <div id="app">
    <!-- 导航 -->
    <div class="nav-wrap">
      <div class="nav">
        <div class="nav-head"><img src="~assets/images/head.png" alt=""></div>
        <div class="nav-items">
          <a class="item db-icon" href="https://t.me/fuckdice" target="_blank">{{ $t('nav.db') }}</a>
          <!-- 语言 -->
          <div class="dropdown item">
            <div class="dropdown-toggle" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true"
                 aria-expanded="true">
              <span :class="lang[curLangIndex].icon">{{ $t(lang[curLangIndex].type) }}</span>
              <span class="caret"></span>
            </div>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
              <template v-for="(item ,index) in lang">
                <li @click="chooseLang(index)"><a :class="item.icon">{{ $t(item.type) }}</a></li>
                <li v-if="index < lang.length-1" role="separator" class="divider"></li>
              </template>
            </ul>
          </div>
          <div class="item" @click="showModal" >{{ $t('nav.wfjs') }}</div>
          <!-- 登陆/退出 -->
          <div class="dropdown item" v-if="account">
            <div  class="dropdown-toggle" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true"
                 aria-expanded="true">
              <div class="logined" :title="account.name">{{ this.account.name }}</div>
            </div>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
              <li @click="loginout"><a>{{ $t('nav.logout') }}</a></li>
            </ul>
          </div>
          <div class="login-btn item" @click="login" v-else>{{ $t('nav.login') }}</div>
        </div>
      </div>
    </div>
    <div class="main-wrap">
      <div class="main">
        <!-- 下注 -->
        <div class="left-part">
          <div class="touzhu">
            <div class="zhu-icon"><span>{{ $t('zhu.tzje') }}</span></div>
            <div class="justifyfix">
              <div class="zhu-input justifyfix">
                <i class="eos-icon"></i>
                <input type="number" spellcheck="false"  maxlength="10" v-model="betsVal" @change="betsChange">
                <span class="ut">EOS</span>
              </div>
              <div class="zhu-btn" style="margin-left: 0" @click="halfClick">1/2</div>
              <div class="zhu-btn" @click="doubleClick">2X</div>
              <div class="zhu-btn"  @click="maxClick" style="font-size: 12px;">MAX</div>
            </div>
          </div>
          <div class="pai">
            <div class="money-icon"><span>{{ $t('zhu.yqjl') }}</span></div>
            <div class="zhu-input justifyfix" style="width: 100%;">
              <i class="eos-icon"></i>
              <span>{{ jlNum }}</span>
              <span class="ut">EOS</span>
            </div>
          </div>
          <!-- 赔率 -->
          <div class="nums justifyfix">
            <div>
              {{ $t('zhu.xygs') }}
              <div class="num"><{{ curNum }}</div>
            </div>
            <div>
              {{ $t('zhu.pl') }}
              <div class="num">{{ plNum }}<span style="font-size: 25px">X</span></div>
            </div>
            <div>
              {{ $t('zhu.zjgl') }}
              <div class="num">{{ curNum-1 }}%</div>
            </div>
          </div>
          <!-- 滑块 -->
          <div class="slider">
            <vue-slider ref="slider" v-model="curNum" height="14" style="padding: 0" :bg-style="{background: '#F5464C'}"
                        :process-style="{background: '#8CBA52'}" :tooltip-style="{top: '-5px'}"
                        :min="1" :max="100"
            >
              <div class="diy-tooltip" slot="tooltip" slot-scope="{ value }">
                {{ value }}
              </div>
              <div class="diy-dot" slot="dot"></div>
            </vue-slider>
            <div class="slider-kd justifyfix">
              <span>1</span>
              <span>25</span>
              <span>50</span>
              <span>75</span>
              <span>100</span>
            </div>
          </div>
          <!-- 下注按钮 -->
          <div style="position: relative">
            <div class="start-btn" @click="bets" v-if="account">{{ $t('zhu.kstz') }}
              <svg class="x-icon" aria-hidden="true" v-if="paying">
                <use xlink:href="#icon-loading"></use>
              </svg>
            </div>
            <div class="start-btn" @click="login" v-else>{{ $t('nav.login') }}</div>
            <!-- 自动下注 -->
            <!--<div class="zhu-set">-->
              <!--<a class="f-checkbox"><label><input type="checkbox" @click="autoHandler" v-model="autoZhu"/><i></i>{{ $t('zhu.kszdtz') }}</label></a>-->
              <!--<i class="qs-icon"></i>-->
            <!--</div>-->
            <!-- 余额 -->
            <div class="yue" v-if="account">
              <div class="qb-icon"><span>{{ $t('zhu.wdje') }}</span></div>
              <div class="zhu-input" style="width: 100%;">
                <span>{{ yue.replace('EOS', '').trim()  }}</span>
                <span class="ut">EOS</span>
              </div>
            </div>
          </div>
          <!--<div class="zhu-tip justifyfix">-->
            <!--<div class="zhu-tip-content">-->
              <!--<i class="tip-icon"></i>-->
              <!--<div class="get-num">-->
                <!--<p>{{ $t('zhu.xzkh') }}：<span>0.381</span>EOS</p>-->
                <!--<p>{{ $t('zhu.sctz') }} 0.381EOS</p>-->
              <!--</div>-->
            <!--</div>-->
            <!--<i class="qs-icon"></i>-->
          <!--</div>-->
        </div>
        <!-- 排行榜 -->
        <div class="right-part">
          <i class="re-icon"></i>
          <div class="pai-head">
            <a class="pai-pre" @click="paiPreClick" :class="{not: intDay >= maxIntDay}"></a>
            <i class="pai-icon"></i>
            <span class="pai-head-title" v-if="intDay < 1">{{ $t('pai.ttitle') }}({{  curTimeStr }})</span>
            <span class="pai-head-title" v-else>{{ hisDate + $t('pai.ytitle') }}</span>
            <a class="pai-next" @click="paiNextClick" :class="{not: intDay < 1}"></a>
          </div>
          <div class="pai-content">
            <div class="pai-table-head">
              <span>{{ $t('pai.pm') }}</span><span>{{ $t('pai.tzz') }}</span><span>{{ $t('pai.ztze') }}</span><span>{{ $t('pai.jl') }}</span>
            </div>
            <div class="pai-table-body">
              <ul>
                <li v-for="(item, index) in paiList" class="pai-table-row">
                  <span>
                    <b :class="{'top1-icon': index==0,'top2-icon': index==1,'top3-icon': index==2}">{{ index+1 }}</b>
                  </span><span>{{ item.Bettor }}</span><span>{{ item.Score }} <i>EOS</i></span><span v-if="item.Reward" class="f-j">{{ item.Reward }} <i>EOS</i></span><span v-else class="f-j">-</span>
                </li>
              </ul>
            </div>
            <div class="pai-table-foot">
                <div class="pai-table-row">
                  <span>
                    <b>{{ "Rank" in myPai ? myPai.Rank : '-' }}</b>
                  </span><span>{{ myPai.Bettor ? myPai.Bettor : '-' }}</span><span>{{ myPai.Score ? myPai.Score : '0,0000' }} <i>EOS</i></span><span v-if="myPai.Reward" class="f-j">{{ myPai.Reward }} <i>EOS</i></span><span v-else class="f-j">-</span>
                </div>
                <div class="pai-tip" style="padding-top: 2px">
                  {{ $t('pai.tip') }}
                </div>
            </div>
          </div>

        </div>
        <div class="m-tabs">
          <div class="m-tabs-head justifyfix" id="tabs" @click="tabsClickHandler">
            <template v-for="(item, index) in tabshead">
              <a  :data-tab_name="'d'+index"  :data-index="index">{{ $t('tabs.head['+index+']') }}</a>&nbsp;
            </template>
          </div>
          <!--  表格 -->
          <div class="m-tabpanels" id="tabpanels">
            <div class="m-tabpanel" id="d0" >
              <table class="m-table">
                <thead>
                  <tr>
                    <td>{{ $t('tabs.tb1[0]') }}</td>
                    <td>{{ $t('tabs.tb1[1]') }}</td>
                    <td>{{ $t('tabs.tb1[2]') }}</td>
                    <td>{{ $t('tabs.tb1[3]') }}</td>
                    <td>{{ $t('tabs.tb1[4]') }}</td>
                    <td>{{ $t('tabs.tb1[5]') }}</td>
                  </tr>
                </thead>
                <tbody>
                <template v-for="item in zhuList">
                  <!--<tr  class="win-line" v-if="parseFloat(item.payout) > 0"></tr>-->
                  <!--<tr  class="lose-line" v-else></tr>-->
                  <tr  class="win" v-if="parseFloat(item.payout) > 0">
                    <td>{{ item.bet_time | timeToHMS  }}</td>
                    <td>{{ item.bettor }}</td>
                    <td>{{ item.roll_under  }}</td>
                    <td>{{ item.bet_amt  }}</td>
                    <td>{{ item.result  }}</td>
                    <td>{{ item.payout   }}</td>
                  </tr>
                  <tr  class="lose" v-else>
                    <td>{{ item.bet_time | timeToHMS }}</td>
                    <td>{{ item.bettor }}</td>
                    <td>{{ item.roll_under  }}</td>
                    <td>{{ item.bet_amt  }}</td>
                    <td>{{ item.result  }}</td>
                    <td></td>
                  </tr>
                </template>

                </tbody>
              </table>
            </div>
            <div class="m-tabpanel" id="d1" >
              <table class="m-table">
                <thead>
                <tr>
                  <td>{{ $t('tabs.tb1[0]') }}</td>
                  <td>{{ $t('tabs.tb1[1]') }}</td>
                  <td>{{ $t('tabs.tb1[2]') }}</td>
                  <td>{{ $t('tabs.tb1[3]') }}</td>
                  <td>{{ $t('tabs.tb1[4]') }}</td>
                  <td>{{ $t('tabs.tb1[5]') }}</td>
                </tr>
                </thead>
              </table>
            </div>
            <div class="m-tabpanel" id="d2" >
              <table class="m-table">
                <thead>
                <tr>
                  <td>{{ $t('tabs.tb3[0]') }}</td>
                  <td>{{ $t('tabs.tb3[1]') }}</td>
                  <td>{{ $t('tabs.tb3[2]') }}</td>
                </tr>
                </thead>
              </table>
            </div>
            <div class="m-tabpanel" id="d3" >
              <table class="m-table">
                <thead>
                <tr>
                  <td>{{ $t('tabs.tb4[0]') }}</td>
                  <td>{{ $t('tabs.tb4[1]') }}</td>
                  <td>{{ $t('tabs.tb4[2]') }}</td>
                </tr>
                </thead>
              </table>
            </div>
            <div class="m-tabpanel" id="d4" >
              <table class="m-table">
                <thead>
                <tr>
                  <td>{{ $t('tabs.tb5[0]') }}</td>
                  <td>{{ $t('tabs.tb5[1]') }}</td>
                  <td>{{ $t('tabs.tb5[2]') }}</td>
                </tr>
                </thead>
              </table>
            </div>
            <div class="m-tabpanel" id="d5" >
              <table class="m-table">
                <thead>
                <tr>
                  <td>{{ $t('tabs.tb6[0]') }}</td>
                  <td>{{ $t('tabs.tb6[1]') }}</td>
                  <td>{{ $t('tabs.tb6[2]') }}</td>
                </tr>
                </thead>
              </table>
            </div>
            <div class="m-tabpanel" id="d6" >
              <table class="m-table">
                <thead>
                <tr>
                  <td>{{ $t('tabs.tb7[0]') }}</td>
                  <td>{{ $t('tabs.tb7[1]') }}</td>
                  <td>{{ $t('tabs.tb7[2]') }}</td>
                </tr>
                </thead>
              </table>
            </div>
            <div class="m-tabpanel" id="d7" >
              <table class="m-table">
                <thead>
                <tr>
                  <td>{{ $t('tabs.tb8[0]') }}</td>
                  <td>{{ $t('tabs.tb8[1]') }}</td>
                  <td>{{ $t('tabs.tb8[2]') }}</td>
                </tr>
                </thead>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="foot">
      <div class="foot-content">
        <div class="nn justifyfix">
          <img src="~assets/images/foot.png" alt="" class="llog">
          <a href="https://t.me/fuckdice" class="db-icon"></a>
        </div>
        <p>
          Please arrange your time reasonably, and do not over-indulge.<br>
          If you reside in a location where lottery, gambling, sports betting or betting over the internet is illegal, please do not click on anything related to these activities on this site. You must be 21 years of age to click on any betting or gambling related items even if it is legal to do so in your location. Recognising that the laws and regulations involving online gaming are different everywhere, readers are advised to check with the laws that exist within their own jurisdiction to ascertain the legality of the activities which are covered.
          The games provided by FuckDice are based on blockchain, fair and transparent. When you start playing these games, please note that online gambling and lottery is an entertainment vehicle and that it carries with it a certain degree of financial risk. Players should be aware of this risk, and govern themselves accordingly.
        </p>
      </div>
    </div>
    <!-- 玩法Modal -->
    <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <!--<h4 class="modal-title" id="myModalLabel">Modal title</h4>-->
          </div>
          <div class="modal-body">
            <h5>{{ $t('wfpanel["hp"]') }}</h5>
            <ol>
              <li>{{ $t('wfpanel["1"].txt') }}<a href="https://medium.com/dapppub/create-your-own-eos-account-easily-using-the-non-service-fee-dapp-signupeoseos-b15c5347f2fc" target="_blank">{{ $t('wfpanel["1"].a') }}</a>{{ $t('wfpanel["1"].b') }}</li>
              <li>{{ $t('wfpanel["2"].txt') }}<a href="https://get-scatter.com/" target="_blank">{{ $t('wfpanel["2"].a') }}</a></li>
              <li>{{ $t('wfpanel["3"].txt') }}</li>
              <li>{{ $t('wfpanel["4"].txt') }}</li>
              <li>{{ $t('wfpanel["5"].txt') }}</li>
              <li>{{ $t('wfpanel["6"].txt') }}</li>
              <p>{{ $t('wfpanel["7"].txt') }}</p>
            </ol>
          </div>
        </div>
      </div>
    </div>
    <!-- 开启scater Modal -->
    <div class="modal fade" id="myModal2" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <!--<h4 class="modal-title" id="myModalLabel">Modal title</h4>-->
          </div>
          <div class="modal-body sc-modal">
            <h5>{{ $t('dlpanel["hp"]') }}</h5>
            <div class="pp-content">{{ $t('dlpanel["content"]') }}</div>
            <a class="dl-btn" href="https://get-scatter.com/" target="_blank">{{ $t('dlpanel["btn"]') }}</a>
          </div>
        </div>
      </div>
    </div>
    <!-- win -->
    <div class="modal fade modal-alert win" id="myModal3" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-body">
            <div class="alert-suc">
              <div class="p1">
                {{ $t('alertSuc["p1"]') }} {{ alert.zhu }}
              </div>
              <div class="p2">
                {{ $t('alertSuc["p2"]') }} {{ alert.roll }}, {{ $t('alertSuc["p3"]') }} {{ alert.win }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- fail -->
    <div class="modal fade modal-alert fail" id="myModal4" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-body">
            <div class="alert-fail">
              <div class="p1">
                {{ $t('alertFai["p1"]') }} {{ alert.zhu }}
              </div>
              <div class="p2">
                {{ $t('alertFai["p2"]') }} {{ alert.roll }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {Num, dateToString} from 'common/js/utl'
  import ScatterJS from 'scatterjs-core';
  import ScatterEOS from 'scatterjs-plugin-eosjs';
  import Eos from 'eosjs';
  import mSocket from 'common/js/socket';
  ScatterJS.plugins( new ScatterEOS() );


  const network = {
    blockchain:'eos',
    protocol:'https',
    host:'nodes.get-scatter.com',
    port:443,
    chainId:'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906'
  }

export default {
  data () {
    return {
      alert: {
        zhu: '',
        win: '',
        roll: ''
      },
      curTime: new Date(),
      rewardList: [2500, 1000, 500],
      intDay: 0,
      maxIntDay: 20,
      curDate: dateToString(new Date()),
      paying: false,
      betsVal: '1.0000',
      tabshead: new Array(8),
      curTabIndex: null,
      initTabIndex: 0,
      testList:[],
      user:{

      },
      autoZhu: false,
      curNum: 50,
      curLangIndex: 1,
      lang: [{
        icon: 'en-icon',
        short: 'en',
        type: 'nav.lang[0]'
      },{
        icon: 'zh-icon',
        short: 'zh',
        type: 'nav.lang[1]'
      }],
      zhuList: [],
      paiList: [],
      myPai: {},
      account: null,
      maxYue: 5000,
      yue: '0.0000',
      tableSocket: null,
      zhuSocket: null
    }
  },
  filters: {
    timeToHMS: function (time) {
      if (!time) return ''
      let dt = new Date(time)
      let h = dt.getHours()
      h = h > 9 ? h : '0' + h;
      let m = dt.getMinutes()
      m = m > 9 ? m : '0' + m
      let s = dt.getSeconds();
      s = s > 9 ? s : '0' + s;
      return `${h}:${m}:${s}`
    }
  },
  watch: {
    curNum(v) {
      if (v > 96) {
        this.$refs.slider.setValue(96)
      }
      if(v < 2){
        this.$refs.slider.setValue(2)
      }
    },
  },
  computed: {
    hisDate(){
      let curDate = new Date(this.curDate)
      let curTime = curDate.getTime()
      curDate.setTime(curTime - this.intDay*24*3600*1000)
      return dateToString(curDate)
    },
    jlNum(){
      return Num.mul(Num.mul(Num.div(.985, this.curNum - 1), 100), this.betsVal).toFixed(4)
    },
    plNum(){
      return Num.mul(Num.div(.985, this.curNum - 1).toFixed(5), 100)
    },
    yueNum(){
      return parseFloat(this.yue || 0)
    },
    curTimeStr(){
      let dt = this.curTime
      let h = dt.getHours()
      h = h > 9 ? h : '0' + h;
      let m = dt.getMinutes()
      m = m > 9 ? m : '0' + m
      let s = dt.getSeconds();
      s = s > 9 ? s : '0' + s;
      return `${h}:${m}:${s}`
    },
  },
  mounted(){
    this.connectSocket()
    this.startAutoRefreshPai()
    this.connectScatter()
    this.autoShowCurTime()
    this.$nextTick(()=>{
      this.chooseTab(this.initTabIndex)
    })

  },
  methods: {
    alertSuc(obj){
      $('#myModal3').modal({
        show: true,
        backdrop: false,
        alert: true
      })
      this.alert = obj
    },
    alertFai(obj){
      $('#myModal4').modal({
        show: true,
        backdrop: false,
        alert: true
      })
      this.alert = obj
    },
    showModal(){
      // $('#myModal').modal({
      //   show: true,
      //   backdrop: false,
      //   alert: true
      // })
      $('#myModal').modal('show')
    },
    autoShowCurTime(){
      this.curTimeInt  = setInterval(()=>{
        this.curTime = new Date()
      }, 1000)
    },
    startAutoRefreshPai(){
      this.getPaiData()
      this.stopAutoRefreshPai()
      this.paiInt = setInterval(()=>{
        this.getPaiData()
      }, 10000)
      // Bettor:"hk2"
      // Rank:0
      // Score:110
    },
    stopAutoRefreshPai(){
      clearInterval(this.paiInt)
    },
    paiNextClick(){
      this.paiList = []
      this.myPai = {}
      if(this.intDay > 0){
        --this.intDay
        this.getPaiData()
      }
    },
    paiPreClick(){
      this.paiList = []
      this.myPai = {}
      if(this.intDay < this.maxIntDay ){
        ++this.intDay
        this.getPaiData()
      }
    },
    getPaiData(){
      this.getPaiList()
      this.getMyPai()
    },
    getMyPai(){
      if(!this.account){
        return
      }
      $.get(`/api/v1/getPersonal?date=${this.hisDate}&bettor=${this.account.name}`, (result)=> {
        let data = result.data
        if(data.Rank < 3){
          data.Reward = this.rewardList[data.Rank]
        }
        this.myPai = data
      });
    },
    getPaiList(){
      $.get("/api/v1/getRank?date=" + dateToString(new Date()), (result)=> {
        let data = result.data
        let l = data.length
        if(l > 0){
          l = l > 2 ? 3 : l;
          for(let i=0;i<l;i++){
            data[i].Reward = this.rewardList[i]
          }
        }
        this.paiList = data
      });
    },
    transactionCallBack(data){
      if(this.paying && this.account.name == data.bettor){
        this.paying = false
        if(parseFloat(data.bet_amt) > parseFloat(data.payout)){
          this.alertFai({
            win: data.payout,
            roll: data.result,
            zhu: data.bet_amt
          })
        }else{
          this.alertSuc({
            win: data.payout,
            roll: data.result,
            zhu: data.bet_amt
          })
        }

      }

    },
    limitTableListNum(obj){
      //let l = list.length
      if(!obj){
        return
      }
      let zhuList = this.zhuList
      // let j = 20 - l > zhuList.length ? zhuList.length : 20 - l
      // for(let i=0;i<j;i++){
      //   list.push(zhuList[i])
      // }
      zhuList.unshift(obj)
      if(zhuList.length > 20){
        zhuList = zhuList.slice(0, 20)
      }
      this.zhuList = zhuList
    },
    connectZhuSocket(){
      return
      let me = this
      if(this.zhuSocket){
        return
      }
      this.zhuSocket = new mSocket({
        url: "ws://192.168.3.87:8000/api/v1/ws",
        //url: `ws://${location.host}/api/v1/ws`,
        onmessage(e){
          console.log(e.data)
          if(!e.data.length){
            return
          }
          let dt = JSON.parse(e.data)
          if(me.paying){

          }
        },
        onerror(e){

        }
      })
    },
    connectSocket(){
      let me = this
      if(this.tableSocket){
        return
      }
      this.tableSocket = new mSocket({
        //url: "ws://192.168.3.87:8000/api/v1/ws",
        url: `ws://${location.host}/api/v1/ws`,
        onopen(){
          this.send('')
        },
        onmessage(e){
          //debugger
          //console.log(e.data)
          if(!e.data.length){
            return
          }
          let dt = JSON.parse(e.data)
          me.transactionCallBack(dt.Data)
          me.limitTableListNum(dt.Data)
        },
        onerror(e){

        }
      })



    },
    halfClick(){
      let v  = Num.div(this.betsVal,2)
      this.validBets(v)
    },
    doubleClick(){
      let v = Num.mul(this.betsVal,2)
      this.validBets(v)
    },
    maxClick(){
      let v  = this.yueNum > 0 ? this.yueNum :  this.maxYue
      this.validBets(v)
    },
    validBets(v){
      if(v < .1){
        v =  .1;
      }
      if(this.yueNum > 0 && v > this.yueNum){
        v = this.yueNum
      }
      if(v > this.maxYue){
        v = this.maxYue
      }
      this.betsVal =  (+v).toFixed(4)
    },
    betsChange(e){
      let v = e.target.value;
      this.validBets(v)
    },
    getEosTransferDetail(){
      this.zhuSocket.send(this.account.name)

    },
    bets(){
      if(this.paying){
        return
      }
      this.paying = true
      let account  = this.account
      const transactionOptions = { authorization:[`${account.name}@${account.authority}`] };
      let memo = this.curNum + "-" + $.md5('' + Math.floor(Math.random()*1000000000)) + '-'
      this.eos.transfer(account.name, 'fuckdice1234', `${this.betsVal} EOS`, memo, transactionOptions).then(trx => {
        this.getEosYue()
        //this.getEosTransferDetail()
        //this.paying = false

        // this.$message.success({
        //   duration: 4000,
        //   message: this.$i18n.t('winmsg')
        // })
      }).catch(error => {
        this.paying = false
        this.$message.error({
          message: error.message
        })
      });
    },
    loginout(){
      this.account = null
    },
    login(){
      // this.$message.loading({
      //   duration: 3000,
      //   message: '正在登入中,请稍后..'
      // })
      this.loging = true
      this.loginLoading = this.$message.loading(this.$i18n.t('logmsg'))
      this.connectScatter()

    },
    loginSuccess(){
      this.connectZhuSocket()
    },
    getEosYue(){
      this.eos.getAccount(this.account.name).then(acc => {
        this.yue = acc.core_liquid_balance
      }).catch(error => {
        this.$message.error({
          message: error.message
        })
        console.error(error);
      });
    },
    connectScatter(){
      // First we need to connect to the user's Scatter.
      ScatterJS.scatter.connect('desktop').then(connected => {
        this.loginLoading && this.loginLoading.close()
        // If the user does not have Scatter or it is Locked or Closed this will return false;
        console.log("connected: " + connected)
        if(!connected) {
          if(this.loging){
            // this.$message.warning({
            //   duration: 10000,
            //   message: this.$i18n.t('scmsg')
            // })
            $('#myModal2').modal('show')
          }
          return false;
        }

        const scatter = ScatterJS.scatter;

        const requiredFields = { accounts:[network] };
        console.log("getIdentity: ")
        scatter.getIdentity(requiredFields).then(() => {
          console.log("account: ")
          // Always use the accounts you got back from Scatter. Never hardcode them even if you are prompting
          // the user for their account name beforehand. They could still give you a different account.
          //this.loginSuccess()
          const account = scatter.identity.accounts.find(x => x.blockchain === 'eos');
          this.account  = account
          // You can pass in any additional options you want into the eosjs reference.
          const eosOptions = { expireInSeconds:60 };

          // Get a proxy reference to eosjs which you can use to sign transactions with a user's Scatter.
          const eos = scatter.eos(network, Eos, eosOptions);
          this.eos = eos
          this.getEosYue()

          // ----------------------------
          // Now that we have an identity,
          // an EOSIO account, and a reference
          // to an eosjs object we can send a transaction.
          // ----------------------------


          // Never assume the account's permission/authority. Always take it from the returned account.


        }).catch(error => {
          // The user rejected this request, or doesn't have the appropriate requirements.
          console.log("getIdentity: error")
          this.$message.error({
            message: error.message
          })
          console.error(error);
        });
      })
    },
    autoHandler(){

    },
    chooseLang(index) {
      this.curLangIndex = index
      this.$i18n.locale = this.lang[index].short
    },
    tabsClickHandler(e){
      let el = e.srcElement
      this.chooseTab(+el.dataset.index)
    },
    onTabChange(){

    },
    chooseTab(index){
      let el
      if(typeof index == "number"){
        if(index === this.curTabIndex){
          return
        }
        el = window['tabs'].children[index]
      }else{
        return
      }
      let tabName = el.dataset.tab_name
      if(!tabName){
        return
      }
      let curEl = tabs.querySelector('.choose')
      if(curEl){
        curEl.className = curEl.className.replace(' choose', '')
      }
      el.className = el.className + ' choose'
      this.curTabIndex = index
      let curTabPanel = tabpanels.querySelector('.active')
      if(curTabPanel){
        curTabPanel.className = curTabPanel.className.replace(' active', '')
      }
      let elTabPanel = document.getElementById(tabName)
      elTabPanel.className = elTabPanel.className + ' active'
      this.onTabChange()
    }
  }
}
</script>

<style lang="scss">
@import 'common/scss/index.scss';

$ct-width: 1180px;
$bg-color: #212149;
$bg-color: #3A434B;
$nav-font-color: #8286AF;
$nav-font-color: #fff;
$color: #fff;
$part-color: #465059;
$line-color: #98a2ab;
$login-color: #F4A536;
$main-color: #323A41;
$eos-color: #8A99A4;
$border-color: #323A42;
$suc-color: rgb(140, 186, 82);
$fai-color: rgb(245, 70, 76);
@mixin a-icon($icon-height: 28px,$icon-width: 28px, $url: '',$margin-right: 8px) {
  line-height: $icon-height;
  height: $icon-height;
  span {
    vertical-align: middle;
  }
  &:before {
    content: '';
    display: inline-block;
    width: $icon-width;
    height: $icon-height;
    background: url($url) no-repeat left center;
    background-size: 100%;
    margin-right: $margin-right;
    vertical-align: middle;
  }
}

@keyframes rotating {
  0% {
    transform: rotateZ(0)
  }
  100% {
    transform: rotateZ(360deg)
  }
}


.x-icon {
  width: 1.2em;
  height: 1.2em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
  animation: rotating 2s linear infinite;
}

//覆盖默认组件样式
body {
  .m-message {
    width: 300px;
    min-height: 80px;
    padding: 30px 20px;
    margin-top: 30px;
    font-size: 15px;
    word-break: break-word;
  }

  .modal-dialog {
    margin-top: 100px;
  }

  .modal-content {
    background: $bg-color;
  }

  .modal-header {
    border: none;
    padding: 15px 15px 0 15px;
    button {
      color: #eaeaea;
      font-size: 40px;
      &:hover {
        color: rgba(0,0,0,.1)
      }
    }
  }


  .modal-body {
    color: #fff;
    font-size: 17px;
    padding: 0 15px 15px 15px;
    h5 {
      font-size: 25px;
      text-align: center;
      margin-bottom: 1em;
      margin-top: -15px;
    }
    ol {
      padding: 0 0 0 27px;
      //list-style: none;
      li {
        line-height: 2;
      }
      a {
        color: #4d9efc;
        &:hover {
          color: #4d9efc;
        }
      }
    }
  }


  .sc-modal {
    text-align: center;
    padding-bottom: 30px;
    .pp-content {
      margin-bottom: 50px;
      margin-top: 80px;
    }
  }

  .dl-btn {
    display: block;
    width: 150px;
    height:35px;
    line-height: 35px;
    background: $login-color;
    border-radius: 35px;
    vertical-align: middle;
    text-align: center;
    color: #fff;
    margin: 0 auto;

    &:hover {
      color: #fff;
      text-decoration: none;
    }
    &:focus{
      color: #fff;
      text-decoration: none;
      outline: none;
    }
  }

  .m-db {
    color: inherit;
    text-decoration: none;
  }

  .modal-alert {
    right: auto;
    bottom: auto;
    left: 50%;
    transform: translateX(-50%);
    .modal-dialog {
      margin-top: 50px;
      width: 400px;

    }
    .modal-content {
      border-radius: 0;
    }
    &.win {
      .modal-body {
        border-top: 5px solid $suc-color;
      }
    }
    &.fail {
      .modal-body {
        border-top: 5px solid $fai-color;
      }
    }
  }

}



html, body {
  height: 100%;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}

.justifyfix {
  text-align: justify;
  &:after {
    display: inline-block;
    content: '';
    padding-left: 100%;
    line-height: 0
  }
}


  #app {

  }
  a {
    color: inherit;
  }
  .nav-wrap {
    background: $bg-color;
    box-shadow:0px 2px 2px 0px rgba(27,31,35,0.3);
  }
  .nav {
    height: 60px;
    color: $nav-font-color;
    padding-right: 30px;
    width: $ct-width;
    margin: 0 auto;
    .nav-head {
      margin-top: 5px;
      float: left;
      height: 50px;
      line-height: 50px;
      img {
        display: inline-block;
        width: auto;
        height: 42px;
      }
    }
    .nav-items {
      float: right;
      height: 100%;
      text-align: right;
      line-height: 60px;
      .item {
        display: inline-block;
        margin-left: 30px;
        cursor: pointer;
      }

    }


  }



  .zh-icon {
    @include a-icon($url: '~assets/images/zh.png');
  }

.en-icon {
  @include a-icon($url: '~assets/images/en.png');
}

.db-icon {
  @include a-icon($url: '~assets/images/db.png');
  color: #fff;
  &:hover{
    color: #fff;
    text-decoration: none;
  }
  &:focus{
    color: #fff;
    text-decoration: none;
    outline: none;
  }
}

.zhu-icon {
  @include a-icon($icon-height: 20px,$icon-width: 20px, $url: '~assets/images/zhu.png');
  color: $color;
  margin-bottom: 7px;
}

.qb-icon {
  @include a-icon($icon-height: 20px,$icon-width: 20px, $url: '~assets/images/qb.png');
  margin-bottom: 7px;
}

.eos-icon {
  @include a-icon($icon-height: 28px,$icon-width: 19px,$url: '~assets/images/eos.png');
}

.money-icon {
  @include a-icon($icon-height: 20px,$icon-width: 20px, $url: '~assets/images/money.png');
  color: $color;
  margin-bottom: 7px;
}

.qs-icon {
  @include a-icon($icon-height: 20px,$icon-width: 20px,$url: '~assets/images/qs.png', $margin-right: 0);
}

.tip-icon {
  @include a-icon($icon-height: 64px,$icon-width: 64px,$url: '~assets/images/get.png');
}

  .login-btn {
    width:68px;
    height:28px;
    line-height: 28px;
    background: $login-color;
    border-radius:14px;
    vertical-align: middle;
    text-align: center;
    color: #fff;
  }

  .logined {
    @include a-icon($icon-height: 14px,$icon-width: 14px,$url: '~assets/images/person.png', $margin-right: 4px);
    color: #52EFF0;
    max-width: 12em;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    text-align: left;
  }

  .main-wrap {
    background: $main-color url("~assets/images/map.png") no-repeat 47px 19px;
    background-size: 100% auto;
    background-origin: border-box;
    padding: 76px 0 135px 0;

  }
  .main {
    width: $ct-width;
    margin: 0 auto;
    //overflow: hidden;
  }

  //投注

  .left-part {
    width: 650px;
    float: left;
  }

  .touzhu {
    float: left;
    width:346px;
    height:74px;
    background:$bg-color;
    border-radius:4px;
    padding: 7px 7px 0 4px;
  }

  .pai {
    float: right;
    width:289px;
    height:74px;
    background: $bg-color;
    border-radius:4px;
    padding: 7px 7px 0 4px;
    margin-bottom: 15px;
  }

.yue {
  position: absolute;
  left: 0;
  top: 5px;
  width:180px;
  height:74px;
  background: $bg-color;
  border-radius:4px;
  padding: 7px 7px 0 4px;
  color: $color;
  .zhu-input {
    font-size: 20px;
    color: #fff;
    white-space: nowrap;
    overflow: hidden;
  }
  .ut {
    font-size: 14px;
  }
}

  .zhu-input {
    display: inline-block;
    width:222px;
    height:36px;
    line-height: 36px;
    background: $part-color;
    border-radius:4px;
    padding: 0 9px 0 10px;
    vertical-align: middle;
    color: #fff;
    input {
      -webkit-appearance: textfield;
      -moz-appearance: textfield;
      padding: 0;
      display: inline-block;
      line-height: normal;
      width: 8em;
      height: 1.2em;
      border: none;
      outline: none;
      text-align: center;
      color: #fff;
      background: transparent;
      vertical-align: middle;
      //margin-left: 12px;
    }
    .ut {
      text-align: center;
      margin-top: 9px;
      font-weight:600;
      color: $eos-color;
      line-height: normal;
    }
  }

  .zhu-btn {
    display: inline-block;
    width:30px;
    height:30px;
    line-height: 30px;
    background:rgba(65,65,129,0);
    border:1px solid #8A99A4;
    border-radius:50%;
    color: #8A99A4;
    text-align: center;
    cursor: pointer;
    &:hover {
      border-color: #F1BD2D;
      color: #F1BD2D;
    }
  }

  .nums {
    height:116px;
    background: $bg-color;
    border-radius:4px;
    padding: 26px 66px 0 66px;
    color: $eos-color;
    clear: both;
    margin-bottom: 60px;
    > div {
      display: inline-block;
      text-align: center;
    }
    .num {
      margin-top: 16px;
      font-size:36px;
      font-weight:600;
      color:rgba(255,255,255,1);
      line-height: 1;
    }
  }

  .diy-tooltip {
    width: 28px;
    height: 36px;
    padding-top: 4px;
    background: url('~assets/images/location.png') no-repeat left center;
    background-size: 100%;
    text-align: center;
    color: #fff;
    font-size: 16px;
    transform: translate(5px, 2px);
  }

  .diy-dot {
    width: 28px;
    height: 28px;
    background: #fff url('~assets/images/handle.png') no-repeat left center;
    background-size: 100%;
    border-radius: 50%;
    transform: translateY(-50%);
    margin-top: 9px;
  }

  .slider-kd {
    margin-top: 14px;
    color: #fff;
  }

  .start-btn {
    width:216px;
    height:48px;
    line-height: 48px;
    background: $login-color;
    border-radius:24px;
    margin: 19px auto 21px auto;
    font-size:20px;
    font-weight:600;
    color: #fff;
    text-align: center;
    cursor: pointer;
    margin-bottom: 44px;
  }

  .zhu-set {
    text-align: center;
  }

.f-checkbox {
  display: inline-block;
  color: #fff;
  vertical-align: middle;
  margin-right: 10px;
  &:hover {
    color: #fff;
    text-decoration: none;
  }
  label {
    position: relative;
    display: flex;
    height: auto;
    justify-content: center;
    align-items: center;
    margin: 0;
  }
  i {
    display: inline-block;
    width: 20px;
    height: 20px;
    background: url("~assets/images/c.png") no-repeat left center;
    background-size: 100%;
    //margin-left: -100%;
    margin-right: 10px;
  }
  input {
    position: absolute;
    opacity: 0;
    left: 0;
    top: 0;
    width: 0;
    height: 0;
    /*width: 14px;*/
    /*height: 14px;*/
    &:checked + i {
      background-image: url("~assets/images/handle.png");
    }
  }
}

  .zhu-tip {
    width:430px;
    height:76px;
    line-height: 76px;
    background:rgba(24,22,77,1);
    border-radius:38px;
    margin: 60px auto 0 auto;
    padding: 0 12px;
  }

 .zhu-tip-content {
   line-height: normal;
   display: inline-block;
 }
  .get-num {
    margin-left: 10px;
    display: inline-block;
    vertical-align: middle;
    p:nth-of-type(1) {
      color: #fff;
      margin-bottom: 7px;
      span {
        font-size: 30px;
      }
    }
    p:nth-of-type(2) {
      color: #F88D00;
    }
  }

  //排行榜
  .right-part {
    float: right;
    width:500px;
    //height:559px;
    background: $bg-color;
    border-radius:4px;
    position: relative;
    color: #fff;
    padding-bottom: 7px;
    margin-bottom: 33px;
  }

  .re-icon {
    @include a-icon($icon-height: 93px,$icon-width: 101px,$url: '~assets/images/eos-bg.png', $margin-right: 0);
    position: absolute;
    top: -8px;
    left: -2px;
    transform: rotate(1deg);
  }

  .pai-head {
    text-align: center;
    height: 60px;
    line-height: 60px;
    border-bottom: 2px solid $border-color;
  }

  .pai-pre {
    @include a-icon($icon-height: 30px,$icon-width: 30px,$url: '~assets/images/h-left.png', $margin-right: 5px);
    &.not {
      cursor: default;
      &:before {
        background-image: url("~assets/images/right.png");
        transform: rotate(180deg);
      }
    }
    cursor: pointer;
  }

  .pai-next {
    @include a-icon($icon-height: 30px,$icon-width: 30px,$url: '~assets/images/h-left.png', $margin-right: 0);
    margin-left: 5px;
    &:before {
      transform: rotate(180deg);
    }
    &.not {
      cursor: default;
      &:before {
        background-image: url("~assets/images/right.png");
        transform: rotate(0);
      }
    }
    cursor: pointer;
  }

  .pai-icon {
    @include a-icon($icon-height: 18px,$icon-width: 22px,$url: '~assets/images/pai.png', $margin-right: 5px);
  }

  .pai-head-title {
    font-size:19px;
    //font-weight:600;
    line-height: normal;
    vertical-align: middle;
  }

  .pai-content {

  }

  .pai-table-head {
    padding: 0 13px;
    height: 47px;
    line-height: 45px;
    border-bottom: 2px solid $border-color;
    span {
      display: inline-block;
      text-align: center;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    span:nth-of-type(1) {
      width: 10%;
    }
    span:nth-of-type(2) {
      width: 30%;
    }
    span:nth-of-type(3) {
      width: 30%;
    }
    span:nth-of-type(4) {
      width: 30%;
    }
  }

  .pai-table-body {
    max-height: 358px;
    overflow: auto;
    ul {
      padding: 0 13px;
      list-style: none;
      margin: 0;

    }
    &::-webkit-scrollbar {
      width: 9px;
      height: 28px;
    }
    &::-webkit-scrollbar {
      background-color: #252565;
    } /* 滚动条的滑轨背景颜色 */

    &::-webkit-scrollbar-thumb {
      background-color: #535392;
      border-radius:4px;
    } /* 滑块颜色 */
  }

.pai-table-row {
  height:45px;
  line-height: 45px;
  background: $part-color;
  margin-bottom: 5px;
  span {
    display: inline-block;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    i {
      font-style: normal;
      font-size: 12px;
    }
  }
  span:nth-of-type(1) {
    width: 10%;
    b {
      position: relative;
      font-weight: normal;
      display: inline-block;
      line-height: 34px;
      background: $line-color;
      border-radius: 50%;
      width: 34px;
      height: 34px;
      vertical-align: middle;
      &.top1-icon,&.top2-icon,&.top3-icon {
        &:before{
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
        }
      }
    }
  }
  span:nth-of-type(2) {
    width: 30%;
  }
  span:nth-of-type(3) {
    width: 30%;
  }
  span:nth-of-type(4) {
    width: 30%;
  }
}


  .f-j {
    color: $login-color;
    i {
      color: #fff;
    }
  }

  .pai-table-foot {
    border-top: 2px solid $border-color;
    padding: 6px 13px 0 13px;
  }



  .top1-icon {
    @include a-icon($icon-height: 34px,$icon-width: 44px,$url: '~assets/images/t1.png', $margin-right: 0);
  }
.top2-icon {
  @include a-icon($icon-height: 34px,$icon-width: 44px,$url: '~assets/images/t2.png', $margin-right: 0);
}
.top3-icon {
  @include a-icon($icon-height: 34px,$icon-width: 44px,$url: '~assets/images/t3.png', $margin-right: 0);
}

$table-fai-color: #F5464C;
$table-suc-color: #8CBA52;
.m-tabs {
  clear: both;
  min-height: 500px;
  background: $bg-color;
}

  .m-tabs-head {
    border-bottom: 1px solid $border-color;
    height: 60px;
    padding: 0 25px;
    a {
      cursor: pointer;
      display: inline-block;
      //height: 100%;
      line-height: 60px;
      padding: 0 2px;
      color: $eos-color;
      margin-bottom: -1px;
      text-align: center;
      &:hover {
        color: $eos-color;
        text-decoration: none;
      }
      &.choose {
        color: $login-color;
        border-bottom: 2px solid $login-color;
        &:hover {
          color: $login-color;
        }
      }
    }
  }

  .m-tabpanel {
    display: none;
    &.active {
      display: block;
    }
  }

  .m-table {
    width: 100%;
    text-align: center;
    vertical-align: middle;
    thead{
      color: $eos-color;
      tr{
        height: 55px;
      }

    }
    tbody {
      tr {
        height: 51px;
        color: #fff;
        &.win{
          color: $table-suc-color;
          background: #3A434B;
        }
        &.win-line{
          height: 1px;
          background: #03CAA8;
        }
        &.lose {
          color: $table-fai-color;
          background: #323A41;
        }
        &.lose-line {
          height: 1px;
          background: #DD4931;
        }
      }
    }
  }

  .foot {
    background: $bg-color;
    padding-bottom: 62px;
  }

  .foot-content {
    width: $ct-width;
    margin: 0 auto;

    p {
      font-size: 12px;
      line-height: 22px;
      color: #5C6B77;
      word-break: break-word;
    }
  }

  .nn {
    height: 103px;
    line-height: 103px;
    border-bottom: 1px solid #5C6B77;
    margin-bottom: 17px;
    img {
      display: inline-block;
      width: auto;
      height: 23px;
    }
  }

  div,span,a {
    user-select: none;
  }

  .alert-suc {
    padding-top: 15px;
    text-align: center;
    .p1 {
      color: $suc-color;
      margin-bottom: .5em;
    }
    .p2 {
      color: #fff;
      font-size: 14px;
    }
  }

.alert-fail {
  padding-top: 15px;
  text-align: center;
  .p1 {
    color: $fai-color;
    margin-bottom: .5em;
  }
  .p2 {
    color: #fff;
    font-size: 14px;
  }
}


</style>


