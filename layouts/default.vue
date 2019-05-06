<template>
  <div class="app-container">
    <toolbar />
    <dot-nav />
    <nuxt />
  </div>
</template>

<script>
import Toolbar from '~/components/Toolbar.vue'
import DotNav from '~/components/DotNav.vue'

export default {
  components: {
    Toolbar,
    DotNav
  }
}
</script>

<style lang="scss">
</style>
