<template>
  <div class="container">
    <h1 class="title">
      {{ title }}
    </h1>
    <h2 class="subtitle">
      {{ subtitle }}
    </h2>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  components: {},
  data: () => ({
    subtitle: 'Software Engineer & Open Source Enthusiast',
    title: 'Elijah Kotyluk'
  }),
  mounted () {
    this.getPublicEvents({ username: 'ElijahKotyluk' })
  },
  methods: {
    ...mapActions({
      getPublicEvents: 'getPublicEvents'
    })
  }
}
</script>

<style lang="scss">
.container {
  height: 100%;
  margin: 0 auto;
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: center;
}

.title {
  font-size: 2.5rem;
  line-height: 1.125;
}

.subtitle {
  font-weight: 400;
  font-size: 1.35rem;
  color: #526488;
  word-spacing: .5px;
  padding-bottom: 15px;
}
</style>
