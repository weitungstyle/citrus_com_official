<template>
  <div>
    <div class="banner-paysuccess text-center" style="position: relative" :style="{ height: browserHeight }">
      <h2 class="text-80 text-white text-lighter">PAYMENT SUCCESSFUL</h2>
      <router-link to="/" class="btn-shop-more btn btn-black py-15">SHOP MORE</router-link>
      <div class="banner-img bg-cover" style="background-image: url(https://upload.cc/i1/2020/09/20/f6Vmvi.jpg);"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PaymentSuccess',
  data () {
    return {
      browserHeight: `${window.innerHeight}px`
    }
  }
}
</script>
