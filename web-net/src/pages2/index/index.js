import Vue from 'vue'
import App from './App'
import VueI18n from 'vue-i18n'
import zhLocal from 'src/lang/zh'
import enLocal from 'src/lang/en'
// import 'js-polyfills/polyfill.js'
import  'jquery'
// import 'bootstrap'
// import 'bootstrap/dist/css/bootstrap.css'
import 'assets/bootstrap3/css/bootstrap.css'
import 'assets/bootstrap3/js/bootstrap.js'
import vueSlider from 'vue-slider-component'
//import 'common/js/jquery.md5.js'

import 'assets/js/iconfont.js'
import Message from 'vue-m-message'
Vue.use(Message)
Vue.use(VueI18n)
Vue.component('vueSlider', vueSlider)


const i18n = new VueI18n({
  locale: 'zh',
  messages:{
    zh: {
      ...zhLocal
    },
    en: {
      ...enLocal
    }
  }
})


new Vue({
  el: '#app',
  i18n,
  render: h => h(App)
})


