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
  data() {
    return {
      hideSidebar: true,
      menu: [
        {
          title: 'Home',
          to: '/'
        },
        {
          title: 'About',
          to: '#about'
        },
        {
          title: 'Projects',
          to: '#projects'
        },
        {
          title: 'Blog',
          to: '/blog'
        }
      ]
    }
  },
  mounted() {
    // Display different routes for blog pages
    if (this.$route.name !== 'index') {
      this.menu = [
        {
          title: 'Home',
          to: '/'
        },
        {
          title: 'Blog',
          to: '/blog'
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
