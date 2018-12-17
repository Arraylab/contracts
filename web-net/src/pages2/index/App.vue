<template>
  <div id="app">
    <!-- 导航 -->
    <div class="nav-wrap">
      <div class="m-nav">
        <div class="nav-head"><img src="~assets/images/head.png" alt=""></div>
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <div id="navbar" class="navbar-collapse collapse">
          <div class="nav-items">
            <div class="item">
              <a class="db-icon" href="https://t.me/fuckdiceofficial" target="_blank">{{ $t('nav.db') }}</a>
            </div>
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
            <div class="item" v-else>
              <div class="login-btn" @click="login" >{{ $t('nav.login') }}</div>
            </div>
          </div>
        </div>

      </div>
    </div>
    <!--<div class="nav-wrap">-->
      <!--<nav class="navbar navbar-default">-->
        <!--<div class="container-fluid">-->
          <!--<div class="navbar-header">-->
            <!--<a class="navbar-brand"><img src="~assets/images/head.png" alt=""></a>-->
          <!--</div>-->
          <!--<div id="navbar" class="navbar-right navbar-collapse collapse">-->
            <!--<ul class="nav navbar-nav">-->
              <!--<li class="active"><a class="item db-icon" href="https://t.me/fuckdice" target="_blank">{{ $t('nav.db') }}</a></li>-->
              <!--<li><a href="#">About</a></li>-->
              <!--<li><a href="#">Contact</a></li>-->
              <!--<li class="dropdown">-->
                <!--<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a>-->
                <!--<ul class="dropdown-menu">-->
                  <!--<li><a href="#">Action</a></li>-->
                  <!--<li><a href="#">Another action</a></li>-->
                  <!--<li><a href="#">Something else here</a></li>-->
                  <!--<li role="separator" class="divider"></li>-->
                  <!--<li class="dropdown-header">Nav header</li>-->
                  <!--<li><a href="#">Separated link</a></li>-->
                  <!--<li><a href="#">One more separated link</a></li>-->
                <!--</ul>-->
              <!--</li>-->
            <!--</ul>-->
          <!--</div>-->
        <!--</div>-->
      <!--</nav>-->
    <!--</div>-->
    <div class="main-wrap">
      <div class="main">
        <div class="top-part">
          <!-- 排行榜 -->
          <div class="right-part">
            <i class="re-icon"></i>
            <div class="pai-head" @click="collapsePai">
              <i class="pai-icon"></i>
              <span class="pai-head-title" v-if="intDay < 1" >{{ $t('pai.ttitle') }}({{  curTimeStr }})</span>
              <span class="pai-head-title" v-else >{{ hisDate + $t('pai.ytitle') }}</span>
              <a class="pai-pre" @click.stop="paiPreClick" :class="{not: intDay >= maxIntDay}" v-show="checkPaiCollapse"></a>
              <a class="pai-next" @click.stop="paiNextClick" :class="{not: intDay < 1}" v-show="checkPaiCollapse"></a>
            </div>
            <div class="pai-content" id="pai-collapse">
              <div class="collapse" :class="{in: paiCollapse}">
                <div class="pai-table-head ">
                  <span>{{ $t('pai.pm') }}</span>
                  <span>{{ $t('pai.tzz') }}</span>
                  <span>{{ $t('pai.ztze') }}</span>
                  <span>{{ $t('pai.jl') }}</span>
                </div>
                <div class="pai-table-body">
                  <ul>
                    <li v-for="(item, index) in paiList" class="pai-table-row">
                    <span>
                      <b :class="{'top1-icon': index==0,'top2-icon': index==1,'top3-icon': index==2}">{{ index+1 }}</b>
                    </span>
                      <span>{{ item.Bettor }}</span>
                      <span>{{ (+item.Score).toFixed(4) }} <i>EOS</i></span>
                      <span v-if="item.Reward" class="f-j">{{ item.Reward }} <i>EOS</i></span>
                      <span v-else class="f-j">-</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="pai-table-foot">
                <div class="pai-table-row">
                  <span>
                    <b>{{ "Rank" in myPai ? myPai.Rank : '-' }}</b>
                  </span>
                  <span>{{ myPai.Bettor ? myPai.Bettor : '-' }}</span>
                  <span>{{ myPai.Score ? myPai.Score : '0,0000' }} <i>EOS</i></span>
                  <span v-if="myPai.Reward" class="f-j">{{ myPai.Reward }} <i>EOS</i></span>
                  <span v-else class="f-j">-</span>
                </div>
                <div class="pai-tip collapse" :class="{in: paiCollapse}" style="padding-top: 2px">
                  {{ $t('pai.tip') }}
                </div>
              </div>
            </div>

          </div>
          <div class="right-middle-part">
            <!-- 中部投注 -->
            <div class="middle-part">
              <div class="touzhu-main">
                <div class="roll-num" ref="rollNum">
                  <div class="num-cell">
                    <div class="num-cell-ct">
                      <ul class="num-list" :class="{'circle-an1': rolling}" :style="num1Style" ref="numList1">
                        <li>0</li>
                        <li>1</li>
                        <li>0</li>
                      </ul>
                    </div>
                  </div>
                  <div class="num-cell">
                    <div class="num-cell-ct">
                      <ul class="num-list" :class="{'circle-an2': rolling}" :style="num2Style" ref="numList2">
                        <li>0</li>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                        <li>5</li>
                        <li>6</li>
                        <li>7</li>
                        <li>8</li>
                        <li>9</li>
                        <li>0</li>
                      </ul>
                    </div>
                  </div>
                  <div class="num-cell">
                    <div class="num-cell-ct">
                      <ul class="num-list" :class="{'circle-an3': rolling}" :style="num3Style" ref="numList3">
                        <li>0</li>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                        <li>5</li>
                        <li>6</li>
                        <li>7</li>
                        <li>8</li>
                        <li>9</li>
                        <li>0</li>
                      </ul>
                    </div>
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
                </div>
              </div>
            </div>
            <!-- 下注 -->
            <div class="left-part">
              <!-- 赔率 -->
              <div class="nums">
                <div class="nums-left">
                  <div class="nums-left-t">
                    {{ $t('zhu.xygs') }}
                  </div>
                  <div class="num">
                    <span><</span>
                    <span>{{  curNum > 9 ? (curNum + '')[0] :  0 }}</span>
                    <span>{{ curNum > 9 ?  curNum % 10 :  curNum }}</span>
                  </div>
                </div>
                <div class="nums-right">
                  <div class="nums-right-t">
                    <div class="nums-right-t-t">
                      {{ $t('zhu.pl') }}
                    </div>
                    <div class="num">{{ plNum }}<span style="font-size: 25px">X</span></div>
                  </div>
                  <div class="nums-right-b">
                    <div class="nums-right-b-t">
                      {{ $t('zhu.zjgl') }}
                    </div>
                    <div class="num">{{ curNum-1 }}%</div>
                  </div>
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
                <div class="slider-kd">
                  <span>1</span>
                  <span>25</span>
                  <span>50</span>
                  <span>75</span>
                  <span>100</span>
                </div>
              </div>
              <div class="touzhu">
                <div class="zhu-icon"><span>{{ $t('zhu.tzje') }}</span></div>
                <div class="zhu-content">
                  <div class="zhu-input" style="max-width: 222px;">
                    <i class="eos-icon"></i>
                    <input type="number" spellcheck="false"  maxlength="10" v-model="betsVal" @change="betsChange">
                    <span class="ut">EOS</span>
                  </div>
                  <div class="zhu-btn" style="margin-left: 0" @click="halfClick">1/2</div>
                  <div class="zhu-btn" @click="doubleClick">2X</div>
                  <div class="zhu-btn"  @click="maxClick" style="font-size: 12px;">MAX</div>
                </div>
              </div>
              <div class="p-layout">
                <div class="pai">
                  <div class="money-icon"><span>{{ $t('zhu.yqjl') }}</span></div>
                  <div class="zhu-input">
                    <i class="eos-icon"></i>
                    <span class="as-input">{{ jlNum }}</span>
                    <span class="ut">EOS</span>
                  </div>
                </div>
                <!-- 余额 -->
                <div class="yue" v-if="account">
                  <div class="qb-icon"><span>{{ $t('zhu.wdje') }}</span></div>
                  <div class="zhu-input">
                    <i class="eos-icon"></i>
                    <span class="as-input">{{ yue.replace('EOS', '').trim()  }}</span>
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
          </div>
        </div>
        <div class="m-tabs">
          <div class="m-tabs-head" id="tabs" @click="tabsClickHandler">
            <template v-for="(item, index) in tabshead">
              <a  :data-tab_name="'d'+index"  :data-index="index">{{ $t('tabs.head['+index+']') }}</a>
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
                    <td class="no-main">{{ $t('tabs.tb1[2]') }}</td>
                    <td class="no-main">{{ $t('tabs.tb1[3]') }}</td>
                    <td class="no-main">{{ $t('tabs.tb1[4]') }}</td>
                    <td>{{ $t('tabs.tb1[5]') }}</td>
                    <td class="no-main">{{ $t('tabs.tb1[6]') }}</td>
                    <td class="no-main">{{ $t('tabs.tb1[7]') }}</td>
                  </tr>
                </thead>
                <tbody>
                <template v-for="item in zhuList">
                  <!--<tr  class="win-line" v-if="parseFloat(item.payout) > 0"></tr>-->
                  <!--<tr  class="lose-line" v-else></tr>-->
                  <tr  class="win" v-if="parseFloat(item.payout) > 0">
                    <td>{{ item.bet_time | timeToHMS  }}</td>
                    <td>{{ item.bettor }}</td>
                    <td class="no-main">{{ item.roll_under  }}</td>
                    <td class="no-main">{{ item.bet_amt  }} EOS</td>
                    <td class="no-main">{{ item.result  }}</td>
                    <td>{{ item.payout   }}</td>
                    <td class="no-main"><a :href="`https://codepen.io/playdice2018/pen/QJqvBr?serverSeed=${item.house_seed}&clientSeed=${item.user_seed}&play_id=${item.bet_id}`" target="_blank">{{ $t('tabs.tb1[6]') }}</a></td>
                    <td class="no-main"><a :href="`https://eospark.com/MainNet/tx/${item.tx_id}`" target="_blank">{{ $t('tabs.tb1[7]') }}</a></td>
                  </tr>
                  <tr  class="lose" v-else>
                    <td>{{ item.bet_time | timeToHMS }}</td>
                    <td>{{ item.bettor }}</td>
                    <td class="no-main">{{ item.roll_under  }}</td>
                    <td class="no-main">{{ item.bet_amt  }} EOS</td>
                    <td class="no-main">{{ item.result  }}</td>
                    <td></td>
                    <td class="no-main"><a :href="`https://codepen.io/playdice2018/pen/QJqvBr?serverSeed=${item.house_seed}&clientSeed=${item.user_seed}&play_id=${item.bet_id}`" target="_blank">{{ $t('tabs.tb1[6]') }}</a></td>
                    <td class="no-main"><a :href="`https://eospark.com/MainNet/tx/${item.tx_id}`" target="_blank">{{ $t('tabs.tb1[7]') }}</a></td>
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
                  <td class="no-main">{{ $t('tabs.tb1[2]') }}</td>
                  <td class="no-main">{{ $t('tabs.tb1[3]') }}</td>
                  <td class="no-main">{{ $t('tabs.tb1[4]') }}</td>
                  <td>{{ $t('tabs.tb1[5]') }}</td>
                  <td class="no-main">{{ $t('tabs.tb1[6]') }}</td>
                  <td class="no-main">{{ $t('tabs.tb1[7]') }}</td>
                </tr>
                </thead>
                <tbody>
                <template v-for="item in myZhuList">
                  <!--<tr  class="win-line" v-if="parseFloat(item.payout) > 0"></tr>-->
                  <!--<tr  class="lose-line" v-else></tr>-->
                  <tr  class="win" v-if="parseFloat(item.payout) > 0">
                    <td>{{ item.bet_time | timeToHMS  }}</td>
                    <td>{{ item.bettor }}</td>
                    <td class="no-main">{{ item.roll_under  }}</td>
                    <td class="no-main">{{ item.bet_amt  }} EOS</td>
                    <td class="no-main">{{ item.result  }}</td>
                    <td>{{ item.payout   }}</td>
                  </tr>
                  <tr  class="lose" v-else>
                    <td>{{ item.bet_time | timeToHMS }}</td>
                    <td>{{ item.bettor }}</td>
                    <td class="no-main">{{ item.roll_under  }}</td>
                    <td class="no-main">{{ item.bet_amt  }} EOS</td>
                    <td class="no-main">{{ item.result  }}</td>
                    <td></td>
                  </tr>
                </template>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="foot">
      <div class="foot-content">
        <div class="nn">
          <img src="~assets/images/foot.png" alt="" class="llog">
          <div>
            <a href="https://ss3.bdstatic.com/iPoZeXSm1A5BphGlnYG/icon/weather/aladdin/png_18/a7.png" download="FuckDiceWhitePaper" class="bps">{{ $t('bps') }}</a>
            <a href="https://t.me/fuckdiceofficial" class="db-icon"></a>
          </div>

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
                {{ $t('alertSuc["p1"]') }} {{ alert.zhu }} EOS
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
                {{ $t('alertFai["p1"]') }} {{ alert.zhu }} EOS
              </div>
              <div class="p2">
                {{ $t('alertFai["p2"]') }} {{ alert.roll }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 投注超时 -->
    <div class="modal fade" id="myModal5" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <!--<h4 class="modal-title" id="myModalLabel">Modal title</h4>-->
          </div>
          <div class="modal-body tzcs-modal">
            <div class="pp-content" v-html="$i18n.t('tzcspanel.hp1')"></div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" data-dismiss="modal">{{ $t('tzcspanel["btn"]') }}</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {Num, dateToString, getQueryString} from 'common/js/utl'
  import ScatterJS from 'scatterjs-core';
  import ScatterEOS from 'scatterjs-plugin-eosjs';
  import Eos from 'eosjs';
  import mSocket from 'common/js/socket';
  import sha256 from 'crypto-js/sha256';

  ScatterJS.plugins( new ScatterEOS() );


  const network = {
    blockchain:'eos',
    protocol:'https',
    host:'nodes.get-scatter.com',
    port:443,
    chainId:'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906'
  }


let ref = getQueryString('ref')

export default {
  data () {
    return {
      num1Style: {
        transform: '',
        'transition-duration': ''
      },
      num2Style: {
        transform: '',
        'transition-duration': ''
      },
      num3Style: {
        transform: '',
        'transition-duration': ''
      },
      alert: {
        zhu: '',
        win: '',
        roll: ''
      },
      rolling: false,
      curTime: new Date(),
      rewardList: [0, 0, 0],
      intDay: 0,
      maxIntDay: 20,
      curDate: dateToString(new Date()),
      paying: false,
      betsVal: '1.0000',
      tabshead: new Array(2),
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
      myZhuList: [],
      zhuList: [],
      paiList: [],
      myPai: {},
      account: null,
      maxYue: 5000,
      yue: '0.0000',
      tableSocket: null,
      zhuSocket: null,
      paiCollapse: true,
      checkPaiCollapse: true
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
    paying(v){
      if(!v && this.rolling){
        clearTimeout(this.betSetTimout)
        this.rollDice(this.curTransactionData ? this.curTransactionData.result : 0)
      }
    }
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
  created(){
    if(window.innerWidth < 670){
      this.paiCollapse = false
      this.checkPaiCollapse = false
    }

  },
  mounted(){
    this.connectSocket()
    this.startAutoRefreshPai()
    this.connectScatter()
    this.autoShowCurTime()
    this.getBetInit()
    //this.getSeedHash()
    this.$nextTick(()=>{
      this.chooseTab(this.initTabIndex)
    })

  },
  methods: {
    collapsePai(){
      if(window.innerWidth < 769){
        $('#pai-collapse .collapse').collapse('toggle')
        this.checkPaiCollapse = !this.checkPaiCollapse
      }
    },
    getRoll(result){
      let roll = result || Math.floor(Math.random() * 100)
      let num1 = Math.floor(roll/100), num2 = Math.floor(roll/10) ,num3 = roll%10;
      //let el1 = this.$refs['numList1']
      let el2 = this.$refs['numList2']
      let el3 = this.$refs['numList3']
      setTimeout(()=>{
        //let computedStyle1 = window.getComputedStyle(el1)
        let computedStyle2 = window.getComputedStyle(el2)
        let computedStyle3 = window.getComputedStyle(el3)
        this.num1Style.transform = 'translateY(0)'
        this.num2Style.transform = computedStyle2.transform
        this.num3Style.transform = computedStyle3.transform
        this.paying = false
        setTimeout(()=>{
          if(num1 < 1){
            this.num1Style.transform = 'translateY(0)'
            this.num2Style.transform = `translateY(calc(-100% * ${num2}))`
            this.num3Style.transform = `translateY(calc(-100% * ${num3}))`
          }else{
            this.num1Style.transform = 'translateY(-100%)'
            this.num2Style.transform = 'translateY(0)'
            this.num3Style.transform = 'translateY(0)'
          }
        }, 40)
      }, 2000)
    },
    rollDice(result){
      let roll = result || Math.floor(Math.random() * 100)
      let num1 = Math.floor(roll/100), num2 = Math.floor(roll/10) ,num3 = roll%10;
      //let el1 = this.$refs['numList1']
      let el2 = this.$refs['numList2']
      let el3 = this.$refs['numList3']
      //let computedStyle1 = window.getComputedStyle(el1)
      let computedStyle2 = window.getComputedStyle(el2)
      let computedStyle3 = window.getComputedStyle(el3)
      this.num1Style.transform = 'translateY(0)'
      this.num2Style.transform = computedStyle2.transform
      this.num3Style.transform = computedStyle3.transform
      this.rolling = false
      setTimeout(()=>{
        if(num1 < 1){
          this.num1Style.transform = 'translateY(0)'
          this.num2Style.transform = `translateY(calc(-100% * ${num2}))`
          this.num3Style.transform = `translateY(calc(-100% * ${num3}))`
        }else{
          this.num1Style.transform = 'translateY(-100%)'
          this.num2Style.transform = 'translateY(0)'
          this.num3Style.transform = 'translateY(0)'
        }
      }, 40)
    },
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
      if(this.intDay > 0){
        this.paiList = []
        this.myPai = {}
        --this.intDay
        this.getPaiData()
      }
    },
    paiPreClick(){
      if(this.intDay < this.maxIntDay ){
        this.paiList = []
        this.myPai = {}
        ++this.intDay
        this.getPaiData()
      }
    },
    getPaiData(){
      this.getPaiList()
      this.getMyPai()
    },
    requestSeedHash(resolve, reject){
      let me = this
      this.reCount++
      if(this.reCount > 2){
        return reject(this.reCount = 0)
      }
      $.ajax({
        url: `/api/v1/getSeedHash`,
        timeout: 3000,
        success: (result)=> {
          let data = result.data
          if(!data){
            //reject();
            me.requestSeedHash(resolve, reject)
            return
            //throw new Error('seedHash not get')
          }
          me.seedHash = data
          resolve();
        },
        error: ()=>{
          //reject();
          me.requestSeedHash(resolve, reject)
        }

      })
    },
    getSeedHash(){
      return new Promise((resolve, reject) => {
            this.reCount = 0
            this.requestSeedHash(resolve, reject)
      })
    },
    getBetInit(){
      $.get(`/api/v1/getBetInit`, (result)=> {
        let data = result.data
        if(data)
          this.zhuList = data
      });
    },
    getBetPersonalInit(){
      if(!this.account){
        return
      }
      $.get(`/api/v1/getBetPersonal?bettor=${this.account.name}&pageIndex=0`, (result)=> {
        let data = result.data
        if(data)
          this.myZhuList = data
      });
    },
    getMyPai(){
      if(!this.account){
        return
      }
      $.get(`/api/v1/getRankPersonal?date=${this.hisDate}&bettor=${this.account.name}`, (result)=> {
        let data = result.data
        if(!data){
          return
        }
        if(data.Rank < 3){
          data.Reward = this.rewardList[data.Rank]
        }
        this.myPai = data
      });
    },
    getPaiList(){
      $.get(`/api/v1/getRank?date=${this.hisDate}`, (result)=> {
        let data = result.data
        if(!data){
          return
        }
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
        this.curTransactionData = data
        this.paying = false
        //交易完成，刷新我的投注记录
        //console.log(data)
        this.getBetPersonalInit()
        if(data.roll_under < data.result){
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
        //url: "ws://192.168.3.87:8000/api/v1/ws",
        url: `ws://${location.host}/api/v1/ws`,
        onmessage(e){
          //console.log(e.data)
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
      let ws = location.protocol == 'http:' ? 'ws' : 'wss'
      this.tableSocket = new mSocket({
        //url: "ws://192.168.3.73:8001/api/v1/ws",
        url: `${ws}://${location.host}/api/v1/ws`,
        onopen(){
          this.send('')
        },
        onmessage(e){
          //debugger
          //console.log(e.data)
          if(!e.data.length){
            return
          }
          if(e.data[0] != '{'){
            return
          }
          let dt = JSON.parse(e.data)
          me.limitTableListNum(dt.Data)
          me.transactionCallBack(dt.Data)

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
      //this.getRoll()
      if(this.betsVal < .1){
        return this.$message.error({
          message: this.$i18n.t('yuebuzu')
        })
      }
      if(this.paying){
        return
      }
      this.paying = true
      this.getSeedHash()
        .then(()=>{
          this.sendTransfer()
        })
        .catch(e=>{
          //debugger
          this.paying = false
          this.$message.error({
            message: this.$i18n.t('wlcs')
          })
        })

    },
    sendTransfer(){
      let account  = this.account
      const transactionOptions = { authorization:[`${account.name}@${account.authority}`] };
      let memo = this.curNum + '-' + this.seedHash  + "-" + sha256('' + Math.floor(Math.random()*1000000000)).toString() + '-' + ref
      this.rolling = true
      this.curTransactionData = null
      this.eos.transfer(account.name, 'fuckdice1234', `${this.betsVal} EOS`, memo, transactionOptions).then(trx => {
        //console.log(trx)
        this.getEosYue()
        if(!trx['transaction_id']){
          this.paying = false
          return $('#myModal5').modal({
            show: true,
            backdrop: false
          })
        }
        this.setTimoutCancel()
        //this.getEosTransferDetail()
        //this.paying = false

        // this.$message.success({
        //   duration: 4000,
        //   message: this.$i18n.t('winmsg')
        // })
      }).catch(error => {
        this.paying = false
        if(error.message){
          this.$message.error({
            message: error.message
          })
        }else{
          $('#myModal5').modal({
            show: true,
            backdrop: false
          })
        }


      });

    },
    setTimoutCancel(){
      this.betSetTimout = setTimeout(()=>{
        $('#myModal5').modal({
          show: true,
          backdrop: false
        })
        this.paying = false

      },25000)
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
      //this.connectZhuSocket()
      this.getBetPersonalInit()
    },
    getEosYue(){
      return this.eos.getAccount(this.account.name).then(acc => {
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
      ScatterJS.scatter.connect('playdice').then(connected => {
        this.loginLoading && this.loginLoading.close()
        // If the user does not have Scatter or it is Locked or Closed this will return false;
        //console.log("connected: " + connected)
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
        //console.log("getIdentity: ")
        scatter.getIdentity(requiredFields).then(() => {
          //console.log("account: ")
          // Always use the accounts you got back from Scatter. Never hardcode them even if you are prompting
          // the user for their account name beforehand. They could still give you a different account.

          const account = scatter.identity.accounts.find(x => x.blockchain === 'eos');
          this.account  = account
          this.loginSuccess()
          // You can pass in any additional options you want into the eosjs reference.
          const eosOptions = { expireInSeconds:60 };

          // Get a proxy reference to eosjs which you can use to sign transactions with a user's Scatter.
          const eos = scatter.eos(network, Eos, eosOptions);
          this.eos = eos
          this.getEosYue()
            .then(()=>{
              let yue = parseFloat(this.yue)
              if(yue < this.betsVal){
                this.betsVal = yue
              }
            })

          // ----------------------------
          // Now that we have an identity,
          // an EOSIO account, and a reference
          // to an eosjs object we can send a transaction.
          // ----------------------------


          // Never assume the account's permission/authority. Always take it from the returned account.


        }).catch(error => {
          // The user rejected this request, or doesn't have the appropriate requirements.
          //console.log("getIdentity: error")
          this.$message.error({
            message: error.message
          })
          //console.error(error);
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
      if(!el){
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
$main-color: #2C333A;
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



  a {
    color: inherit;
  }
  .nav-wrap {
    background: $bg-color;
    box-shadow:0px 2px 2px 0px rgba(27,31,35,0.3);
  }

  #app {
    .navbar-collapse {
      padding: 0;
    }
  }

  .m-nav {
    height: 60px;
    color: $nav-font-color;
    padding-right: 30px;
    width: $ct-width;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    position: relative;
    .nav-head {
      //margin-top: 5px;
      //float: left;
      height: 50px;
      line-height: 50px;
      img {
        display: inline-block;
        width: auto;
        height: 30px;
      }
    }
    .nav-items {
      //float: right;
      height: 100%;
      //text-align: right;
      //line-height: 60px;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      .item {
        //display: inline-block;
        margin-left: 30px;
        cursor: pointer;
      }

    }


  }


#app {
  .navbar {
    height: 60px;
    color: $nav-font-color;
    padding-right: 30px;
    width: $ct-width;
    margin: 0 auto;
    background: $bg-color;
    border: none;
  }

  .container-fluid {
    padding: 0;
  }

  .navbar-brand {
    margin-top: 5px;
    float: left;
    height: 50px;
    line-height: 50px;
    padding: 0;
    img {
      display: inline-block;
      width: auto;
      height: 42px;
    }
  }

  .navbar-nav {
    li {
      margin-left: 30px;
    }
    a {
      color: $nav-font-color;
      padding: 0;
      background: transparent;
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
    padding: 76px 10px 135px 10px;

  }
  .main {
    width: $ct-width;
    margin: 0 auto;
    //overflow: hidden;
  }


  .top-part {
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
    flex-wrap: wrap;
  }


  .right-middle-part {
    display: flex;
    justify-content: space-between;
  }

  //投注

  .left-part {
    width: 364px;
    //float: left;
  }

  .touzhu {
    //float: left;
    height:74px;
    background:$bg-color;
    border-radius:4px;
    padding: 7px 7px 0 4px;
    margin-bottom: 10px;
  }

  .zhu-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .pai {
    //float: right;
    //width:289px;
    height:74px;
    background: $bg-color;
    border-radius:4px;
    padding: 7px 7px 0 4px;
    margin-bottom: 10px;
  }

.yue {
  //position: absolute;
  //left: 0;
  //top: 5px;
  //width:180px;
  height:74px;
  background: $bg-color;
  border-radius:4px;
  padding: 7px 7px 0 4px;
  color: $color;
}

  .zhu-input {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-width:150px;
    height:36px;
    background: $part-color;
    border-radius:4px;
    padding: 0 9px 0 10px;
    vertical-align: middle;
    color: #fff;
    input {
      flex: 1;
      -webkit-appearance: textfield;
      -moz-appearance: textfield;
      //padding: 0 0 0 8px;
      //display: inline-block;
      line-height: 36px;
      //width: 8em;
      width: auto;
      height: 36px;
      font-size: 20px;
      border: none;
      outline: none;
      text-align: left;
      color: #fff;
      background: transparent;
      white-space: nowrap;
      overflow: hidden;
      //margin-left: 12px;
    }
    .as-input {
      flex: 1;
      text-align: left;
      //padding-left: 8px;
      white-space: nowrap;
      overflow: hidden;
      font-size: 20px;
    }
    .ut {
      text-align: center;
      font-weight:600;
      color: $eos-color;
      line-height: normal;
    }
  }

  .zhu-btn {
    display: flex;
    min-width:30px;
    height:30px;
    align-items: center;
    justify-content: center;
    background:rgba(65,65,129,0);
    border:1px solid #8A99A4;
    border-radius:50%;
    color: #8A99A4;
    cursor: pointer;
    margin-left: 5px;
    &:hover {
      border-color: #F1BD2D;
      color: #F1BD2D;
    }
  }

  $hook-bg: #465059;

  .nums {
    font-size: 18px;
    height:116px;
    border-radius:4px;
    color: $eos-color;
    margin-bottom: 130px;
    display: flex;
    justify-content: space-between;
    &-left {
      background: $hook-bg;
      width: 100%;
      max-width:208px;
      min-width: 126px;
      height:178px;
      border-radius:4px;
      margin-right: 10px;
      &-t {
        margin-bottom: 19px;
        background: $bg-color;
        //width:208px;
        height:60px;
        border-radius:4px 4px 0px 0px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .num {
        margin-top: 16px;
        font-size:36px;
        font-weight:600;
        color:rgba(255,255,255,1);
        line-height: 1;
        display: flex;
        justify-content: center;
        span {
          width: 58/208*100%;
          height:80px;
          background: $bg-color;
          border-radius:4px;
          margin-right: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          &:last-of-type {
            margin-right: 0;
          }
        }
      }
    }
    &-right {
      width: 146px;
      min-width: 108px;
      &-t {
        height: 84px;
        background: $hook-bg;
        margin-bottom: 10px;
        &-t {
          height: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: $bg-color;
        }
      }
      &-b {
        height: 84px;
        background: $hook-bg;
        &-t {
          height: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: $bg-color;
        }
      }
      .num {
        flex: 1;
        font-size:36px;
        font-weight:600;
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        span {
          transform: translateY(3px);
        }
      }
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
    margin-bottom: 28px;
    color: #fff;
    display: flex;
    justify-content: space-between;
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
    //float: right;
    width: 384px;
    height:559px;
    background: $bg-color;
    border-radius:4px;
    position: relative;
    color: #fff;
    padding-bottom: 7px;
    //margin-bottom: 33px;
  }


  //roll num
  .middle-part {
    width: 411px;
    margin-right: 10px;
  }

  .touzhu-main {
    background: #252B30;
    padding-top: 143px;
    height: 475px;
  }

  .roll-num {
    display: flex;
    justify-content: center;
    margin-bottom: 92px;
    .num-cell:last-of-type {
      margin-right: 0;
    }
  }

  .num-cell {
    height: 88px;
    width: 66px;
    margin-right: 11px;
    border:1px solid rgba(244,165,54,1);
    border-radius:4px;
  }

  .num-cell-ct {
    width: 100%;
    height: 100%;
    background:linear-gradient(0deg,rgba(153,153,153,1),rgba(255,255,255,1),rgba(153,153,153,1));
    border-radius:4px;
    border: 1px solid #252B30;
    font-size:50px;
    font-weight:bold;
    color: #333;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }





  .re-icon {
    @include a-icon($icon-height: 93px,$icon-width: 101px,$url: '~assets/images/eos-bg.png', $margin-right: 0);
    position: absolute;
    top: -8px;
    left: -2px;
    transform: rotate(1deg);
  }

  .pai-head {
    //text-align: right;
    height: 60px;
    //line-height: 60px;
    border-bottom: 2px solid $border-color;
    padding-right: 10px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    overflow: hidden;
  }

  .pai-pre {
    @include a-icon($icon-height: 30px,$icon-width: 30px,$url: '~assets/images/h-left.png', $margin-right: 0);
    margin-left: 10px;
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
    margin-left: 10px;
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
    white-space: nowrap;
  }

  .pai-content {

  }

  .pai-table-head {
    padding: 0 13px;
    height: 47px;
    //line-height: 45px;
    border-bottom: 2px solid $border-color;
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-align: center;
    span {
      overflow: hidden;
      text-overflow: ellipsis;
      width: auto;
    }
    span:nth-of-type(1) {
      width: 34px;
    }
    span:nth-of-type(2) {
      //width: 45%;
      flex: 3;
    }
    span:nth-of-type(3) {
      //width: 33%;
      flex: 2;
    }
    span:nth-of-type(4) {
      width: 15%;
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
  //line-height: 45px;
  background: $part-color;
  margin-bottom: 5px;
  display: flex;
  align-items: center;
  text-align: center;
  span {
    //display: inline-block;
    overflow: hidden;
    text-overflow: ellipsis;
    height: auto;
    width: auto;
    i {
      font-style: normal;
      font-size: 12px;
    }
  }
  span:nth-of-type(1) {
    //width: 34px;
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
   // width: 45%;
    flex: 3;
  }
  span:nth-of-type(3) {
    //width: 30%;
    flex: 2;
  }
  span:nth-of-type(4) {
    width: 15%;
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
    display: flex;
    justify-content: center;
    a {
      cursor: pointer;
      //display: inline-block;
      //height: 100%;
      line-height: 60px;
      padding: 0 2px;
      color: $eos-color;
      margin-bottom: -1px;
      text-align: center;
      margin-right: 74px;
      &:last-of-type {
        margin-right: 0;
      }
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
      a {
        color: $login-color;
      }
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
    max-width: $ct-width;
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
    //line-height: 103px;
    border-bottom: 1px solid #5C6B77;
    margin-bottom: 17px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      //display: inline-block;
      width: auto;
      height: 23px;
    }
    .bps {
      margin-right: 15px;
      color: #5C6B77;
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


.num-list {
  list-style: none;
  padding: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  transition: transform 1s ease-out;
  li {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

.circle-an1 {
  animation: circle-num2 1s linear infinite;
}

.circle-an2 {
  animation: circle-num1 1.5s linear infinite;
}

.circle-an3 {
  animation: circle-num1 1.2s linear infinite;
}

#myModal5 {
  .modal-dialog {
    width: 350px;
    max-width: calc(100% - 20px);
  }
  .tzcs-modal {

  }
  .modal-footer {
    border: 0;
  }
}


@keyframes circle-num1 {
  0% {
    transform: translateY(0px);
  }
  100% {
    transform: translateY(calc(-100% * 10));
  }
}

@keyframes circle-num2 {
  0% {
    transform: translateY(0px);
  }
  100% {
    transform: translateY(calc(-100% * 2));
  }
}




$m-s-m: 15px;

@media (max-width: $ct-width + 20px) {
  .m-nav {
    width: 100%;
    padding-left: 10px;
  }
  .main {
    width: 100%;
  }

  .top-part {
    justify-content: center;
  }

  .right-part {
    width: 100%;
    max-width: 920px;
    //margin: 0 auto;
    margin-bottom: $m-s-m;
    .pai-head {
      justify-content: center;
    }
  }

  .middle-part {
    margin-right: $m-s-m;

  }

  .foot-content {
    padding: 0 10px;
  }

}

@media (max-width: 950px) {



  .m-nav {
    padding: 0 10px;
  }

  .right-middle-part {
    max-width: 100%;
  }



}

@media (max-width: 830px) {

    /*.right-middle-part {*/
      /*justify-content: center;*/
    /*}*/

  .middle-part {
    //width: calc(100vw - 420px);
    width: 100vw;
    max-width: 441px;
  }

  .left-part {
    //width: calc(100vw - 420px);
    width: 100vw;
    max-width: 441px;
  }

}

@media (max-width: 768px) {
  .right-part {
    height: auto;
    max-height:559px;
  }
}

@media (max-width: 767px) {

  #navbar {
    z-index: 1000;
    position: absolute;
    top: 100%;
    left: 0;
    height: auto !important;
    .nav-items {
      justify-content: flex-start;
      flex-wrap: wrap;
      .item {
        width: 100%;
        padding: 15px 0;
      }
    }
  }

  #app {
    overflow-x: hidden;
    .navbar-toggle {
      display: block;
      background: #fff;
      margin: 0;
      margin-left: -40px;
      .icon-bar {
        background: $bg-color;
      }
    }

    .navbar-collapse {
      width: 100vw;
      //height: 0 !important;
      //overflow: hidden !important;
      background: $bg-color;
      padding-bottom: 20px;
      //border-top: 1px solid rgba(255, 255, 255, .1);
    }

    .dropdown-menu {
      position: relative;
      background: transparent;
      border: 0;
      border-radius: 0;
      //color: inherit;
      box-shadow: none;
      a {
        color: inherit;
        background: transparent;
      }
      .divider {
        background: transparent;
      }
    }


  }

}



@media (max-width: 670px) {

  .right-middle-part {
    justify-content: center;
    flex-wrap: wrap;
  }

  .middle-part {
    //width: 80vw;
    margin-bottom: $m-s-m;
    margin-right: 0;
  }

  .p-layout {
    display: flex;
    flex-wrap: wrap;
    .pai {
      width: 50%;
    }
    .yue {
      width: 50%;
    }
  }

  .touzhu-main {
    background: #252B30;
    padding-top: 52px;
    height: 275px;
  }

  .roll-num {
    display: flex;
    justify-content: center;
    margin-bottom: 52px;
    .num-cell:last-of-type {
      margin-right: 0;
    }
  }

  .nums {
    height: auto;
    margin-bottom: 70px;
    &-left {
      width: 40%;
      margin-right: 0;
      height: 84px;
      &-t {
        margin-bottom: 0;
        height:30px;
      }
      .num {
        margin-top: 0;
        height: 54px;
        align-items: center;
        span {
          height: 85%;
        }
      }
    }
    &-right {
      flex: 1;
      display: flex;
      &-t {
        width: 50%;
        margin-bottom: 0;
      }
      &-b {
        width: 50%;
      }
    }

  }

}

@media (max-width: 500px) {

  .no-main {
    display: none;
  }

  .right-part {
    width: 100%;
  }

  .left-part {
    width: 100%;
  }

  .right-part {
    .pai-head {
      justify-content: flex-end;
    }
  }



}

@media (max-width: 400px) {



}



</style>


