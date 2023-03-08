<template>
  <div
    class="banner-signin"
    style="background-image: url(https://firebasestorage.googleapis.com/v0/b/citruscom-a00c9.appspot.com/o/website%2FogHAsu.jpg?alt=media&token=9cc86114-358b-4261-ad43-8ca91a699ce2)"
  >
    <div
      class="row pt-lg-200 pt-md-160 pt-110 pb-lg-65 pb-35 text-lighter justify-content-center align-items-center"
    >
      <div
        class="col-lg-4 col-md-5 bg-gray02 px-lg-35 px-20 py-lg-40 py-30 mx-25 mx-md-0"
      >
        <h3 class="text-lighter text-center pb-lg-50 pb-30">
          Sign In
        </h3>
        <form>
          <div class="form-group">
            <input
              type="email"
              class="form-control py-25"
              id="email"
              placeholder="EMAIL ADDRESS"
            />
          </div>
          <div class="form-group">
            <input
              type="password"
              class="form-control py-25"
              id="password"
              placeholder="PASSWORD"
            />
          </div>
          <div class="form-group form-check">
            <input type="checkbox" class="form-check-input" id="staySignIn" />
            <label class="form-check-label" for="staySignIn"
              >Stay signed in</label
            >
          </div>
          <router-link
            to="/"
            type="submit"
            class="btn btn-black text-lighter btn-block py-15 mt-50 mb-15"
            >SIGN IN</router-link
          >
          <a href="#" class="text-black text-center d-block"
            >Forgot your password?</a
          >
        </form>
      </div>
      <div
        class="col-md-1 ml-lg-5 text-36 py-10 py-i6-20 py-md-0 text-center"
      >
        Or
      </div>
      <div class="col-lg-4 col-md-5 mx-15 mx-md-0">
        <router-link
          to="/creat_account01"
          class="btn btn-block btn-gray02 btn-lg text-32 py-15"
          >Create An Account</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SignIn',
  data () {
    return {}
  }
}
</script>
