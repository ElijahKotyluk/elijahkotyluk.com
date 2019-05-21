<template>
  <div class="article-card-container">
    <div class="article-card-header">
      <p>
        {{ title }}
      </p>
      <nuxt-link :to="to" />
    </div>
    <div class="article-card-content">
      <img :src="img" class="article-image">
    </div>
  </div>
</template>

<script>
export default {
  name: 'ArticleCard',
  props: {
    title: {
      type: String,
      default: ''
    },
    img: {
      type: String,
      default: ''
    },
    to: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss">
.article-card-container {
  background-color: rgba(0, 0, 0, 1);
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  max-height: 500px;
  max-width: 400px;

  img {
    display: block;
    max-width:230px;
    max-height:95px;
    width: auto;
    height: auto;
  }
}
</style>
