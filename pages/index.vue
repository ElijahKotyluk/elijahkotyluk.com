<template>
  <div class="container">
    <intro />
    <span id="about" />
    <about />
<!--
    <span id="articles" />
    <articles />
    <span id="projects" />
    <projects />
-->
  </div>
</template>

<script>
import Intro from '~/components/sections/Intro.vue'
import About from '~/components/sections/About.vue'

export default {
  components: {
    Intro,
    About
  }
}
</script>

<style lang="scss">
.container {
  margin: 0 auto;
  max-width: 1400px;
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
