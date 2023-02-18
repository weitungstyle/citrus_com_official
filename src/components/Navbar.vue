<template>
  <header
    class="container-fluid fixed-top pt-md-40 pt-30 px-5"
    :class="{
      'header-product': $route.params.id,
      'header-checkout': $route.params.orderId,
      'pb-md-40': $route.params.orderId,
      'pb-30': $route.params.orderId,
      header: !$route.params.id && !$route.params.orderId,
    }"
  >
    <loading :active.sync="isLoading"></loading>
    <div class="row align-items-center mx-0">
      <div class="col-md-4 col-3 pl-lg-30 pl-15">
        <div class="d-md-flex d-none align-items-center">
          <a
            href="mailto:citrus.cwc@gmail.com"
            class="fas fa-envelope p-15"
            :class="{
              'text-gray03': !$route.params.id,
              'text-white': $route.params.id,
            }"
          ></a>
          <span
            class="d-flex ml-15"
            :class="{
              'text-gray03': !$route.params.id,
              'text-white': $route.params.id,
            }"
          >
            <i class="fas fa-phone"></i>
            <span>+8862-2345-7851</span>
          </span>
        </div>
        <a
          class="showmenu d-md-none fas fa-bars text-i6p-20 p-15"
          :class="{
            'text-gray03': !$route.params.id,
            'text-gray05': $route.params.id,
          }"
          href="#"
        ></a>
      </div>
      <div class="col-md-4 col-6 px-0">
        <router-link
          to="/"
          v-if="$route.params.id"
          class="text-hide bg-cover mx-i6p-auto brand-title d-block"
          style="
            background-image: url('https://upload.cc/i1/2020/09/24/DF0ZM8.png');
          "
        >
          CITRUS
        </router-link>

        <div
          v-else-if="$route.params.orderId"
          class="text-hide bg-cover mx-i6p-auto brand-title d-block"
          style="
            background-image: url('https://upload.cc/i1/2020/09/19/9cNkyP.png');
          "
        >
          CITRUS
        </div>
        <router-link
          to="/"
          v-else
          class="text-hide bg-cover mx-i6p-auto brand-title d-block"
          style="
            background-image: url('https://upload.cc/i1/2020/09/19/9cNkyP.png');
          "
        >
          CITRUS
        </router-link>
      </div>
      <div class="col-md-4 col-3 pr-lg-30 pr-15">
        <ul
          class="d-flex justify-content-end align-items-center"
          v-if="!$route.params.orderId"
        >
          <!-- <li>
            <router-link to="/sign_in">
              <span
                class="d-md-none fas fa-user p-15"
                :class="{
                  'text-gray03': !$route.params.id,
                  'text-gray05': $route.params.id,
                }"
              ></span>
              <span
                class="d-none d-md-block py-md-15"
                :class="{
                  'text-gray03': !$route.params.id,
                  'text-gray05': $route.params.id,
                }"
                >Sign in</span
              >
            </router-link>
          </li> -->
          <li class="d-md-block d-none saved-link">
            <router-link
              class="far fa-heart p-15"
              :class="{
                'text-gray03': !$route.params.id,
                'text-gray05': $route.params.id,
              }"
              to="/saved"
            ></router-link>
            <div
              class="saved-item-qty rounded-circle bg-white text-8 text-center"
              v-if="savedQty !== 0"
            >
              {{ savedQty }}
            </div>
          </li>
          <li class="cart-link d-md-none">
            <router-link
              to="/shopping_bag"
              class="p-15"
              :class="{
                'text-gray03': !$route.params.id,
                'text-gray05': $route.params.id,
              }"
              ><i class="fas fa-shopping-cart"></i
            ></router-link>
            <div
              class="cart-item-qty rounded-circle bg-white text-8 text-center"
              v-if="cartItemQty !== 0"
            >
              {{ cartItemQty }}
            </div>
          </li>
          <li class="cart-link d-none d-md-block">
            <a
              class="p-15"
              :class="{
                'text-gray03': !$route.params.id,
                'text-gray05': $route.params.id,
              }"
              data-toggle="dropdown"
              data-flip="false"
              ><i class="fas fa-shopping-cart"></i
            ></a>
            <div
              class="cart-item-qty rounded-circle bg-white text-8 text-center"
              v-if="cartItemQty !== 0"
            >
              {{ cartItemQty }}
            </div>
            <div
              class="dropdown-menu dropdown-menu-cart text-lighter py-0 border-gray-03 border"
              style="min-width: 320px"
              data-offset="400"
            >
              <p
                class="text-center text-18 py-10 border-bottom mb-0 border-gray03"
              >
                Shopping Bag
              </p>
              <div v-if="cartItemQty !== 0">
                <div class="overflow-auto" style="max-height: 423px">
                  <div
                    class="row border-bottom border-gray03 mx-0 py-15 text-12"
                    v-for="item in cart.carts"
                    :key="item._id"
                  >
                    <div class="col-md-4 text-center my-md-auto">
                      <img
                        v-if="
                          item.productId.title &&
                          item.productId.title.indexOf(
                            'LARGE VINTAGE EARRING'
                          ) !== -1
                        "
                        :src="item.productId.imageUrl"
                        class="bag-img-large-earring"
                        :alt="item.productId.title"
                      />
                      <img
                        v-else-if="
                          item.productId.title &&
                          item.productId.title.indexOf(
                            'SMALL VINTAGE EARRING'
                          ) !== -1
                        "
                        :src="item.productId.imageUrl"
                        class="bag-img-small-earring"
                        :alt="item.productId.title"
                      />
                      <img
                        v-else-if="
                          item.productId.title &&
                          item.productId.title.indexOf('NECKLACE') !== -1
                        "
                        :src="item.productId.imageUrl"
                        class="bag-img-necklace"
                        :alt="item.productId.title"
                      />
                      <img
                        v-else
                        :src="item.productId.imageUrl"
                        class="bag-img-bracelet"
                        :alt="item.productId.title"
                      />
                    </div>
                    <div class="col-md-8">
                      <p class="text-black mb-5">{{ item.productId.title }}</p>
                      <p class="mb-5 text-gray05">Quantity: {{ item.qty }}</p>
                      <p class="mb-5 text-gray05">
                        {{ item.productId.price | currency }}
                      </p>
                      <div class="d-flex justify-content-between">
                        <p class="mb-5">AVAILABLE</p>
                        <a
                          href="#"
                          class="text-black mr-10"
                          @click.prevent="removeCartItem(item._id)"
                        >
                          Remove
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="p-15">
                  <div class="d-flex justify-content-between">
                    <p class="text-14 mb-15">Sub Total</p>
                    <p class="text-20 mb-15">{{ cart.total | currency }}</p>
                  </div>
                  <router-link
                    to="/shopping_bag"
                    class="btn btn-white btn-block"
                    >VIEW BAG DETAILS</router-link
                  >
                  <router-link to="/check_out" class="btn btn-black btn-block"
                    >CHECKOUT</router-link
                  >
                </div>
              </div>
              <p v-else class="text-center text-18 py-10">
                Your Bag Is Empty : )
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="row py-md-15 py-10" v-if="!$route.params.orderId">
      <div class="col-12">
        <ul class="d-md-flex justify-content-center menu">
          <li>
            <router-link
              class="remove-line-style d-block px-lg-25 px-15"
              to="/"
              :class="{
                'text-white': !$route.params.id,
                'text-black': $route.params.id,
              }"
              >HOME</router-link
            >
          </li>
          <li>
            <router-link
              class="remove-line-style d-block px-lg-25 px-15"
              :to="`/products/EARRINGS`"
              :class="{
                'text-white': !$route.params.id,
                'text-black': $route.params.id,
              }"
              >EARRINGS</router-link
            >
          </li>
          <li>
            <router-link
              class="remove-line-style d-block px-lg-25 px-15"
              :to="`/products/NECKLACES`"
              :class="{
                'text-white': !$route.params.id,
                'text-black': $route.params.id,
              }"
              >NECKLACES</router-link
            >
          </li>
          <li>
            <router-link
              class="remove-line-style d-block px-lg-25 px-15"
              :to="`/products/BRACELETS`"
              :class="{
                'text-white': !$route.params.id,
                'text-black': $route.params.id,
              }"
              >BRACELETS</router-link
            >
          </li>
          <li>
            <router-link
              class="remove-line-style d-block px-lg-25 px-15"
              to="/about"
              :class="{
                'text-white': !$route.params.id,
                'text-black': $route.params.id,
              }"
              >ABOUT</router-link
            >
          </li>
          <li>
            <router-link
              class="remove-line-style d-block px-lg-25 px-15 d-md-none"
              to="/saved"
              :class="{
                'text-white': !$route.params.id,
                'text-black': $route.params.id,
              }"
              >SAVED</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
