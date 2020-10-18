<template>
  <router-link :to="`/product/${productIn.id}`" class="product-card d-block bg-gray01 p-md-30 p-i6-50 p-30 mb-10 mb-md-0 text-center">
    <div class="card-top d-flex justify-content-center">
      <div class="white-circle rounded-circle bg-white"><div
        class="card-img"
        :class="{'bg-left': productIn.category === 'EARRINGS', 'bg-bottom': productIn.category === 'NECKLACES', 'bg-bracelet': productIn.category === 'BRACELETS'}"
        :style="{ backgroundImage: `url(${productIn.imageUrl})` }"
      ></div></div>
    </div>
    <div class="card-title text-lighter pt-20 text-black">
      Citrus 2020
      <br class="d-none d-md-block"/>Collection
    </div>
    <p class="text-12 card-description mt-20 mt-md-0 text-black">{{productIn.description}}</p>
    <a
      class="card-btn btn btn-gray01 btn-block text-lighter mt-10"
    >
      MORE
      <i class="fas fa-angle-right ml-10"></i>
    </a>
  </router-link>
</template>

<script>
export default {
  name: 'Card',
  data () {
    return {}
  },
  props: ['productIn']
}
</script>
