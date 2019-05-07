<template>
  <div class="container">
    <section class="section-container">
      <div class="article-container">
        <!-- eslint-disable-next-line vue/no-v-html -->
        <div class="article-content" v-html="content.default" />
      </div>
    </section>
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
.container {
  margin: 0 auto;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.article-container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  .article-content {
    max-width: 850px;
    text-align: left;
    p {
      text-align: left;
    }

    pre {
      background-color: rgba(0, 0, 0, 1);
    }
  }
}
</style>
