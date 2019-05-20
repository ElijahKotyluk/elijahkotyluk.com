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
          title: 'About',
          to: '#about'
        },
        {
          title: 'Projects',
          to: '#projects'
        },
        {
          title: 'Articles',
          to: '#articles'
        }
      ]
    }
  },
  mounted() {
    this.$root.$on('toggleSidebar', (val) => {
      this.hideSidebar = !this.hideSidebar
    })
  }
}
</script>
