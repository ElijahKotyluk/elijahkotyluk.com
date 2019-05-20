<template>
  <div class="container">
    <intro />
    <span id="about" />
    <about />
    <span id="projects" />
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
  max-width: 1000px;
  min-height: 100%;
  padding: 0px 25px;
  display: block;
}

.maybe-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
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
