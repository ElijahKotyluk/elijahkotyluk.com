<template>
  <div class="container">
    <intro />
    <about />
    <projects />
  </div>
</template>

<script>
import Intro from '~/components/sections/Intro.vue'
import About from '~/components/sections/About.vue'
import Projects from '~/components/sections/Projects.vue'

export default {
  components: {
    Intro,
    About,
    Projects
  }
}
</script>

<style lang="scss">
.container {
  margin: 0 auto;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 60px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
