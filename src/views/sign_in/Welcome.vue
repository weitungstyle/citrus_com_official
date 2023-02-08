<template>
  <div class="bg-gray02">
    <div
      class="banner-short"
      style="height: 500px"
    >
      <h2 class="text-center text-80 text-white text-lighter">{{`WELCOME, ${user.firstName} ${user.lastName}`}}</h2>
      <div class="bg-cover" style="
        background-image: url(https://upload.cc/i1/2020/09/20/BLckxI.jpg);
      "></div>
    </div>
    <div class="container py-lg-50 py-md-30 py-10 welcome-card">
      <div class="row">
        <div class="col-md-4"><Card :product-in="focusEarring" /></div>
        <div class="col-md-4"><Card :product-in="focusNecklace" /></div>
        <div class="col-md-4"><Card :product-in="focusBracelet" /></div>
      </div>
    </div>
  </div>
</template>

<script>
import Card from '@/components/Card.vue'

export default {
  name: 'Welcome',
  data () {
    return {
      user: JSON.parse(localStorage.getItem('userForm')) || [],
      focusEarring: {},
      focusNecklace: {},
      focusBracelet: {},
      Ids: {
        focusEarringId: '-MGgNSdA36SAz8eV5var',
        focusNecklaceId: '-MGgOEpr5qWE276na-6M',
        focusBraceletId: '-MHFp4lauOHAGd9a8pe1'
      }
    }
  },
  components: {
    Card
  },
  methods: {
    getFocusEarring () {
      const vm = this
      const api = `${process.env.VUE_APP_APIPATH}/api/product/${vm.Ids.focusEarringId}`
      vm.isLoading = true
      vm.$http.get(api).then((response) => {
        vm.focusEarring = response.data.product
      }).catch((error) => {
        console.log('Welcome.vue => ', api, error)
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
        console.log('Welcome.vue => ', api, error)
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
        console.log('Welcome.vue => ', api, error)
      }).finally(() => {
        vm.isLoading = false
      })
    }
  },
  created () {
    this.getFocusEarring()
    this.getFocusNecklace()
    this.getFocusBracelet()
  }
}
</script>
