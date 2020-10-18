<template>
  <div
    class="banner-signin"
    style="background-image: url(https://upload.cc/i1/2020/09/20/ogHAsu.jpg)"
  >
    <div
      class="row pt-lg-200 pt-md-160 pt-110 pb-lg-65 pb-35 text-lighter justify-content-center align-items-center"
    >
      <div
        class="col-lg-3 col-md-5 bg-md-transblack bg-black px-lg-35 px-20 py-lg-40 py-30 mx-25 mx-md-0"
      >
        <h3 class="text-lighter pb-lg-30 pb-20 text-white">
          <a
            href="#"
            @click.prevent="backPath"
            class="fas fa-angle-left mr-40 text-white"
          ></a
          >Create An Account
        </h3>
        <form class="mt-30">
          <p class="text-white">DATE OF BIRTH*</p>
          <div class="form-row mb-45">
            <div class="form-group col-i6-4">
              <input
                type="text"
                class="form-control"
                name="birthMonth"
                id="birthMonth"
                placeholder="MONTH *"
                v-validate="'required'"
                :class="{ 'is-invalid': errors.has('birthMonth') }"
                v-model="user.birthMonth"
              />
              <span class="text-danger" v-if="errors.has('birthMonth')"
                >required</span
              >
            </div>
            <div class="form-group col-i6-4">
              <input
                type="text"
                class="form-control"
                name="birthDay"
                id="birthDay"
                placeholder="DAY *"
                v-validate="'required'"
                :class="{ 'is-invalid': errors.has('birthDay') }"
                v-model="user.birthDay"
              />
              <span class="text-danger" v-if="errors.has('birthDay')"
                >required</span
              >
            </div>
            <div class="form-group col-i6-4">
              <input
                type="text"
                class="form-control"
                placeholder="YEAR *"
                name="birthYear"
                id="birthYear"
                v-validate="'required'"
                :class="{ 'is-invalid': errors.has('birthYear') }"
                v-model="user.birthYear"
              />
              <span class="text-danger" v-if="errors.has('birthYear')"
                >required</span
              >
            </div>
          </div>
          <div class="form-group form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="sendNews"
              v-model="user.sendNews"
              true-value="true"
              false-value="false"
            />
            <label class="form-check-label text-12 text-white" for="sendNews"
              >Keep me updated on new arrivals, exclusive products, tailored
              experience and services based on my interests.</label
            >
          </div>
          <a
            href="#"
            class="btn btn-trans border border-white text-lighter btn-block py-10 mt-50 mb-15"
            @click.prevent="saveUserForm"
            >CONTINUE</a
          >
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CreatAccount2',
  data () {
    return {
      user: {
        birthMonth: '',
        birthDay: '',
        birthYear: '',
        sendNews: ''
      }
    }
  },
  methods: {
    backPath () {
      this.$router.back()
    },
    saveUserForm () {
      const vm = this
      vm.$validator.validate().then((result) => {
        if (result) {
          vm.$router.push('/welcome')
        }
      })
    }
  }
}
</script>
