<template>
  <div class="commit-container">
    <div v-html="msg"></div>
    <p>
      Pushed {{}} commits to
      <a href="refUrl">{{}}</a>
      in
      <a href="repoUrl">{{}}</a>
    </p>
  </div>
</template>

<script>
export default {
  name: 'Event',
  props: {
    event: {
      default: () => {},
      type: Object
    }
  },
  data: () => ({
    msg: ''
  }),
  computed: {
    eventTime () {
      return this.commit.created_at
    }
  },
  mounted () {
    console.log('event: ', this.event)
    this.defineEvent(this.event)
  },
  methods: {
    normalizeUrl (url) {
      return url.replace('api', 'www').replace('/repos', '')
    },
    defineEvent (event) {
      let msg
      const baseUrl = 'https://github.com/'
      const repoUrl = '<a href="' + baseUrl + event.repo + '">' + event.repo + '</a>' // baseUrl + event.repo.name
      switch (event.type) {
        case 'PushEvent':
          const branchRef = event.payload.ref.slice(11)
          let commit = 'commit'

          if (event.payload.size > 1) {
            commit = 'commits'
          }

          this.msg =
            'Pushed ' +
            event.payload.size +
            commit +
            ' to ' +
            '<a href="' +
            baseUrl +
            event.repo +
            '/tree/' +
            branchRef +
            '">' +
            branchRef +
            '</a>' +
            ' in ' +
            repoUrl
          debugger
          break
      }

      return msg
    }
  }
}
</script>

<style lang="scss">
.commit-container {
  border: 1px solid #ffffff;
  height: 3em;
  text-align: center;

  .commit-title {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    width: 15em;
  }
}
</style>
