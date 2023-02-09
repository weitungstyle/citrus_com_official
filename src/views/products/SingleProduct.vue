<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <div
      class="banner-product text-center bg-gray02"
      :style="{ height: browserHeight }"
    >
      <div
        class="d-flex justify-content-md-between justify-content-md-end justify-content-center banner-img"
      >
        <div
          class="model-img bg-left d-md-block d-none"
          :style="{
            backgroundImage: `url(${singleProduct.imgModelUrl})`,
          }"
        ></div>
        <div
          class="product-img d-flex align-items-center justify-content-md-end justify-content-center"
        >
          <img
            v-if="singleProduct.category === 'EARRINGS'"
            class="product-img-earring mb-md-0 mb-60 mt-lg-0 mt-md-60 mt-110"
            :src="singleProduct.imageUrl"
            :alt="singleProduct.title"
          />
          <img
            v-else-if="singleProduct.category === 'NECKLACES'"
            class="product-img-necklace mb-md-0 mb-20 mt-lg-0 mt-md-50 mt-90"
            :src="singleProduct.imageUrl"
            :alt="singleProduct.title"
          />
          <img
            v-else
            class="product-img-bracelet mb-md-0 mb-20 mt-lg-0 mt-md-60 mt-80"
            :src="singleProduct.imageUrl"
            :alt="singleProduct.title"
          />
        </div>
      </div>
      <div class="product-page-icon">
        <a href="#" class="fas fa-share-alt text-gray05 mr-md-30 mr-20"></a>
        <a
          href="#"
          class="heart-toggle far fa-heart text-gray05"
          @click.prevent="saveItem(singleProduct)"
        ></a>
      </div>
      <div class="product-page-card px-md-0 px-30">
        <div
          class="product-page-title text-lighter text-gray05 px-xl-60 pb-10 border-bottom border-gray04"
        >
          {{ singleProduct.title }}
        </div>
        <div class="product-page-price pt-10">
          {{ singleProduct.price | currency }}
        </div>
        <div
          class="product-page-option d-flex justify-content-center align-items-center py-lg-20 pt-10 pb-5"
        >
          <div
            v-if="singleProduct.color === 'black'"
            class="product-color bg-black rounded-circle"
          ></div>
          <div
            v-else
            class="product-color bg-white rounded-circle border border-gray03"
          ></div>
          <div class="form-group mb-0">
            <select
              id="color"
              class="form-control border-0 bg-trans px-50"
              v-model="singleProduct.color"
            >
              <option value="black">Black</option>
              <option value="white">White</option>
            </select>
          </div>
        </div>
        <div class="quantity pb-lg-20 pb-10">
          <a
            href="#"
            class="btn btn-trans"
            @click.prevent="quantity = quantity - 1"
          >
            <span class="text-20 text-black">－</span>
          </a>
          <span class="px-20">{{ quantity }}</span>
          <a
            href="#"
            class="btn btn-trans"
            @click.prevent="quantity = quantity + 1"
          >
            <span class="text-20 text-black">+</span>
          </a>
        </div>
        <div class="available pb-lg-30 pb-md-20 pb-i6p-30 pb-20">
          <div v-if="singleProduct.isEnabled">AVAILABLE</div>
          <div v-else>UNAVAILABLE</div>
        </div>
        <div class="product-page-add-btn mx-xl-30 pb-30 pb-md-0">
          <button
            type="button"
            v-if="singleProduct.isEnabled"
            class="btn btn-black btn-block py-10"
            @click="addToCart(singleProduct._id, quantity)"
          >
            ADD TO SHOPPING BAG
          </button>
          <button type="button" v-else disabled class="btn btn-gray03 btn-block py-10">
            SOLD OUT
          </button>
        </div>
      </div>
    </div>
    <div class="py-md-60 bg-gray01">
      <div class="container">
        <div class="row flex-md-row-reverse justify-content-md-between">
          <div class="col-lg-3 col-md-4 bg-white">
            <div class="product-detail-img text-center d-none d-md-block">
              <img
                v-if="singleProduct.category === 'EARRINGS'"
                class="product-detail-img-earring py-lg-70 pt-50 pb-30"
                :src="singleProduct.imageUrl"
                :alt="singleProduct.title"
              />
              <img
                v-else-if="singleProduct.category === 'NECKLACES'"
                class="product-detail-img-necklace py-lg-35 pt-35 pb-20"
                :src="singleProduct.imageUrl"
                :alt="singleProduct.title"
              />
              <img
                v-else-if="singleProduct.category === 'BRACELETS'"
                class="product-detail-img-bracelet py-lg-35 pt-35 pb-15"
                :src="singleProduct.imageUrl"
                :alt="singleProduct.title"
              />
            </div>
            <div class="product-details-text p-20 text-lighter">
              <span>PRODUCT DETAILS</span>
              <p class="pt-15 pb-30">{{ singleProduct.description }}</p>
              <p class="product-details-content">{{ singleProduct.content }}</p>
            </div>
          </div>
          <div class="col-lg-8 col-md-7 survice-detail px-0">
            <ul class="text-lighter mb-0">
              <li>
                <h6
                  @click="listSlideToggle('t01')"
                  class="t01 survice-detail-title mb-0 d-flex justify-content-between border-top border-bottom border-gray04 px-md-10 px-30 py-20"
                >
                  <span class="text-lighter">MATERIALS AND CARE</span
                  ><span>+</span>
                </h6>
                <div
                  class="survice-detail-content px-md-10 px-30 py-20 border-bottom border-gray04"
                >
                  <p>
                    Citrus jewelry is made with carefully selected materials.
                    Please handle with care for longer product life.
                  </p>
                  <br />
                  <p>
                    - This piece has been produced using hypoallergenic
                    materials in accordance with the current international
                    regulations
                  </p>
                  <p>
                    - To care for this piece please clean and polish it with a
                    soft cloth and store it separately
                  </p>
                </div>
              </li>
              <li>
                <h6
                  @click="listSlideToggle('t02')"
                  class="t02 survice-detail-title mb-0 d-flex justify-content-between px-md-10 px-30 py-20"
                >
                  <span class="text-lighter">SHIPPING AND RETURNS INFO</span
                  ><span>+</span>
                </h6>
                <div
                  class="survice-detail-content px-md-10 px-30 py-20 border-top border-gray04"
                >
                  <div class="d-flex">
                    <p class="border-right border-gray05 pr-30 pt-10">
                      Premium Express / Free
                    </p>
                    <p class="pl-30">
                      3 - 5 business days.<br />9 am - 8 pm, Mon-Fri.
                    </p>
                  </div>
                  <p>
                    Pre-order, Made to Order and DIY items will ship on the
                    estimated date noted on the product description page. These
                    items will ship through Premium Express once they become
                    available.
                  </p>
                  <br />
                  <p>
                    The return window for online purchases will be extended to
                    45 days from the date you received your purchase. You may
                    return products by mail using the complimentary prepaid
                    return label included with your order, and following the
                    return instructions provided in your digital invoice.
                  </p>
                </div>
              </li>
              <li>
                <h6
                  @click="listSlideToggle('t03')"
                  class="t03 survice-detail-title mb-0 d-flex justify-content-between border-top border-bottom border-gray04 px-md-10 px-30 py-20"
                >
                  <span class="text-lighter">PAYMENT OPTIONS</span
                  ><span>+</span>
                </h6>
                <div class="survice-detail-content px-md-10 px-30 py-20">
                  <p>
                    Citrus accepts the following forms of payment for online
                    purchases:
                  </p>
                  <p>
                    - Visa<br />
                    - MasterCard<br />
                    - American Express<br />
                    - JCB
                  </p>
                  <br />
                  <p>
                    The full transaction value will be charged to your credit
                    card after we have verified your card details, received
                    credit authorisation, confirmed availability and prepared
                    your order for shipping. For Made To Order, DIY,
                    personalised and selected Décor products, payment will be
                    taken at the time the order is placed.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="recommend mb-20 mx-20 mx-md-0">
      <div class="container">
        <h3 class="text-lighter text-center text-20 py-25">
          You May Also Like
        </h3>
        <div class="row">
          <div
            class="col-md-3 col-i6-6 text-center"
            v-for="item in recommendProducts"
            :key="item._id"
          >
            <div class="bg-gray02 p-lg-20 p-10">
              <div class="text-right">
                <a
                  class="recommend-heart far fa-heart text-gray05"
                  href="#"
                  @click.prevent="saveItem(item)"
                ></a>
              </div>
              <router-link :to="`/product/${item._id}`">
                <img
                  v-if="
                    item.title &&
                    item.title.indexOf('LARGE VINTAGE EARRING') !== -1
                  "
                  :src="item.imageUrl"
                  :alt="item.title"
                  class="recommend-large-earring py-lg-73 py-33"
                />
                <img
                  v-else-if="
                    item.title &&
                    item.title.indexOf('SMALL VINTAGE EARRING') !== -1
                  "
                  :src="item.imageUrl"
                  :alt="item.title"
                  class="recommend-small-earring py-lg-80 py-35"
                />
                <img
                  v-else-if="item.title && item.title.indexOf('NECKLACE') !== -1"
                  :src="item.imageUrl"
                  :alt="item.title"
                  class="recommend-necklace pb-lg-30 pb-20"
                />
                <img
                  v-else
                  :src="item.imageUrl"
                  :alt="item.title"
                  class="recommend-bracelet pt-lg-15 pb-lg-30 pb-15"
                />
              </router-link>
            </div>
            <h4 class="recommend-title text-lighter mt-15">
              {{ item.title }}
            </h4>
            <span>{{ item.price | currency }}</span>
            <router-link
              :to="`/product/${item._id}`"
              class="py-10 btn btn-white btn-block text-lighter"
            >
              SHOP THIS
              <i class="fas fa-angle-right ml-10"></i>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'

