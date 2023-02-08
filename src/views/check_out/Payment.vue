<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <div class="bg-white pt-md-120 pt-80">
      <div class="payment-page bg-gray02 m-lg-20 m-md-15 py-50">
        <div class="container">
          <div class="row justify-content-md-between">
            <div class="col-lg-8 px-20 text-lighter text-gray05">
              <div class="shipping">
                <div
                  class="shipping-title d-flex align-items-center pb-lg-40 pb-20"
                >
                  <div
                    class="checkout-number rounded-circle border border-gray05 text-center mr-15"
                  >
                    1
                  </div>
                  <div class="text-30">Shipping Address</div>
                </div>
              </div>
              <div class="payment">
                <div
                  class="payment-title d-flex align-items-center py-lg-40 py-20 border-top border-bottom border-white"
                >
                  <div
                    class="checkout-number rounded-circle border border-gray05 text-center mr-15"
                  >
                    2
                  </div>
                  <div class="text-30">Payment</div>
                </div>
                <div class="payment-content text-14 pt-30">
                  <form @submit.prevent="payOrder">
                    <p>CREDIT CARD TYPE</p>
                    <div class="row ml-5 mb-25">
                      <div class="form-check mr-10">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="cardType"
                          id="visa"
                          value="visa"
                          checked
                        />
                        <label class="form-check-label" for="visa">
                          VISA
                        </label>
                      </div>
                      <div class="form-check mr-10">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="cardType"
                          id="mastercard"
                          value="mastercard"
                        />
                        <label class="form-check-label" for="mastercard">
                          MasterCard
                        </label>
                      </div>
                      <div class="form-check mr-10">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="cardType"
                          id="jcb"
                          value="jcb"
                        />
                        <label class="form-check-label" for="jcb"> JCB </label>
                      </div>
                    </div>
                    <div class="form-group">
                      <label for="holdername">CARDHOLDER NAME</label>
                      <input
                        type="text"
                        class="form-control"
                        name="holdername"
                        id="holdername"
                        v-validate="'required'"
                        :class="{ 'is-invalid': errors.has('holdername') }"
                        v-model="form.card.holdername"
                      />
                      <span class="text-danger" v-if="errors.has('holdername')"
                        >required</span
                      >
                    </div>
                    <p>CREDIT CARD NUMBER</p>
                    <div class="form-row">
                      <div class="form-group col-3">
                        <input
                          type="text"
                          class="form-control"
                          name="number01"
                          id="number01"
                          v-validate="'required'"
                          :class="{ 'is-invalid': errors.has('number01') }"
                          v-model="form.card.number01"
                        />
                        <span class="text-danger" v-if="errors.has('number01')"
                          >required</span
                        >
                      </div>
                      <div class="form-group col-3">
                        <input
                          type="text"
                          class="form-control"
                          name="number02"
                          id="number02"
                          v-validate="'required'"
                          :class="{ 'is-invalid': errors.has('number02') }"
                          v-model="form.card.number02"
                        />
                        <span class="text-danger" v-if="errors.has('number02')"
                          >required</span
                        >
                      </div>
                      <div class="form-group col-3">
                        <input
                          type="text"
                          class="form-control"
                          name="number03"
                          id="number03"
                          v-validate="'required'"
                          :class="{ 'is-invalid': errors.has('number03') }"
                          v-model="form.card.number03"
                        />
                        <span class="text-danger" v-if="errors.has('number03')"
                          >required</span
                        >
                      </div>
                      <div class="form-group col-3">
                        <input
                          type="text"
                          class="form-control"
                          name="number04"
                          id="number04"
                          v-validate="'required'"
                          :class="{ 'is-invalid': errors.has('number04') }"
                          v-model="form.card.number04"
                        />
                        <span class="text-danger" v-if="errors.has('number04')"
                          >required</span
                        >
                      </div>
                    </div>
                    <div class="row">
                      <p class="col-8">CARD VALID THRU</p>
                      <p class="col-4 px-5">CVV</p>
                    </div>

                    <div class="form-row">
                      <div class="form-group col-4">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="MM"
                          name="validMonth"
                          id="validMonth"
                          v-validate="'required'"
                          :class="{ 'is-invalid': errors.has('validMonth') }"
                          v-model="form.card.validMonth"
                        />
                        <span
                          class="text-danger"
                          v-if="errors.has('validMonth')"
                          >required</span
                        >
                      </div>
                      <div class="form-group col-4">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="YY"
                          name="validYear"
                          id="validYear"
                          v-validate="'required'"
                          :class="{ 'is-invalid': errors.has('validYear') }"
                          v-model="form.card.validYear"
                        />
                        <span class="text-danger" v-if="errors.has('validYear')"
                          >required</span
                        >
                      </div>
                      <div class="form-group col-4 mb-md-40 mb-20">
                        <input
                          type="text"
                          class="form-control"
                          name="securityCode"
                          id="securityCode"
                          v-validate="'required'"
                          :class="{ 'is-invalid': errors.has('securityCode') }"
                          v-model="form.card.securityCode"
                        />
                        <span
                          class="text-danger"
                          v-if="errors.has('securityCode')"
                          >required</span
                        >
                      </div>
                    </div>
                    <div class="text-left">
                      <button type="submit" class="btn-checkout-pay btn btn-black px-45 py-10">
                        LET'S PAY
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <OrderCard :order-in="order" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import OrderCard from '@/components/OrderCard.vue'

export default {
  name: 'Payment',
  data () {
    return {
      orderId: '',
      order: {
        user: {}
      },
      form: {
        card: {
          type: '',
          holdername: '',
          number01: '',
          number02: '',
          number03: '',
          number04: '',
          validMonth: '',
          validYear: '',
          securityCode: ''
        }
      },
      isLoading: false
    }
  },
  components: {
    OrderCard
  },
  methods: {
    getOrder () {
      const vm = this
      const url = `${process.env.VUE_APP_APIPATH}/api/order/${vm.orderId}`
      vm.isLoading = true
      vm.$http.get(url).then((response) => {
        vm.order = response.data.order
      }).catch((error) => {
        console.log('Payment.vue => ', api, error)
      }).finally(() => {
        vm.isLoading = false
      })
    },
    payOrder () {
      const vm = this
      const url = `${process.env.VUE_APP_APIPATH}/api/pay/${vm.orderId}`

      vm.$validator.validate().then((result) => {
        if (result) {
          vm.isLoading = true
          vm.$http.post(url).then((response) => {
            if (response.data.success) {
              vm.getOrder()
              vm.$router.push('/payment_success')
            }
          }).catch((error) => {
            console.log('Payment.vue => ', api, error)
          }).finally(() => {
            vm.isLoading = false
          })
        }
      })
    }
  },
  created () {
    this.orderId = this.$route.params.orderId
    this.getOrder()
  }
}
</script>
