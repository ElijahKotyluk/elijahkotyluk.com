<template>
  <div class="header">
    <div class="nav">
      <nuxt-link to="/">
        <site-logo />
      </nuxt-link>

      <div class="nav-items">
        <ol>
          <li v-for="(item, i) in menu" :key="i">
            {{ item.name }}
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
          name: 'About'
        },
        {
          name: 'Projects'
        },
        {
          name: 'Articles'
        },
        {
          name: 'Skills'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  height: 100px;
  width: 100%;
  align-items: center;
  padding: 0px 50px;
  display: flex;
  position: fixed;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
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

.nav-items {
  display: flex;
  -webkit-box-align: center;
  align-items: center;

  ol {
    padding: 0px;
    margin: 0px;
    list-style: none;
  }
}
</style>
