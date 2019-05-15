<template>
  <div class="responsive">
    <div class="menu-button" @click="toggleMenu()">
    </div>
  </div>
</template>

<script>
export default {
  name: 'ResponsiveMenu',
  methods: {
    toggleMenu() {
      console.log('clicked!')
    }
  }
}
</script>
