<template>
  <div>
    <Navbar />
    <div>
      <section class="section">
        <!-- <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> -->
      </section>
    </div>
  </div>
  <router-view />
</template>

<script>
import Navbar from '@/components/layout/Navbar'
import axios from 'axios';
export default {
  name: 'App',
  components: {
    Navbar
  },
  beforeCreate() {
    this.$store.commit('initializeStore')

    if (this.$store.state.token) {
      axios.defaults.headers.common['Authorization'] = "Token " + this.$store.state.token
    } else {
      axios.defaults.headers.common['Authorization'] = ""
    }
  },
}
</script>

<style lang="scss">
@import '../node_modules/bulma';
</style>
