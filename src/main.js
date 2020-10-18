import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'
import 'bootstrap'
import VeeValidate from 'vee-validate'
import en from 'vee-validate/dist/locale/en'
import VueI18n from 'vue-i18n'

import App from './App.vue'
import router from './router'
import './bus'
import currencyFilter from './filters/currency'

import { Swiper as SwiperClass, Pagination, Mousewheel, Autoplay } from 'swiper/core'
import getAwesomeSwiper from 'vue-awesome-swiper/dist/exporter'
// Swiper modules
SwiperClass.use([Pagination, Mousewheel, Autoplay])
// Global use
Vue.use(getAwesomeSwiper(SwiperClass))

Vue.config.productionTip = false
Vue.use(VueAxios, axios)

Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: 'en'
})
Vue.use(VeeValidate, {
  events: 'input|blur',
  i18n,
  dictionary: {
    en
  }
})

router.afterEach(() => {
  document.body.scrollTop = 0
  document.documentElement.scrollTop = 0
})

Vue.component('Loading', Loading)
Vue.filter('currency', currencyFilter)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
