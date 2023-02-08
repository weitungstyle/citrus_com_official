<template>
  <div
    class="d-none d-lg-block col-lg-4 bg-white align-self-start text-gray05 text-lighter p-30"
  >
    <div class="border-bottom border-gray03 text-center text-18 pb-30">
      <i class="fas fa-shopping-cart text-gray03 pr-10"></i>items
    </div>
    <div v-if="orderIn.products" class="cart-card">

        <div
          class="row justify-content-between border-bottom border-gray03 py-20" v-for="item in orderIn.products" :key="item.id"
        >
          <div class="col-3 my-auto text-center">
            <img
              v-if="
                item.product.title &&
                item.product.title.indexOf('LARGE VINTAGE EARRING') != -1
              "
              :src="item.product.imageUrl"
              width="90%"
              :alt="item.product.title"
            />
            <img
              v-else-if="
                item.product.title &&
                item.product.title.indexOf('SMALL VINTAGE EARRING') != -1
              "
              :src="item.product.imageUrl"
              width="80%"
              :alt="item.product.title"
            />
            <img
              v-else-if="
                item.product.title &&
                item.product.title.indexOf('NECKLACE') != -1
              "
              :src="item.product.imageUrl"
              width="50%"
              :alt="item.product.title"
            />
            <img
              v-else
              :src="item.product.imageUrl"
              width="90%"
              :alt="item.product.title"
            />
          </div>
          <div class="col-7">
            <p>{{ item.product.title }}</p>
            <p>Style / {{ item.product.id }}</p>
            <p>Color/ {{ item.product.color }}</p>
          </div>
          <div class="col-2 text-right">
            <p>QTY/ {{ item.qty }}</p>
            <p
              :class="{
                'text-citrus': item.product.coupon,
                'text-black': !item.product.coupon,
              }"
            >
              {{ item.finalTotal | currency }}
            </p>
          </div>
        </div>

      <div class="amount pt-10 pb-20">
        <div class="d-flex justify-content-between">
          <p>Subtotal</p>
          <p>{{ orderIn.total | currency }}</p>
        </div>
        <div class="d-flex justify-content-between">
          <p>Shipping</p>
          <p>Free</p>
        </div>
        <div class="d-flex justify-content-between">
          <p>Estimated Tax</p>
          <p>$ 0</p>
        </div>
        <div class="d-flex justify-content-between">
          <p>Estimated Total</p>
          <p>{{ orderIn.total | currency }}</p>
        </div>
      </div>
      <button type="button" disabled class="btn btn-gray02 btn-block">PLACE ORDER</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OrderCard',
  data () {
    return {}
  },
  props: ['orderIn']
}
</script>