export default {
  name: 'SingleProduct',
  data () {
    return {
      productId: '',
      singleProduct: [],
      recommendProducts: [],
      tempCategoryProducts: [],
      quantity: 1,
      saved: JSON.parse(localStorage.getItem('savedItems')) || [],
      browserHeight: `${window.innerHeight}px`,
      isLoading: false
    }
  },
  methods: {
    getSingleProduct (id) {
      const vm = this
      const api = `${process.env.VUE_APP_APIPATH}/api/product/${id}`
      vm.$http.get(api).then((response) => {
        vm.singleProduct = response.data.product
        vm.getRecommendProducts()
      }).catch((error) => {
        console.log('SingleProduct.vue => ', api, error)
      })
    },
    getRecommendProducts () {
      const vm = this
      const api = `${process.env.VUE_APP_APIPATH}/api/products/all`

      vm.recommendProducts = []
      vm.$http.get(api).then((response) => {
        let tempProducts = []
        tempProducts = response.data.products
        tempProducts.forEach(function (item) {
          if (item.category === vm.singleProduct.category) {
            vm.tempCategoryProducts.push(item)
          }
        })
        for (let i = 0; i < 4; i++) {
          vm.recommendProducts.push(vm.tempCategoryProducts[i])
        }
        vm.tempCategoryProducts = []
      }).catch((error) => {
        console.log('SingleProduct.vue => ', api, error)
      })
    },
    saveItem (product) {
      const vm = this
      const tempSaved =
        vm.saved.find(function (item) {
          return item._id === product._id
        }) || {}
      if (tempSaved._id === product._id) {
        return
      } else if (product._id === vm.singleProduct._id) {
        vm.saved.push(vm.singleProduct)
      } else {
        vm.recommendProducts.forEach(function (value) {
          if (value._id === product._id) {
            vm.saved.push(value)
          }
        })
      }
      localStorage.setItem('savedItems', JSON.stringify(vm.saved))
      window.dispatchEvent(
        new CustomEvent('savedItems-localstorage-changed', {
          detail: {
            storage: localStorage.getItem('savedItems')
          }
        })
      )
    },
    addToCart (id, qty = 1) {
      const vm = this
      const api = `${process.env.VUE_APP_APIPATH}/api/cart`
      vm.isLoading = true
      const cart = {
        productId: id,
        qty
      }
      vm.$http.post(api, { data: cart }).then((response) => {
        vm.$bus.$emit('AddItem:getCart')
      }).catch((error) => {
        console.log('SingleProduct.vue => ', api, error)
      }).finally(() => {
        vm.isLoading = false
      })
    },
    listSlideToggle (heart) {
      $(`.${heart}`).toggleClass('active')
      $(`.${heart}`).parent().find('.survice-detail-content').slideToggle()
      $(`.${heart}`)
        .parent()
        .siblings()
        .find('.survice-detail-content')
        .slideUp()
      $(`.${heart}`)
        .parent()
        .siblings()
        .find('.survice-detail-title')
        .removeClass('active')
    }
  },
  created () {
    this.productId = this.$route.params.id
    this.getSingleProduct(this.productId)
  },
  watch: {
    $route (to, from) {
      this.productId = this.$route.params.id
      this.getSingleProduct(to.params.id)
      this.quantity = 1
    }
  }
}
</script>
