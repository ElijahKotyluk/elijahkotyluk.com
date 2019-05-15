<template>
  <section class="section-container">
    <div id="articles" class="heading-container">
      <h3 class="articles-heading">
        Articles
      </h3>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Articles'
}
</script>

<style lang="scss">
.section-container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

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
</style>
