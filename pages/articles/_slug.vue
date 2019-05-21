<template>
  <div class="article-container">
    <!-- eslint-disable-next-line vue/no-v-html -->
    <div class="article-content" v-html="content.default" />
  </div>
</template>

<script>
export default {
  async asyncData({ params }) {
    const fileContent = await import(`~/static/articles/${params.slug}.md`)
    return {
      content: fileContent
    }
  }
}
</script>

<style lang="scss">
.article-container {
  margin: 0 auto;
  min-height: 100vh;
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
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

  h1 {
    text-align: center;
    margin: 20px auto;
    font-size: 26px;
    letter-spacing: 1px;
  }

  h3 {
    margin: 15px 0;
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
    margin: 25px 0;
    padding: 25px 0;

    code.language-javascript {
      span.hljs-keyword {
        color: rgba(136, 93, 180, 1);
      }
    }

    @media (max-width:425px) {
      font-size: 10px;
    }
  }
}
</style>
