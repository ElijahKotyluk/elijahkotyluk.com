<template>
  <nav class="nav-item-container">
    <responsive-menu />
    <ol class="nav-item-list">
      <li v-for="(item, i) in menu" :key="i" class="nav-items">
        <a :href="item.to">
          {{ item.name }}
        </a>
      </li>
    </ol>
  </nav>
</template>

<script>
import ResponsiveMenu from './ResponsiveMenu.vue'

export default {
  name: 'Navigation',
  components: {
    ResponsiveMenu
  },
  data() {
    return {
      menu: [
        {
          name: 'About',
          to: '#about'
        },
        {
          name: 'Projects',
          to: '#projects'
        },
        {
          name: 'Articles',
          to: '#articles'
        },
        {
          name: 'Contact',
          to: '#contact'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.nav-item-container {
  display: flex;
  -webkit-box-align: center;
  align-items: center;

  ol {
    display: flex;
    padding: 0px;
    margin: 0px;
    list-style: none;

    @media (max-width: 600px) {
      display: none;
    }
  }

  .nav-items {
    position: relative;
    font-size: 13px;
    counter-increment: item 1;
    margin: 0px 10px;

    .nav-link {
      padding: 12px 10px;
    }
  }

  .responsive {
    display: flex;
    height: 100%;
    width: 30px;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (min-width:600px) {
      display: none;
    }

    .menu-button,
    .menu-button::before,
    .menu-button::after {
      display: block;
      background-color: #fff;
      position: absolute;
      height: 4px;
      width: 30px;
      transition: transform 400ms cubic-bezier(0.23, 1, 0.32, 1);
      border-radius: 2px;
    }

    .menu-button::before {
      content: '';
      margin-top: -8px;
    }

    .menu-button::after {
      content: '';
      margin-top: 8px;
    }
  }
}
</style>
