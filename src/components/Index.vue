<template>
  <div>
    <Navbar />
    <main role="main">
      <router-view></router-view>
    </main>
    <Footer />
  </div>
</template>

<script>
import Navbar from './Navbar'
import Footer from './Footer'

export default {
  name: 'Layout',
  components: {
    Navbar,
    Footer
  },
  data () {
    return {}
  }
}
</script>
