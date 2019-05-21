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
  align-items: center;
  text-align: center;

  .article-content {
    max-width: 850px;
    text-align: left;

    h1 {
      text-align: center;
      margin: 20px auto;
      font-size: 32px;
      letter-spacing: 1px;
    }

    p {
      text-align: left;
    }

    pre {
      background-color: rgba(0, 0, 0, 1);
      border-radius: 5px;

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
}
</style>
