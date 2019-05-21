<template>
  <section class="section-container">
    <div class="articles-container">
      <div class="heading-container">
        <h3 class="articles-heading">
          Articles
        </h3>
      </div>
      <div class="articles-content">
        <article-card
          v-for="(article, i) in articles"
          :key="i"
          :img="article.img"
          :title="article.title"
          :to="article.to"
        />
      </div>
    </div>
  </section>
</template>

<script>
import ArticleCard from '../ArticleCard.vue'

export default {
  name: 'Articles',
  components: {
    ArticleCard
  },
  data() {
    return {
      articles: [
        {
          title: 'Blog',
          img: require('~/static/images/nuxtMDpost.png'),
          to: '/articles/nuxt_md_blog'
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
  flex-direction: row;
  justify-content: center;
}
</style>
