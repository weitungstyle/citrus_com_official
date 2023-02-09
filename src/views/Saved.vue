<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <div class="banner-normal text-center" style="height: 700px">
      <h2 class="text-80 text-white text-lighter">SAVED ITEMS</h2>
      <div
        class="banner-img bg-cover"
        style="
          background-image: url(https://upload.cc/i1/2020/09/20/DmqOgW.jpg);
        "
      ></div>
    </div>
    <div class="mx-lg-20 mb-5 mt-15 mt-lg-20 mx-15">
      <div v-if="saved.length !== 0">
        <h3 class="products-category text-gray05 text-lighter">SAVED ITEMS</h3>
        <div class="row">
          <div
            class="col-md-4 col-i6-6 mb-lg-20 mb-md-15 mb-10 px-lg-10 px-md-7 px-5"
            v-for="item in saved"
            :key="item._id"
          >
            <div class="text-center bg-gray02 p-lg-35 p-i6p-20 p-i6-10 p-20">
              <div class="text-right">
                <a
                  class="remove-saved far fa-trash-alt text-gray05"
                  href="#"
                  @click.prevent="removeSaved(item)"
                ></a>
              </div>
              <router-link :to="`/product/${item._id}`">
                <img
                  v-if="
                    item.title &&
                    item.title.indexOf('LARGE VINTAGE EARRING') != -1
                  "
                  :src="item.imageUrl"
                  width="83%"
                  :alt="item.title"
                  class="my-xl-84 my-lg-97 my-md-40 my-28"
                />
                <img
                  v-else-if="
                    item.title &&
                    item.title.indexOf('SMALL VINTAGE EARRING') != -1
                  "
                  :src="item.imageUrl"
                  width="66%"
                  :alt="item.title"
                  class="my-xl-104 my-lg-106 my-md-49 my-35"
                />
                <img
                  v-else-if="item.title && item.title.indexOf('NECKLACE') != -1"
                  :src="item.imageUrl"
                  :alt="item.title"
                  class="saved-img-necklace mb-lg-40 mb-20"
                />
                <img
                  v-else
                  :src="item.imageUrl"
                  :alt="item.title"
                  class="saved-img-bracelet mb-lg-40 mb-20"
                />
                <h4 class="products-category-title text-black text-lighter">
                  {{ item.title }}
                </h4>
                <span class="products-category-price text-black">{{
                  item.price | currency
                }}</span>
                <div
                  class="color-options d-flex justify-content-center pt-10 pb-20 mb-10 border-bottom border-gray04"
                >
                  <div
                    class="products-color bg-black mr-lg-10 mr-5 rounded-circle"
                  ></div>
                  <div class="products-color bg-white rounded-circle"></div>
                </div>
              </router-link>
              <div class="add-btn">
                <div class="available-to-add" v-if="item.isEnabled == 1">
                  <button
                    type="button"
                    @click="addToCart(item._id)"
                    class="btn-add-bag btn btn-gray02 btn-block font-weight-bold text-gray05 py-10"
                  >
                    <span class="d-md-inline-block d-i6-none"
                      >ADD TO SHOPPING BAG</span
                    >
                    <span class="d-md-none d-i6-inline-block d-none"
                      >ADD TO BAG</span
                    >
                  </button>
                </div>
                <div class="unavailable-to-add" v-else>
                  <button
                    type="button"
                    disabled
                    class="btn-add-bag btn btn-gray02 btn-block font-weight-bold text-gray05 py-10"
                  >
                    <span class="d-md-inline-block d-i6-none">SOLD OUT</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-else class="text-center py-lg-80 py-60">
        <p class="have-not-saved text-30 pb-10">You haven't saved anything : )</p>
        <router-link to="/products/EARRINGS" class="btn btn-black py-10 px-50"
          >SHOP SOMETHING</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Saved',
  data () {
    return {
      saved: JSON.parse(localStorage.getItem('savedItems')) || [],
      isLoading: false
    }
  },
  methods: {
    removeSaved (product) {
      const vm = this
      let newIndex = ''
      vm.saved.forEach(function (item, key) {
        if (item._id === product._id) {
          newIndex = key
        }
      })
      vm.saved.splice(newIndex, 1)
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
        console.log('Saved.vue => ', api, error)
      }).finally(() => {
        vm.isLoading = false
      })
    }
  }
}
</script>
