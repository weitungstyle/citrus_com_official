<template>
  <div>
    <div class="banner-paysuccess text-center" style="position: relative" :style="{ height: browserHeight }">
      <h2 class="text-80 text-white text-lighter">PAYMENT SUCCESSFUL</h2>
      <router-link to="/" class="btn-shop-more btn btn-black py-15">SHOP MORE</router-link>
      <div class="banner-img bg-cover" style="background-image: url(https://firebasestorage.googleapis.com/v0/b/citruscom-a00c9.appspot.com/o/website%2Ff6Vmvi.jpg?alt=media&token=eda7e9be-dcd3-4b45-9af7-db11f425c992);"></div>
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
