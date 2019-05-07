<template>
  <div class="app-container">
    <toolbar />
    <dot-nav />
    <social-icons />
    <nuxt />
  </div>
</template>

<script>
import Toolbar from '~/components/Toolbar.vue'
import DotNav from '~/components/DotNav.vue'
import SocialIcons from '~/components/icons/SocialIcons.vue'

export default {
  components: {
    Toolbar,
    DotNav,
    SocialIcons
  }
}
</script>

<style lang="scss">
</style>
