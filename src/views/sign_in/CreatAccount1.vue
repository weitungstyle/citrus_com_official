<template>
  <div
    class="banner-signin"
    style="background-image: url(https://upload.cc/i1/2020/09/20/ogHAsu.jpg)"
  >
    <div
      class="row pt-lg-200 pt-md-160 pt-110 pb-lg-65 pb-35 text-lighter justify-content-center align-items-center"
    >
      <div
        class="col-xl-3 col-lg-4 col-md-5 bg-md-transblack bg-black px-lg-35 px-20 py-lg-40 py-30 mx-25 mx-md-0"
      >
        <h3 class="text-lighter pb-lg-30 pb-20 text-white">
          <a
            href="#"
            @click.prevent="backPath"
            class="fas fa-angle-left mr-40 text-white"
          ></a
          >Create An Account
        </h3>
        <small class="text-lighter text-white">*Required field</small>
        <form class="mt-10">
          <div class="form-group">
            <input
              type="email"
              class="form-control py-20"
              id="email"
              placeholder="EMAIL *"
              name="email"
              v-model="user.email"
              v-validate="'required|email'"
              :class="{ 'is-invalid': errors.has('email') }"
            />
            <span class="text-danger" v-if="errors.has('email')">{{ errors.first('email') }}</span>
          </div>
          <div class="form-group">
            <input
              type="password"
              class="form-control py-20"
              id="password"
              placeholder="PASSWORD *"
              name="password"
              v-model="user.password"
              v-validate="'required'"
              :class="{ 'is-invalid': errors.has('password') }"
            />
            <span class="text-danger" v-if="errors.has('password')"
              >required</span
            >
          </div>
          <small class="text-lighter text-white">TITLE *</small>
          <div class="form-row">
            <div class="form-group col-i6-3">
              <select
                id="title"
                name="title"
                class="form-control"
                v-model="user.title"
                v-validate="'required'"
                :class="{ 'is-invalid': errors.has('title') }"
              >
                <option>Mr.</option>
                <option>Ms.</option>
              </select>
              <span class="text-danger" v-if="errors.has('title')"
                >required</span
              >
            </div>
            <div class="form-group col-i6-4">
              <input
                type="text"
                class="form-control"
                name="firstName"
                id="firstName"
                placeholder="FIRST NAME *"
                v-validate="'required'"
                :class="{ 'is-invalid': errors.has('firstName') }"
                v-model="user.firstName"
              />
              <span class="text-danger" v-if="errors.has('firstName')"
                >required</span
              >
            </div>
            <div class="form-group col-i6-5">
              <input
                type="text"
                class="form-control"
                placeholder="LAST NAME *"
                name="lastName"
                id="lastName"
                v-validate="'required'"
                :class="{ 'is-invalid': errors.has('lastName') }"
                v-model="user.lastName"
              />
              <span class="text-danger" v-if="errors.has('lastName')"
                >required</span
              >
            </div>
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
  name: 'CreatAccount1',
  data () {
    return {
      user: {
        email: '',
        password: '',
        title: '',
        firstName: '',
        lastName: ''
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
          vm.$router.push('/creat_account02')
          localStorage.setItem('userForm', JSON.stringify(vm.user))
        }
      })
    }
  }
}
</script>
