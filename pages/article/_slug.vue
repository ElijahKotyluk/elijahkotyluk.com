<template>
  <div class="article-container">
    <!-- eslint-disable-next-line vue/no-v-html -->
    <div class="article-content" v-html="content.default" />
  </div>
</template>

<script>
export default {
  async asyncData({ params }) {
    const article = await import(`~/static/articles/${params.slug}.md`)
    return {
      content: article
    }
  }
}
</script>

<style lang="scss">
.article-container {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  width: 100vw;
  min-height: 100vh;
}

.article-content {
  max-width: 850px;
  text-align: left;
  margin-top: 70px;

  section {
    max-width: 100%;
    display: flex;
    flex-direction: column;
    padding: 12px;
  }

  a {
    color: rgba(83, 175, 207, 1);
    text-decoration: underline;

    &:hover {
      color: rgb(52, 109, 128);
    }
  }

  h1 {
    text-align: center;
    margin: 20px auto;
    font-size: 26px;
    letter-spacing: 1px;
  }

  h3, h4, h5 {
    margin: 5px 0;
    font-size: 20px;
    letter-spacing: 1px;
  }

  p {
    font-size: 14px;
    text-align: left;
  }

  pre {
    background-color: rgba(0, 0, 0, 1);
    border-radius: 5px;
    font-size: 10px;
    max-width: 340px;
    margin: 25px 0;
    padding: 25px 0;
    overflow: scroll;
  }
}
</style>
