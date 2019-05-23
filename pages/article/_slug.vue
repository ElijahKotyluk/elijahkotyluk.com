<template>
  <div class="article-container">
    <!-- eslint-disable-next-line vue/no-v-html -->
    <div class="article-content" v-html="content.default" />
  </div>
</template>

<script>
export default {
  async asyncData({ params }) {
    const fileContent = await import(`~/static/article/${params.slug}.md`)
    return {
      content: fileContent
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

    img[src*="#nuxtcli"] {
      height: 125px;
      width: 330px;
    }

    img[src*="#rootdir"] {
      border: 2px solid rgb(51, 107, 125);
      height: 190px;
      margin: 10px 0px -15px 37px;
      width: 260px;
    }

    img[src*="#slug"] {
      border: 2px solid #336b7d;
      height: 250px;
      width: 335px;
    }
  }

  a {
    color: rgba(83, 175, 207, 1);
    text-decoration: underline;

    &:hover {
      color: rgb(52, 109, 128);
    }
  }

  code {
    background-color: rgba(0, 0, 0, 1);
    color: rgba(113, 107, 107, 1);
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
