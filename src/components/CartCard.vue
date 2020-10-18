<template>
  <div
    class="d-none d-lg-block col-lg-4 bg-white align-self-start text-gray05 text-lighter p-30"
  >
    <div class="border-bottom border-gray03 text-center text-18 pb-30">
      <i class="fas fa-shopping-cart text-gray03 pr-10"></i
      >{{ cartItemQty }} items
    </div>
    <div v-if="cartIn.carts" class="cart-card">
      <div
        class="row justify-content-between border-bottom border-gray03 py-20"
        v-for="item in cartIn.carts"
        :key="item.id"
      >
        <div class="col-3 my-auto text-center">
          <img
            v-if="
              item.product.title &&
              item.product.title.indexOf('LARGE VINTAGE EARRING') !== -1
            "
            :src="item.product.imageUrl"
            width="90%"
            :alt="item.product.title"
          />
          <img
            v-else-if="
              item.product.title &&
              item.product.title.indexOf('SMALL VINTAGE EARRING') !== -1
            "
            :src="item.product.imageUrl"
            width="80%"
            :alt="item.product.title"
          />
          <img
            v-else-if="
              item.product.title && item.product.title.indexOf('NECKLACE') !== -1
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
          <p>{{ item.total | currency }}</p>
        </div>
      </div>
      <div class="amount pt-10 pb-20">
        <div class="d-flex justify-content-between">
          <p>Subtotal</p>
          <p>{{ cartIn.total | currency }}</p>
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
          <p>{{ cartIn.total | currency }}</p>
        </div>
        <div
          v-if="cartIn.final_total !== cartIn.total"
          class="d-flex justify-content-between"
        >
          <p>Discounted Total</p>
          <p class="text-citrus">{{ cartIn.final_total | currency }}</p>
        </div>
      </div>
      <button type="button" disabled class="btn btn-gray02 btn-block">PLACE ORDER</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CartCard',
  data () {
    return {}
  },
  props: ['cartIn'],
  computed: {
    cartItemQty () {
      if (this.cartIn.carts) {
        let cartItemQty = 0
        this.cartIn.carts.forEach(function (item) {
          cartItemQty += item.qty
        })
        return cartItemQty
      } else {
        return 0
      }
    }
  }
}
</script>
