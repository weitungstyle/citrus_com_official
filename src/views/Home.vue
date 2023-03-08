<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <div class="banner-home text-center" :style="{ height: browserHeight }">
      <h2 class="text-80 text-white text-lighter">FALL WINTER 2020</h2>
      <p class="text-18 text-white text-center bg-black">
        ADD COUPON CODE 《 newopen2020 》TO GET 15% OFF
      </p>
      <div class="swiper-container banner-img">
        <div class="swiper-wrapper">
          <div
            class="swiper-slide bg-cover"
            style="
              background-image: url(https://firebasestorage.googleapis.com/v0/b/citruscom-a00c9.appspot.com/o/website%2FnSeM9J.jpg?alt=media&token=0b941809-8054-4f2b-a681-ee1619bf7f31);
            "
          ></div>
          <div
            class="swiper-slide bg-cover"
            style="
              background-image: url(https://firebasestorage.googleapis.com/v0/b/citruscom-a00c9.appspot.com/o/website%2FDmqOgW.jpg?alt=media&token=a3c64cc6-84f7-49b8-8590-1d1632d4e944);
            "
          ></div>
          <div
            class="swiper-slide bg-cover"
            style="
              background-image: url(https://firebasestorage.googleapis.com/v0/b/citruscom-a00c9.appspot.com/o/website%2FDHvPEr.jpg?alt=media&token=1b0a8994-9ac6-48d9-a740-1e05444b3e14);
            "
          ></div>
          <div
            class="swiper-slide bg-cover"
            style="
              background-image: url(https://firebasestorage.googleapis.com/v0/b/citruscom-a00c9.appspot.com/o/website%2FXteh0I.jpg?alt=media&token=55ceef90-6f5c-403d-a87e-7fc9c6d98c59);
            "
          ></div>
          <div
            class="swiper-slide bg-cover"
            style="
              background-image: url(https://firebasestorage.googleapis.com/v0/b/citruscom-a00c9.appspot.com/o/website%2FMEn6zd.jpg?alt=media&token=4f323538-1107-47e0-b1bc-33f33886d68b);
            "
          ></div>
        </div>
        <div class="swiper-pagination"></div>
        <div class="swiper-button-prev d-none d-md-block"></div>
        <div class="swiper-button-next d-none d-md-block"></div>
      </div>
    </div>
    <div class="bg-gray02 m-md-20">
      <div class="container">
        <div class="flagship-top text-center pt-40 pb-md-90">
          <div class="flagship pt-lg-95 pt-20 mb-50 mb-md-0">
            <img
              :src="flagshipTop.imageUrl"
              class="flagship-top-img"
              alt="flagship earring"
            />
            <div class="text-gray05 mt-lg-35 mt-20">THE NEW COLLECTION</div>
            <h3 class="text-lighter mb-30 mb-md-40 mb-lg-60">
              Citrus 2020 Vintage Earrings
            </h3>
            <div class="shop-buttom">
              <router-link
                :to="`/products/${flagshipTop.category}`"
                class="btn btn-black short-line px-60 py-10 text-12"
                >SHOP NOW</router-link
              >
            </div>
          </div>
          <div class="flagship-card-top">
            <Card :product-in="flagshipTop" />
          </div>
        </div>
        <div class="focus-look bg-cover">
          <div class="focus-earring">
            <Card :product-in="focusEarring" />
          </div>
          <div class="focus-necklace">
            <Card :product-in="focusNecklace" />
          </div>
          <div class="focus-braclet">
            <Card :product-in="focusBracelet" />
          </div>
        </div>
        <div
          class="flagship-bottom text-center pt-lg-70 pt-50 pb-lg-90 pb-md-50 pb-20"
        >
          <div class="flagship mb-50 mb-md-0">
            <img
              :src="flagshipBottom.imageUrl"
              class="flagship-bottom-img"
              alt="flagship earring"
            />
            <div class="text-gray05 mt-lg-35 mt-20">THE NEW COLLECTION</div>
            <h3 class="text-lighter mb-30 mb-md-40 mb-lg-60">
              Citrus 2020 Vintage Necklaces
            </h3>
            <div class="shop-buttom">
              <router-link
                :to="`/products/${flagshipBottom.category}`"
                class="btn btn-black short-line px-60 py-10 text-12"
                >SHOP NOW</router-link
              >
            </div>
          </div>
          <div class="flagship-card-bottom">
            <Card :product-in="flagshipBottom" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import 'swiper/swiper-bundle.css'
import Swiper, { Navigation, Pagination, Autoplay } from 'swiper'
import Card from '@/components/Card.vue'
Swiper.use([Navigation, Pagination, Autoplay])
export default {
  name: 'Home',
  data () {
    return {
      browserHeight: `${window.innerHeight}px`,
      flagshipTop: {},
      flagshipBottom: {},
      focusEarring: {},
      focusNecklace: {},
      focusBracelet: {},
      Ids: {
        flagshipTopId: '6400d9934724f3685a5002c0',
        flagshipBottomId: '6400d9934724f3685a5002c8',
        focusEarringId: '6400d9934724f3685a5002be',
        focusNecklaceId: '6400d9934724f3685a5002c2',
        focusBraceletId: '6400d9934724f3685a5002ca'
        // flagshipTopId: '-MGgNpIedqYw63kt0otn',
        // flagshipBottomId: '-MHFoH2b1s9pqxBb0MBu',
        // focusEarringId: '-MGgNSdA36SAz8eV5var',
        // focusNecklaceId: '-MGgOEpr5qWE276na-6M',
        // focusBraceletId: '-MHFp4lauOHAGd9a8pe1'
      },
      isLoading: false
    }
  },
  components: {
    Card,
    Swiper
  },
  methods: {
    getFlagshipTop () {
      const vm = this
      const api = `${process.env.VUE_APP_APIPATH}/api/product/${vm.Ids.flagshipTopId}`
      vm.isLoading = true
      vm.$http.get(api).then((response) => {
        vm.flagshipTop = response.data.product
      }).catch((error) => {
        console.log('Home.vue => ', api, error)
      }).finally(() => {
        vm.isLoading = false
      })
    },
    getFlagshipBottom () {
      const vm = this
      const api = `${process.env.VUE_APP_APIPATH}/api/product/${vm.Ids.flagshipBottomId}`
      vm.isLoading = true
      vm.$http.get(api).then((response) => {
        vm.flagshipBottom = response.data.product
      }).catch((error) => {
        console.log('Home.vue => ', api, error)
      }).finally(() => {
        vm.isLoading = false
      })
    },
    getFocusEarring () {
      const vm = this
      const api = `${process.env.VUE_APP_APIPATH}/api/product/${vm.Ids.focusEarringId}`
      vm.isLoading = true
      vm.$http.get(api).then((response) => {
        vm.focusEarring = response.data.product
      }).catch((error) => {
        console.log('Home.vue => ', api, error)
      }).finally(() => {
        vm.isLoading = false
      })
    },
    getFocusNecklace () {
      const vm = this
      const api = `${process.env.VUE_APP_APIPATH}/api/product/${vm.Ids.focusNecklaceId}`
      vm.isLoading = true
      vm.$http.get(api).then((response) => {
        vm.focusNecklace = response.data.product
      }).catch((error) => {
        console.log('Home.vue => ', api, error)
      }).finally(() => {
        vm.isLoading = false
      })
    },
    getFocusBracelet () {
      const vm = this
      const api = `${process.env.VUE_APP_APIPATH}/api/product/${vm.Ids.focusBraceletId}`
      vm.isLoading = true
      vm.$http.get(api).then((response) => {
        vm.focusBracelet = response.data.product
      }).catch((error) => {
        console.log('Home.vue => ', api, error)
      }).finally(() => {
        vm.isLoading = false
      })
    }
  },
  created () {
    const vm = this
    vm.getFlagshipTop()
    vm.getFlagshipBottom()
    vm.getFocusEarring()
    vm.getFocusNecklace()
    vm.getFocusBracelet()
  },
  mounted () {
    // eslint-disable no-new
    const mySwiper = new Swiper('.swiper-container', {
      direction: 'horizontal',
      loop: true,
      speed: 1000,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false
      },

      pagination: {
        el: '.swiper-pagination'
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    })
    Swiper.use(mySwiper)
  }
}
</script>
