<template>
  <div class="app-container">
    <toolbar :menu="menu" />
    <sidebar :menu="menu" :hide-sidebar="hideSidebar" />
    <nuxt />
  </div>
</template>

<script>
import Toolbar from '~/components/toolbar/Toolbar.vue'
import Sidebar from '~/components/toolbar/Sidebar.vue'

export default {
  components: {
    Toolbar,
    Sidebar
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
      console.log('emitted value from toolbar component:', val)
      this.hideSidebar = !this.hideSidebar
    })
  }
}
</script>

<style lang="scss">
</style>
