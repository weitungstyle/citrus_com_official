<template>
  <footer class="footer bg-black text-white py-35 px-lg-80 px-md-0 px-30">
    <div class="container">
      <div class="row mb-md-25 mb-50">
        <div class="col-md-5">
          <span>CONTACT US</span>
          <ul class="text-gray03 text-14 pt-lg-20 pt-15">
            <li class="pb-lg-15 pb-10">
              <i class="fas fa-phone pr-lg-15 pr-10"></i>
              <span>+8862-2345-7851</span>
            </li>
            <li>
              <i class="fas fa-envelope pr-lg-15 pr-10"></i>
              <a href="#" class="text-gray03">survice@citruschen.com</a>
            </li>
          </ul>
        </div>
        <div class="col-md-3 pt-15 pt-md-0">
          <span>FIND US ON</span>
          <ul class="text-14 pt-lg-20 pt-15">
            <li class="pb-lg-15 pb-10">
              <a href="#" class="text-gray03"><i class="fab fa-instagram text-gray03 pr-lg-15 pr-10"></i>Instagram</a>
            </li>
            <li class="pb-lg-15 pb-10">
              <a href="https://www.facebook.com/%E8%8C%B6Th%C3%A9-163871500450235" target="_blank" class="text-gray03">
              <i class="fab fa-facebook-square text-gray03 pr-lg-15 pr-10"></i>
              Facebook
              </a>
            </li>
            <li>
              <a href="#" class="text-gray03"><i class="fab fa-twitter-square text-gray03 pr-lg-15 pr-10"></i>Twitter</a>
            </li>
          </ul>
        </div>
        <div class="col-md-4 pt-15 pt-md-0">
          <span>SIGN UP FOR CITRUS UPDATES</span>
          <div class="input-group pt-lg-20 pt-15">
            <input
              type="email"
              class="form-control border-0 bg-gray03 text-black"
              id="signEmail"
              placeholder="Email Address"
            />
            <div class="input-group-prepend bg-gray03">
              <a class="btn">
                <i class="fas fa-angle-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="row flex-row-reverse justify-content-between align-items-end">
        <img class="footer-img col-lg-4 col-md-5" src="https://upload.cc/i1/2020/09/19/p9iBNb.png" alt="logo of citrus shop">
        <div class="copyright col-lg-8 col-md-7 text-gray05 text-14 pt-md-0 pt-20">© 2020 Citrus  Chen Accessory - All Rights Reserved</div>
      </div>
    </div>

  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {}
  }
}
</script>
