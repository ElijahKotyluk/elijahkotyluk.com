<template>
  <div class="sidebar-container" :class="{ 'show-sidebar': hideSidebar}">
    <div class="sidebar-title">
      <h1>Menu</h1>
    </div>
    <div class="menu-items">
      <ul>
        <li v-for="(item, i) in menu" :key="i">
          <a href="to">
            {{ item.title }}
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  props: {
    hideSidebar: {
      type: Boolean,
      default: true
    },
    menu: {
      type: Array,
      default: () => []
    }
  },
  mounted() {
    console.log('parent of sidebar:', this.$parent)
  }
}
</script>

<style lang="scss">
.sidebar-container {
  top: 50px;
  right: 20px;
  position: absolute;
}

.show-sidebar {
  display: none;
  top: 50px;
  right: 20px;
  position: absolute;
}
</style>
