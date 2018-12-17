<!-- 复选框 -->
<template>
  <div class="f-checkbox">
    <input  type="checkbox"  />
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

  .f-checkbox {
    @include btn-icon($height: auto, $icon-height: 14px, $url: "~assets/images/icon/uncheck.png", $margin-right: 4px);
    &.checked {
      &::before {
        background-image: url("~assets/images/icon/check.png");
      }
    }
  }





</style>
