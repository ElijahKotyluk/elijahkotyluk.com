<template>
  <div class="navbar" :class="{ 'navbar--hidden': !showNavbar }">
    <div class="nav">
      <nuxt-link to="/">
        <site-logo />
      </nuxt-link>

      <div class="nav-item-container">
        <ol class="nav-item-list">
          <li v-for="(item, i) in menu" :key="i" class="nav-items">
            <a>
              {{ item.name }}
            </a>
          </li>
        </ol>
      </div>
    </div>
  </div>
</template>

<script>
import SiteLogo from '~/components/icons/SiteLogo.vue'

export default {
  name: 'Toolbar',
  components: {
    SiteLogo
  },
  data() {
    return {
      menu: [
        {
          name: 'About',
          to: '#about'
        },
        {
          name: 'Projects',
          to: '#projects'
        },
        {
          name: 'Articles',
          to: '#articles'
        },
        {
          name: 'Skills'
        }
      ],
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

<style lang="scss" scoped>
.navbar {
  height: 100px;
  width: 100%;
  align-items: center;
  padding: 0px 50px;
  display: flex;
  position: fixed;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  transform: translate3d(0, 0, 0);
  transition: 0.45s all ease-out;
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
  counter-reset: item 0;
  z-index: 12;
}

.nav-item-container {
  display: flex;
  -webkit-box-align: center;
  align-items: center;

  ol {
    display: flex;
    padding: 0px;
    margin: 0px;
    list-style: none;
  }

  .nav-items {
    position: relative;
    font-size: 13px;
    counter-increment: item 1;
    margin: 0px 10px;

    .nav-link {
      padding: 12px 10px;
    }
  }
}
</style>
