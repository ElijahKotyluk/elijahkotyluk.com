<template>
  <div class="sidebar-container" :class="{ 'show-sidebar': hideSidebar}">
    <div class="sidebar-items">
      <ul class="menu-list">
        <li v-for="(item, i) in menu" :key="i" class="menu-item">
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
    menu: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      hideSidebar: true
    }
  },
  mounted() {
    this.$root.$on('toggleSidebar', (val) => {
      console.log('emitted value from to toggesidebar:', val)
      this.hideSidebar = !this.hideSidebar
    })

    this.$root.$on('showToolbar', (val) => {
      console.log('emitted value to hide toolbar:', val)
      if (val === false) {
        this.hideSidebar = true
      }
    })
  }
}
</script>

<style lang="scss">
.sidebar-container {
  background-color: rgba(227, 233, 245, 0.04);
  display: flex;
  justify-content: center;
  max-width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  pointer-events: auto;
  position: fixed;
  right: -15px;
  top: 65px;
  width: 40vw;
  will-change: transform;
  z-index: 3;
  -webkit-overflow-scrolling: touch;
  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2),
              0 4px 5px 0 rgba(0, 0, 0, 0.14),
              0 1px 10px 0 rgba(0, 0, 0, 0.12);
  font-family: "SF Mono", "Fira Code", "Fira Mono", "Roboto Mono", "Lucida Console", Monaco, monospace;

  .sidebar-items {
    width: 100%;
    font-size: 13px;
    color: #2392b1;

    &:hover {
      color: #000000;
    }
  }

  .menu-list {
    align-items: center;
    display: flex;
    flex-direction: column;
    width: 100%;

    .menu-item {
      padding: 10px;
    }
  }

  @media(min-width: 600px) {
    display: none;
  }
}

.show-sidebar {
  display: none;
  top: 50px;
  right: 20px;
  position: absolute;
}
</style>
