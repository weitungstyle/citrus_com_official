<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <div class="banner-shopbag bg-black" style="height: 300px">
      <h2 class="text-center text-80 text-white text-lighter">SHOPPING BAG</h2>
    </div>
    <div class="bg-gray02 m-lg-20 m-md-15 py-lg-50 py-30">
      <div class="container">
        <div class="row justify-content-md-between" v-if="cartItemQty !== 0">
          <div class="col-lg-9 px-20 text-lighter text-gray05">
            <div
              class="selection-header border-bottom border-gray03 d-flex justify-content-between pb-10"
            >
              <span>YOUR SELECTIONS</span>
              <a href="#" class="text-gray05"
                ><i class="fas fa-print pr-10"></i>Print</a
              >
            </div>
            <div class="bag-item">
              <div
                class="row justify-content-between border-bottom border-gray03 mx-0 py-40"
                v-for="item in cart.carts"
                :key="item.id"
              >
                <div class="col-md-3 text-center my-md-auto mb-40">
                  <img
                    v-if="
                      item.product.title &&
                      item.product.title.indexOf('LARGE VINTAGE EARRING') !== -1
                    "
                    :src="item.product.imageUrl"
                    class="bag-img-large-earring"
                    :alt="item.product.title"
                  />
                  <img
                    v-if="
                      item.product.title &&
                      item.product.title.indexOf('SMALL VINTAGE EARRING') !== -1
                    "
                    :src="item.product.imageUrl"
                    class="bag-img-small-earring"
                    :alt="item.product.title"
                  />
                  <img
                    v-if="
                      item.product.title &&
                      item.product.title.indexOf('NECKLACE') !== -1
                    "
                    :src="item.product.imageUrl"
                    class="bag-img-necklace"
                    :alt="item.product.title"
                  />
                  <img
                    v-if="
                      item.product.title &&
                      item.product.title.indexOf('BRACELET') !== -1
                    "
                    :src="item.product.imageUrl"
                    class="bag-img-bracelet"
                    :alt="item.product.title"
                  />
                </div>
                <div class="col-md-5 bag-item-content">
                  <p class="pb-10">{{ item.product.title }}</p>
                  <p>Style / {{ item.product.id }}</p>
                  <p class="pb-5">Color/ {{ item.product.color }}</p>
                  <p class="d-md-none">QTY/ {{ item.qty }}</p>
                  <p class="mb-md-50">AVAILABLE</p>
                  <p class="text-right total-price mb-5 d-md-none">
                    {{ item.total | currency }}
                  </p>
                  <div class="d-flex justify-content-between">
                    <div>
                      <a
                        href="#"
                        class="text-black pr-10 border-right border-black"
                        @click.prevent="removeCartItem(item.id)"
                      >
                        Remove
                      </a>
                      <a
                        href="#"
                        class="text-black pl-10"
                        @click.prevent="saveItem(item.product)"
                      >
                        <i class="far fa-heart"></i>
                        Save
                      </a>
                    </div>
                    <p class="text-citrus d-md-none" v-if="item.coupon">
                      Discounted
                    </p>
                  </div>
                </div>
                <div class="col-md-1">
                  <p class="d-none d-md-block">QTY/ {{ item.qty }}</p>
                </div>
                <div class="col-md-2 text-right d-none d-md-block">
                  <p class="text-18 mb-5">
                    {{ item.product.price | currency }}
                  </p>
                  <p class="text-citrus" v-if="item.coupon">Discounted</p>
                </div>
              </div>
            </div>
          </div>
          <div
            class="summary-content text-lighter col-lg-3 bg-white border border-gray05 p-25 align-self-start mx-lg-0 mx-20"
          >
            <p class="text-gray05 pb-15 border-bottom border-gray05">
              ORDER SUMMARY
            </p>
            <div class="d-flex justify-content-between">
              <p>Subtotal</p>
              <p>{{ cart.total | currency }}</p>
            </div>
            <div class="d-flex justify-content-between">
              <p>Shipping</p>
              <p>Free</p>
            </div>
            <div class="d-flex justify-content-between pb-20">
              <p>Estimated Tax</p>
              <p>Calculate</p>
            </div>
            <div class="input-group mb-3 input-group-sm">
              <input
                type="text"
                class="form-control px-0 bg-gray01"
                name="couponCode"
                v-model="couponCode"
                placeholder="coupon?"
                id="couponCode"
                v-validate="'required'"
                :class="{ 'is-invalid': errors.has('couponCode') }"
              />
              <div class="input-group-append">
                <button
                  class="btn btn-gray02"
                  type="button"
                  @click="addCouponCode"
                >
                  add coupon
                </button>
              </div>
            </div>
            <span class="text-danger" v-if="errors.has('couponCode')"
                >required</span
              >
            <div class="d-flex justify-content-between align-items-end">
              <p>Estimated Total</p>
              <p
                class="total-price"
                :class="{ 'line-through': cart.final_total !== cart.total }"
              >
                {{ cart.total | currency }}
              </p>
            </div>

            <div
              v-if="cart.final_total !== cart.total"
              class="d-flex justify-content-between align-items-end"
            >
              <p>Discounted Total</p>
              <p class="text-citrus total-price">
                {{ cart.final_total | currency }}
              </p>
            </div>
            <a @click="checkOut"
              to="/check_out"
              class="btn btn-black btn-block mt-35 py-10"
              >CHECKOUT</a
            >
          </div>
        </div>
        <div v-else class="text-center py-lg-50 py-160">
          <p class="text-30 py-10">Your Bag Is Empty : )</p>
          <router-link to="/products/EARRINGS" class="btn btn-black py-10 px-50"
            >SHOP SOMETHING</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShoppingBag',
  data () {
    return {
      cart: [],
      isLoading: false,
      couponCode: '',
      saved: JSON.parse(localStorage.getItem('savedItems')) || []
    }
  },
  methods: {
    getCart () {
      const vm = this
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`
      vm.isLoading = true
      vm.$http.get(api).then((response) => {
        vm.cart = response.data.data
        vm.isLoading = false
      })
    },
    removeCartItem (id) {
      const vm = this
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart/${id}`
      vm.isLoading = true
      vm.$http.delete(api).then(() => {
        vm.getCart()
        vm.isLoading = false
        vm.$bus.$emit('RemoveItem:removeCartItem', (id))
      })
    },
    addCouponCode () {
      const vm = this
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/coupon`
      const coupon = {
        code: vm.couponCode
      }
      vm.isLoading = true
      vm.$http.post(api, { data: coupon }).then((response) => {
        vm.getCart()
        vm.isLoading = false
      })
    },
    saveItem (product) {
      const vm = this
      const tempSaved = vm.saved.find(function (item) { return item.id === product.id }) || {}
      if (tempSaved.id === product.id) { return }
      vm.cart.carts.forEach(function (value) {
        if (value.product_id === product.id) {
          vm.saved.push(value.product)
        }
      })
      localStorage.setItem('savedItems', JSON.stringify(vm.saved))
      window.dispatchEvent(
        new CustomEvent('savedItems-localstorage-changed', {
          detail: {
            storage: localStorage.getItem('savedItems')
          }
        })
      )
    },
    checkOut () {
      const vm = this
      vm.$validator.validate().then((result) => {
        if (result) {
          vm.$router.push('/check_out')
        }
      })
    }
  },
  computed: {
    cartItemQty () {
      if (this.cart.carts) {
        let cartItemQty = 0
        this.cart.carts.forEach(function (item) {
          cartItemQty += item.qty
        })
        return cartItemQty
      } else {
        return 0
      }
    }
  },
  created () {
    this.getCart()
  }
}
</script>
