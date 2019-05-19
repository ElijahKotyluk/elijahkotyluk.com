<template>
  <div class="toolbar" :class="{ 'toolbar--hidden': !showToolbar }">
    <div class="nav">
      <nuxt-link to="/">
        <site-logo />
      </nuxt-link>

      <nav class="nav-item-container">
        <a id="hamburger" :class="{ 'active': isActive }" @click="toggleSidebar()"><span /></a>
        <ol class="nav-item-list">
          <li v-for="(item, i) in menu" :key="i" class="nav-items">
            <a :href="item.to">
              {{ item.title }}
            </a>
          </li>
        </ol>
      </nav>
    </div>
  </div>
</template>

<script>
import SiteLogo from '../icons/SiteLogo.vue'

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
  data() {
    return {
      showToolbar: true,
      lastScrollPos: 0,
      isActive: false
    }
  },
  mounted() {
    // Add on scroll event listener:
    window.addEventListener('scroll', this.onScroll)

    // Listen for showToolbar value change:
    this.$root.$on('showToolbar', (show) => {
      if (!show) {
        this.isActive = false
      }
    })
  },
  beforeDestroy() {
    // Remove scroll event listener before component is destroyed:
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

      // Determine whether to show or hide toolbar
      this.showToolbar = currentScrollPos < this.lastScrollPos

      // Emit showToolbar value:
      this.$root.$emit('showToolbar', this.showToolbar)

      // Set current scroll position as last scroll position
      this.lastScrollPos = currentScrollPos
    },
    toggleSidebar() {
      this.isActive = !this.isActive

      this.$root.$emit('toggleSidebar', this.isActive)
    }
  }
}
</script>

<style lang="scss">
.toolbar {
  height: 100px;
  width: 100%;
  display: flex;
  position: fixed;
  padding: 5px 10px 0px 10px;
  margin-top: 5px;
  align-items: center;
  -webkit-box-pack: justify;
  -webkit-box-align: center;
  background-color: #1f2022;
  box-shadow: 0 2px 4px -1px rgba(0,0,0,.2),
              0 4px 5px 0 rgba(0,0,0,.14),
              0 1px 10px 0 rgba(0,0,0,.12);
  z-index: 9999;

  @media(max-width: 600px) {
    height: 70px;
    padding: 0px 10px;
  }
}

.toolbar.toolbar--hidden {
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

.nav-item-container {
  width: 100%;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  justify-content: flex-end;

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
    font-size: 13px;
    counter-increment: item 1;
    margin: 0px 10px;

    .nav-link {
      padding: 12px 10px;
    }
  }
}

#hamburger {
  cursor: pointer;
  padding: 10px 35px 16px 0px;
  margin-right: 15px;

  @media(min-width: 600px) {
    display: none;
  }
}
#hamburger span, #hamburger span:before, #hamburger span:after {
  cursor: pointer;
  border-radius: 1px;
  height: 1.5px;
  width: 35px;
  background: rgba(25, 209, 255, .7);
  position: absolute;
  display: inline-block;
  content: '';
}
#hamburger span:before {
  top: -10px;
}
#hamburger span:after {
  bottom: -10px;
}
/*
#hamburger span, #hamburger span:before, #hamburger span:after {
  transition: all 200ms ease-in-out;
}
*/
#hamburger span, #hamburger span:before, #hamburger span:after {
-webkit-transition: all 300ms cubic-bezier(0.645, 0.045, 0.355, 1.000);
   -moz-transition: all 300ms cubic-bezier(0.645, 0.045, 0.355, 1.000);
     -o-transition: all 300ms cubic-bezier(0.645, 0.045, 0.355, 1.000);
        transition: all 300ms cubic-bezier(0.645, 0.045, 0.355, 1.000); /* easeInOutCubic */
}
#hamburger.active span {
  background-color: transparent;
}
#hamburger.active span:before, #hamburger.active span:after {
  top: 0;
}
#hamburger.active span:before {
  transform: rotate(45deg);
}
#hamburger.active span:after {
  transform: translateY(-10px) rotate(-45deg);
  top: 10px;
}
</style>
