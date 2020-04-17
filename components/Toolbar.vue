<template>
  <div :class="{ 'toolbar--hidden': !showToolbar }" class="toolbar">
    <div class="nav">
      <a href="/">
        <site-logo />
      </a>

      <nav class="nav-item-container">
        <a :class="{ 'active': isActive }" @click="toggleSidebar()">
          <span />
        </a>
        <ol class="nav-item-list">
          <li v-for="(item, i) in menu" :key="i" class="nav-items">
            <a :href="item.to" class="nav-link">
              {{ item.title }}
            </a>
          </li>
        </ol>
      </nav>
    </div>
  </div>
</template>

<script>
import SiteLogo from './icons/SiteLogo.vue'

export default {
  name: 'Toolbar',
  components: {
    SiteLogo
  },
  props: {
    menu: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      showToolbar: true,
      lastScrollPos: 0,
      isActive: false
    }
  },
  mounted () {
    // Add on scroll event listener:
    window.addEventListener('scroll', this.onScroll)

    // Listen for showToolbar value change:
    this.$root.$on('showToolbar', (show) => {
      if (!show) {
        this.isActive = false
      }
    })
  },
  beforeDestroy () {
    // Remove scroll event listener before component is destroyed:
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    onScroll () {
      // Get current scroll position
      const currentScrollPos = window.pageYOffset || document.documentElement.scrollTop

      // If less than 0, stop
      if (currentScrollPos < 0) {
        return
      }

      // Determine whether to show or hide toolbar
      this.showToolbar = currentScrollPos < this.lastScrollPos

      // Emit showToolbar value:
      this.$root.$emit('showToolbar', this.showToolbar)

      // Set current scroll position as last scroll position
      this.lastScrollPos = currentScrollPos
    },
    toggleSidebar () {
      this.isActive = !this.isActive
      this.$root.$emit('toggleSidebar', this.isActive)
    }
  }
}
</script>

<style lang="scss">
.toolbar {
  height: 65px;
  width: 100%;
  display: flex;
  position: fixed;
  padding: 5px 10px 0px 10px;
  align-items: center;
  -webkit-box-pack: justify;
  -webkit-box-align: center;
  background-color: rgb(26, 24, 24);
  box-shadow: 0 2px 4px -1px rgba(0,0,0,.2),
              0 4px 5px 0 rgba(0,0,0,.14),
              0 1px 10px 0 rgba(0,0,0,.12);
  z-index: 9999;
  transition: all 1s;

  @media(max-width: 600px) {
    height: 75px;
    padding: 5px 10px 0px 10px;
  }
}

.toolbar.toolbar--hidden {
  box-shadow: none;
  transform: translate3d(0, -100%, 0);
}

.nav {
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-around;
  -webkit-box-align: center;
  align-items: center;
  position: relative;
  width: 100%;
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

    @media (max-width: 600px) {
      display: none;
    }
  }

  .nav-items {
    position: relative;
    font-size: 16px;
    margin: 0px 10px;

    .nav-link {
      padding: 12px 10px;

      &:hover {
        color: rgba(53, 109, 128, 1);
      }
    }

    a:before {
      content: "";
      position: absolute;
      width: 100%;
      height: 3px;
      bottom: 0;
      left: 0;
      background: #9CF5A6;
      visibility: hidden;
      border-radius: 5px;
      transform: scaleX(0);
      transition: .25s linear;
    }
    a:hover:before,
    a:focus:before {
      visibility: visible;
      transform: scaleX(1);
    }
    a:after {
      content: "";
      position: absolute;
      width: 100%;
      height: 7px;
      border: 1px solid #000;
      bottom: -2px;
      left: 0;
      background: rgba(0, 0, 0, 0);
      border-radius: 5px;
      opacity: 0;
      transform: scalex(0);
      transition: .5s;
    }

    a:after {
      opacity: .05;
      transform: scalex(1);
    }

    a:before {
      background: rgba(0,0,0,0);
      box-shadow: 0 0 10px 2px rgba(53, 109, 128, 1);
    }
  }
}
</style>
