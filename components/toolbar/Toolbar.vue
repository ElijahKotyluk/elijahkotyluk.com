<template>
  <div class="navbar" :class="{ 'navbar--hidden': !showNavbar }">
    <div class="nav">
      <nuxt-link to="/">
        <site-logo />
      </nuxt-link>
      <navigation />
    </div>
  </div>
</template>

<script>
import SiteLogo from '../icons/SiteLogo.vue'
import Navigation from './Navigation.vue'

export default {
  name: 'Toolbar',
  components: {
    SiteLogo,
    Navigation
  },
  data() {
    return {
      showNavbar: true,
      lastScrollPos: 0
    }
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    onScroll() {
      // Get current scroll position
      const currentScrollPos = window.pageYOffset || document.documentElement.scrollTop

      // If less than 0, stop
      if (currentScrollPos < 0) {
        return
      }

      // Determine whether to show or hide navbar
      this.showNavbar = currentScrollPos < this.lastScrollPos

      // Set current scroll position as last scroll position
      this.lastScrollPos = currentScrollPos
    }
  }
}
</script>

<style lang="scss">
.navbar {
  height: 100px;
  width: 100%;
  padding: 0px 15px;
  display: flex;
  position: fixed;
  align-items: center;
  -webkit-box-pack: justify;
  -webkit-box-align: center;
}

.navbar.navbar--hidden {
  box-shadow: none;
  transform: translate3d(0, -100%, 0);
}

.nav {
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  position: relative;
  width: 100%;
  z-index: 12;
}
</style>
