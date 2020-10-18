<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <div class="banner-shopbag bg-black" style="height: 300px">
      <h2 class="text-center text-80 text-white text-lighter">CHECKOUT</h2>
    </div>
    <div class="bg-gray02 m-lg-20 m-md-15 py-lg-50 py-30">
      <div class="container">
        <div class="row justify-content-md-between">
          <div class="col-lg-8 px-20 text-lighter text-gray05">
            <div class="shipping">
              <div class="shipping-title d-flex align-items-center pb-lg-40 pb-20">
                <div
                  class="checkout-number rounded-circle border border-gray05 text-center mr-15"
                >
                  1
                </div>
                <div class="text-30">Shipping Address</div>
              </div>
              <div class="shipping-content text-14 pt-15 pb-35 border-top border-bottom border-white">
                <p class="pb-i6-10">All fields are required except if mentioned optional.</p>
                <p>SHIP TO</p>
                <form @submit.prevent="createOrder">
                  <div class="row">
                    <div class="form-group col-i6p-2">
                      <label for="title">TITLE</label>
                      <select
                        id="title"
                        name="title"
                        class="form-control"
                        v-model="form.user.title"
                        v-validate="'required'"
                        :class="{ 'is-invalid': errors.has('title') }"
                      >
                        <option value="mr">Mr.</option>
                        <option value="ms">Ms.</option>
                      </select>
                      <span class="text-danger" v-if="errors.has('title')"
                        >required</span
                      >
                    </div>
                    <div class="form-group col-i6p-5 col-6">
                      <label for="firstName">FIRST NAME</label>
                      <input
                        type="text"
                        class="form-control"
                        name="firstName"
                        id="firstName"
                        v-validate="'required'"
                        :class="{ 'is-invalid': errors.has('firstName') }"
                        v-model="form.user.firstName"
                      />
                      <span class="text-danger" v-if="errors.has('firstName')"
                        >required</span
                      >
                    </div>
                    <div class="form-group col-i6p-5 col-6">
                      <label for="lastName">LAST NAME</label>
                      <input
                        type="text"
                        class="form-control"
                        name="lastName"
                        id="lastName"
                        v-validate="'required'"
                        :class="{ 'is-invalid': errors.has('lastName') }"
                        v-model="form.user.lastName"
                      />
                      <span class="text-danger" v-if="errors.has('lastName')"
                        >required</span
                      >
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="useraddress">ADDRESS LINE 1</label>
                    <input
                      type="address"
                      class="form-control"
                      name="address"
                      id="useraddress"
                      v-validate="'required'"
                      :class="{ 'is-invalid': errors.has('address') }"
                      v-model="form.user.address"
                    />
                    <span class="text-danger" v-if="errors.has('address')"
                      >required</span
                    >
                  </div>
                  <div class="form-group">
                    <label for="useraddressMore">ADDRESS LINE 2 optional</label>
                    <input
                      type="address"
                      class="form-control"
                      name="address"
                      id="useraddressMore"
                      v-model="form.user.addressMore"
                    />
                  </div>
                  <div class="row">
                    <div class="form-group col-i6p-6">
                      <label for="city">CITY</label>
                      <input
                        type="text"
                        class="form-control"
                        name="city"
                        id="city"
                        v-validate="'required'"
                        :class="{ 'is-invalid': errors.has('city') }"
                        v-model="form.user.city"
                      />
                      <span class="text-danger" v-if="errors.has('city')"
                        >required</span
                      >
                    </div>
                    <div class="form-group col-i6p-3 col-6">
                      <label for="state">STATE</label>
                      <select
                        id="state"
                        name="state"
                        v-validate="'required'"
                        :class="{ 'is-invalid': errors.has('state') }"
                        class="form-control"
                        v-model="form.user.state"
                      >
                        <option value="Taiwan">Taiwan</option>
                        <option value="US">US</option>
                        <option value="Canada">Canada</option>
                        <option value="Japan">Japan</option>
                        <option value="Singapore">Singapore</option>
                      </select>
                      <span class="text-danger" v-if="errors.has('state')"
                        >required</span
                      >
                    </div>
                    <div class="form-group col-i6p-3 col-6">
                      <label for="zipcode">ZIP CODE</label>
                      <input
                        type="text"
                        class="form-control"
                        name="zipcode"
                        id="zipcode"
                        v-validate="'required'"
                        :class="{ 'is-invalid': errors.has('zipcode') }"
                        v-model="form.user.zipcode"
                      />
                      <span class="text-danger" v-if="errors.has('zipcode')"
                        >required</span
                      >
                    </div>
                  </div>
                  <div class="form-group form-check">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="business"
                      v-model="form.user.business"
                      true-value="true"
                      false-value="false"
                    />
                    <label class="form-check-label" for="business"
                      >This is a business address</label
                    >
                  </div>
                  <div class="row mb-md-40 mb-20">
                    <div class="form-group col-i6-4">
                      <label for="telcode">CONTACT PHONE NUMBER</label>
                      <select
                        id="telcode"
                        name="telcode"
                        v-validate="'required'"
                        :class="{ 'is-invalid': errors.has('telcode') }"
                        class="form-control"
                        v-model="form.user.telCode"
                      >
                        <option value="+886">+886 Taiwan</option>
                        <option value="+1">+1 US / Canada</option>
                        <option value="+81">+81 Japan</option>
                        <option value="+65">+65 Singapore</option>
                      </select>
                      <span class="text-danger" v-if="errors.has('telcode')"
                        >required</span
                      >
                    </div>
                    <div class="form-group col-i6-8">
                      <label for="usertel"
                        >In the event that our shipping partner needs to reach
                        someone.</label
                      >
                      <input
                        type="tel"
                        class="form-control"
                        name="tel"
                        id="usertel"
                        v-validate="'required'"
                        :class="{ 'is-invalid': errors.has('tel') }"
                        v-model="form.user.tel"
                      />
                      <span class="text-danger" v-if="errors.has('tel')"
                        >required</span
                      >
                    </div>
                  </div>
                  <div class="text-left">
                    <button type="submit" class="btn-checkout-pay btn btn-black px-45 py-10">CONTINUE TO PAYMENT</button>
                  </div>
                </form>
              </div>
            </div>
            <div class="payment">
              <div class="payment-title d-flex align-items-center pt-lg-40 pt-20">
                <div
                  class="checkout-number rounded-circle border border-gray05 text-center mr-15"
                >
                  2
                </div>
                <div class="text-30">Payment</div>
              </div>
            </div>
          </div>
          <CartCard :cart-in="cart" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CartCard from '@/components/CartCard.vue'

export default {
  name: 'CheckOut',
  data () {
    return {
      cart: [],
      form: {
        user: {
          title: 'ms',
          firstName: '',
          lastName: '',
          address: '',
          addressMore: '',
          city: '',
          state: 'Taiwan',
          zipcode: '',
          business: '',
          tel: '',
          telCode: '+886'
        }
      },
      isLoading: false
    }
  },
  components: {
    CartCard
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
    createOrder () {
      const vm = this
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/order`
      const order = vm.form
      vm.isLoading = true
      vm.$validator.validate().then((result) => {
        if (result) {
          vm.$http.post(api, { data: order }).then((response) => {
            if (response.data.success) {
              vm.$router.push(`/payment/${response.data.orderId}`)
              vm.$bus.$emit('AddItem:getCart')
            }
            vm.isLoading = false
          })
        } else {
          vm.isLoading = false
        }
      })
    }
  },
  created () {
    this.getCart()
  }
}
</script>
