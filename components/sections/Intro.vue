<template>
  <section class="section-container">
    <h1 class="pre-title">
      Hello, my name is
    </h1>
    <h2 class="title">
      Elijah Kotyluk.
    </h2>
    <h3 class="post-title">
      I'm a software engineer.
    </h3>
  </section>
</template>

<script>
export default {
  name: 'Intro'
}
</script>

<style lang="scss">
.section-container {
  margin: 0px auto;
  min-height: 100vh;
  max-width: 1000px;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}

.pre-title {
  font-size: 13px;
  font-family: "SF Mono", "Fira Code", "Fira Mono", "Roboto Mono", "Lucida Console", Monaco, monospace;
  font-weight: normal;
  margin: 0px 0px 0px 3px;
  color: #19d1ff;
}

.post-title {
  font-size: 27px;
}

.title {
  font-weight: 600;
  font-size: 40px;
  color: rgb(230, 230, 230);
}
</style>
