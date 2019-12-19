<template>
  <div class="article-container">
    <!-- eslint-disable-next-line vue/no-v-html -->
    <div class="article-content" v-html="content.default" />
  </div>
</template>

<script>
export default {
  async asyncData ({ params }) {
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
  color: #d2d2d2;
  line-height: 1.4;
  max-width: 850px;
  text-align: left;
  margin-top: 70px;

  section {
    max-width: 100%;
    display: flex;
    flex-direction: column;
    padding: 12px;

    ul {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      list-style-type: circle;
      margin-bottom: 15px;
      padding-left: 30px;

      li {
        margin: 5px 0;
        padding: 5px 0;

      }
    }

    @media(min-width: 600px) {
      margin-top: 50px;
      margin-bottom: 30px;
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
    color: #346d80;
    padding: 1px 5px;
  }

  h1 {
    text-align: center;
    margin: 20px auto;
    font-size: 26px;
    letter-spacing: 1px;

    @media(min-width: 600px) {
      font-size: 40px;
    }
  }

  h3, h4, h5 {
    margin: 15px 0;
    font-size: 22px;
    letter-spacing: 1px;
    text-decoration: underline;
  }

  p {
    font-size: 16px;
    margin-bottom: 20px;
    text-align: left;

    @media (max-width:600px) {
      font-size: 14px;
    }
  }

  pre {
    background-color: rgba(0, 0, 0, 1);
    border-radius: 5px;
    font-size: 12px;
    margin-bottom: 30px;
    padding: 10px 0;
    overflow: scroll;

    code.language-javascript {
      color: #ece5e5;
      padding: 0;

      span.hljs-comment {
        color: #7b7a79;
      }

      span.hljs-keyword {
        color: #5db4ad;
      }

      span.hljs-literal {
        color: #1da8ed;
      }

      span.hljs-string {
        color: #e0a737;
      }

      span.hljs-subst {
        color: #ebe20b;
      }

      span.hljs-built_in {
        color: #f36868;
      }

      span.hljs-function {
        color: #ca6920;
      }

      span.hljs-params {
        color: #86cc1f;
      }

      span.hljs-number {
        color: #ff5cc3;
      }
    }

    @media (max-width:425px) {
      font-size: 10px;
      max-width: 340px;
    }
  }
}
</style>
