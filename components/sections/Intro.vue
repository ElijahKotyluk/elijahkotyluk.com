<template>
  <section class="section-container">
    <div class="intro-container">
      <h1 class="pre-title">
        Hello, my name is
      </h1>
      <h2 class="title">
        Elijah Kotyluk.
      </h2>
      <h3 class="sub-title">
        I'm a software engineer.
      </h3>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Intro'
}
</script>

<style lang="scss">
.pre-title {
  font-size: 13px;
  font-family: "SF Mono", "Fira Code", "Fira Mono", "Roboto Mono", "Lucida Console", Monaco, monospace;
  font-weight: normal;
  margin: 0px 0px 0px 3px;
  color: #19d1ff;

  @media (min-width: 48em) {
    font-size: 13px;
  }

  @media (min-width: 62.5em) {
    font-size: 14px;
  }
}

.intro-container {
  margin: 100px auto;

  @media(max-width:30em) {
    margin: 0 auto;
  }
}

.sub-title {
  font-size: 27px;

  @media(min-width:30em) {
    font-size: 37px;
  }

  @media(min-width:48em) {
    font-size: 47px;
  }

  @media(min-width:62.5em) {
    font-size: 57px;
  }
}

.title {
  font-weight: 600;
  font-size: 40px;
  color: rgb(230, 230, 230);

  @media(min-width:30em) {
    font-size: 50px;
  }

  @media(min-width:48em) {
    font-size: 60px;
  }

  @media(min-width:62.5em) {
    font-size: 70px;
  }
}
</style>
