<template>
  <div class="app-container">
    <toolbar :menu="menu" />
    <sidebar :menu="menu" :hide-sidebar="hideSidebar" />
    <social-icons />
    <nuxt />
  </div>
</template>

<script>
import Toolbar from '~/components/Toolbar.vue'
import Sidebar from '~/components/Sidebar.vue'
import SocialIcons from '~/components/icons/SocialIcons.vue'

export default {
  components: {
    Toolbar,
    Sidebar,
    SocialIcons
  },
  data () {
    return {
      hideSidebar: true,
      menu: [
        {
          title: 'About',
          to: '#about'
        },
        {
          title: 'Articles',
          to: '#articles'
        },
        {
          title: 'Projects',
          to: '#projects'
        }
      ]
    }
  },
  watch: {
    // If the route is not index then replace this.menu's data:
    $route () {
      if (this.$route.name === 'article-slug') {
        this.menu = [
          {
            title: 'Home',
            to: '/'
          }
        ]
      }
    }
  },
  mounted () {
    if (this.$route.name !== 'index') {
      this.menu = [
        {
          title: 'Home',
          to: '/'
        }
      ]
    }
    // Listen to show/hide sidebar:
    this.$root.$on('toggleSidebar', (val) => {
      this.hideSidebar = !this.hideSidebar
    })
  }
}
</script>
