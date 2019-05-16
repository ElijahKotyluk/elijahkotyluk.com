<template>
  <nav class="nav-item-container">
    <a id="hamburger" :class="{ 'active': !isActive }" href="#" @click="toggleSidebar()"><span></span></a>
    <ol class="nav-item-list">
      <li v-for="(item, i) in menu" :key="i" class="nav-items">
        <a :href="item.to">
          {{ item.title }}
        </a>
      </li>
    </ol>
    <sidebar :showSidebar="showSidebar" :menu="menu" />
  </nav>
</template>

<script>
import Sidebar from './Sidebar.vue'

export default {
  name: 'Navigation',
  components: {
    Sidebar
  },
  data() {
    return {
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
        },
        {
          title: 'Contact',
          to: '#contact'
        }
      ],
      showSidebar: false,
      isActive: true
    }
  },
  methods: {
    toggleSidebar() {
      console.log('clicked')
      this.isActive = !this.isActive
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
}

#hamburger {
  cursor: pointer;
  padding: 10px 35px 16px 0px;
  margin-right: 15px;

  @media(min-width: 600px) {
    display: none;
  }
}
#hamburger span, #hamburger span:before, #hamburger span:after {
  cursor: pointer;
  border-radius: 1px;
  height: 1.5px;
  width: 35px;
  background: rgba(25, 209, 255, .7);
  position: absolute;
  display: inline-block;
  content: '';
}
#hamburger span:before {
  top: -10px;
}
#hamburger span:after {
  bottom: -10px;
}
/*
#hamburger span, #hamburger span:before, #hamburger span:after {
  transition: all 200ms ease-in-out;
}
*/
#hamburger span, #hamburger span:before, #hamburger span:after {
-webkit-transition: all 300ms cubic-bezier(0.645, 0.045, 0.355, 1.000);
   -moz-transition: all 300ms cubic-bezier(0.645, 0.045, 0.355, 1.000);
     -o-transition: all 300ms cubic-bezier(0.645, 0.045, 0.355, 1.000);
        transition: all 300ms cubic-bezier(0.645, 0.045, 0.355, 1.000); /* easeInOutCubic */
}
#hamburger.active span {
  background-color: transparent;
}
#hamburger.active span:before, #hamburger.active span:after {
  top: 0;
}
#hamburger.active span:before {
  transform: rotate(45deg);
}
#hamburger.active span:after {
  transform: translateY(-10px) rotate(-45deg);
  top: 10px;
}
</style>
