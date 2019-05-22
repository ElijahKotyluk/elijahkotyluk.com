<template>
  <section class="section-container">
    <div class="articles-container">
      <div class="heading-container">
        <h3 class="articles-heading">
          Articles
        </h3>
      </div>
      <div class="articles-content">
        Currently I am working on writing some articles, please be patient as I refine the writing and get these articles together. :)
        <ol>
          <li
            v-for="(article, i) in articles"
            :key="i"
            class="article-link-list-item"
          >
            <nuxt-link :to="article.to" class="article-link">
              {{ article.title }}
            </nuxt-link>
          </li>
        </ol>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Articles',
  data() {
    return {
      articles: [
        {
          title: 'Create a blog with nuxt + markdown',
          img: require('~/static/images/nuxtMDpost.png'),
          to: '/articles/nuxt_md_blog'
        },
        {
          title: 'What is Nuxt?',
          to: '/articles/what_is_nuxt'
        },
        {
          title: 'What is Vuex?',
          to: '/articles/what_is_nuxt'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.articles-heading {
  position: relative;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  width: 100%;
  white-space: nowrap;
  font-size: 32px;
  margin: 10px 0px;

  &::after {
    content: "";
    display: block;
    height: 1px;
    width: 300px;
    background-color: rgb(45, 57, 82);
    position: relative;
    top: 0px;
    margin-left: 20px;
  }
}

.articles-content {
  display: flex;
  flex-direction: column;
  font-size: 16px;
  justify-content: center;

  ol {
    color:  rgb(37, 137, 166);
    margin: 15px 0;
  }

  .article-link-list-item {
    margin: 5px;
    padding: 5px;

    .article-link {
      color: rgb(173, 187, 226);
      font-size: 14px;
      text-decoration: underline;

      &:hover {
        color: rgb(101, 109, 131);
      }
    }
  }
}
</style>
