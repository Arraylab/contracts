<!-- 栏目 -->
<template>
  <div class="art-cell" data-type="cell">
    <div class="art-cell-shadow" v-if="showShadow">
      <div class="art-cell-shadow_content">
        <a :class="[collect ? 'collected' : 'collect']" data-action="collect">{{  collect ? '已收藏' : '收藏'  }}</a>
        <br>
        <a  class="look-detail" data-action="detail">查看详情</a>
        <span class="score">8.8</span>
      </div>
    </div>
    <figure>
      <img :src="src" alt="" class="art-cell_img">
      <span class="art-cell_update-txt">{{updateTxt}}</span>
      <i class="art-cell_ju">{{ topTip }}</i>
      <span class="score" v-if="showInScore">8.8</span>
    </figure>
    <div class="art-cell_title" v-if="showTitle">
      <p>{{til1}}</p>
      <p>{{til2}}</p>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['data', 'params', 'index'],
    watch:{
      data(nv, ov){
        this.updateBaseData(nv, this)
      }
    },
    data () {
      let me = this;
      let initData = {
        prop: [
          'a', 'b'
        ],
        collect: false,
        showInScore: false,
        showTitle: true,
        showShadow: true,
        src: '',
        til1: '',
        til2: '',
        topTip: '剧集',
        updateTxt: '',
      }
      return me.updateBaseData(me.data, initData)
    },
    methods: {
      updateBaseData(val, target) {
        return Object.assign(target, val)
      }
    }
  }
</script>

<style lang="scss">
  @import "~common/scss/variable";
  @import "~common/scss/mixin";
  @import "~assets/scss/cell";

  .art-cell {
    //min-width: $cell-width;
    padding-bottom: 4px;
    margin-right: $cell-space;
    position: relative;
    background: #fff;
    &:hover {
      .art-cell-shadow {
        display: block;
      }
    }
    &:last-of-type {
      margin-right: 0;
    }
    &_img {
      display: block;
      width: 100%;
      height: auto;
      max-height: 245px;
      position: absolute;
      left: 0;
      top: 0;
    }
    &_update-txt {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 28px;
      line-height: 28px;
      padding-left: 6px;
      background: url("~assets/images/icon/num-bg.png") no-repeat center center;
      background-size: 100% 100%;
    }
    &_ju {
      position: absolute;
      right: 5px;
      top: 5px;
      /*width:30px;*/
      width: auto;
      padding: 0 3px;
      white-space: nowrap;
      height:18px;
      line-height: 18px;
      background:rgba(235,68,72,1);
      opacity:0.85;
      border-radius:2px;
      text-align: center;
      font-style: normal;
    }
    figure {
      position: relative;
      font-size: 12px;
      color: #fff;
      margin-bottom: 5px;
      .score {
        right: 6px;
        bottom: 5px;
      }
      &::before{
        content: '';
        width: 100%;
        display: block;
        height: auto;
        padding-top: 140%;
      }
    }
    &_title {
      text-align: center;
      p:last-of-type {
        font-size: 12px;
        color: #999;
        margin-top: 7px;
      }
    }
  }

  .art-cell-shadow {
    display: none;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: auto;
    background: rgba(0, 0, 0, .6);
    text-align: center;
    z-index: 100;
    color: #ABABAB;
    font-weight: 600;
    a {
      cursor: pointer;
    }
    &_content {
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      width: 100%;
      height: auto;
      padding-top: 32%;
    }
    &::before{
      content: '';
      width: 100%;
      display: block;
      height: auto;
      padding-top: 140%;
    }
  }

  .score {
    position: absolute;
    right: 4.137%;
    bottom: 5.517%;
    font-size:20px;
    font-weight:600;
    color: #00B1EA;
  }

  .collect {
    margin-bottom: 20%;
    @include btn-icon($height: 20px, $icon-height: 20px, $url: "~assets/images/icon/collect.png", $hurl: "~assets/images/icon/collect-lt.png",$margin-right: 6px, $hcolor: #00B1EA);
    /*&:hover {*/
      /*color: #00B1EA;*/
    /*}*/
    &ed {
      @include btn-icon($height: 20px, $icon-height: 20px, $url: "~assets/images/icon/collected.png", $margin-right: 6px, $color: #00B1EA);
      margin-bottom: 20%;
    }
  }

  .look-detail {
    @include btn-icon($height: 20px, $icon-height: 20px, $url: "~assets/images/icon/look-detail.png", $hurl: "~assets/images/icon/look-detail-lt.png",$margin-right: 6px, $hcolor: #00B1EA);
  }


  /*:root {*/
    /*--vw: calc(100% / 100)*/
  /*}*/




  /*
  $ct-width: getCellsWidth(7);
  @media screen and (max-width: $ct-width) {
    #app {
      padding-left: $app-space * 100 / $ct-width * 1vw !important;
      padding-right: $app-space * 100 / $ct-width * 1vw !important;
    }

    .art-cell {
      min-width: $cell-width * 100 / $ct-width * 1vw;
      margin-right: $cell-space * 100 / $ct-width * 1vw;
    }

  }
  $ct-width: getCellsWidth(6);
  @media screen and (max-width: $ct-width) {
    #app {
      padding-left: $app-space * 100 / $ct-width * 1vw !important;
      padding-right: $app-space * 100 / $ct-width * 1vw !important;
    }

    .art-cell {
      min-width: $cell-width * 100 / $ct-width * 1vw;
      margin-right: $cell-space * 100 / $ct-width * 1vw;
    }
  }
  $ct-width: getCellsWidth(5);
  @media screen and (max-width: $ct-width) {
    #app {
      padding-left: $app-space * 100 / $ct-width * 1vw !important;
      padding-right: $app-space * 100 / $ct-width * 1vw !important;
    }

    .art-cell {
      min-width: $cell-width * 100 / $ct-width * 1vw;
      margin-right: $cell-space * 100 / $ct-width * 1vw;
    }
  }
  $ct-width: getCellsWidth(4);
  @media screen and (max-width: $ct-width) {
    #app {
      padding-left: $app-space * 100 / $ct-width * 1vw !important;
      padding-right: $app-space * 100 / $ct-width * 1vw !important;
    }

    .art-cell {
      min-width: $cell-width * 100 / $ct-width * 1vw;
      margin-right: $cell-space * 100 / $ct-width * 1vw;
    }
  }
*/

</style>