import $ from 'jquery'

export default {
  name: 'Navbar',
  data () {
    return {
      cart: [],
      isLoading: false,
      saved: JSON.parse(localStorage.getItem('savedItems')) || []
    }
  },
  methods: {
    getCart () {
      const vm = this
      const api = `${process.env.VUE_APP_APIPATH}/api/cart`
      vm.$http.get(api).then((response) => {
        vm.cart = response.data.data
      })
    },
    removeCartItem (id) {
      const vm = this
      const api = `${process.env.VUE_APP_APIPATH}/api/cart/${id}`
      vm.isLoading = true
      vm.$http.delete(api).then(() => {
        vm.getCart()
      }).catch((error) => {
        console.log('Navbar.vue => ', api, error)
      }).finally(() => {
        vm.isLoading = false
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
    },
    savedQty () {
      if (this.saved === []) {
        return 0
      } else {
        const saveQty = this.saved.length
        return saveQty
      }
    }
  },
  created () {
    const vm = this
    vm.getCart()
    vm.$bus.$on('AddItem:getCart', () => {
      vm.getCart()
    })
    vm.$bus.$on('RemoveItem:removeCartItem', (id) => {
      vm.removeCartItem(id)
    })
  },
  mounted () {
    window.addEventListener('savedItems-localstorage-changed', (event) => {
      this.saved = JSON.parse(localStorage.getItem('savedItems')) || []
    })
    $('.showmenu').click(function (event) {
      event.preventDefault()
      $('body').toggleClass('menushow')
    })
    $('.menu .remove-line-style').click(function (event) {
      event.preventDefault()
      $('body').toggleClass('menushow')
    })
    $(window).scroll(function () {
      $('body').removeClass('menushow')
    })
  }
}
</script>
