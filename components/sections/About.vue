<template>
  <section class="section-container">
    <div class="about-container">
      <div class="heading-container">
        <h3 id="about" class="about-heading">
          About Me
        </h3>
      </div>
      <div class="about-content-container">
        <div class="about-content">
          <p>
            Hello! I'm Elijah, a software engineer based in California with a serious passion for problem solving and programming. I develop performant applications that provide intuitive, dynamic user interfaces coupled with efficient and modern backend architecture.
          </p>
          <p>
            When I'm not building a prototype application for a client, I'm contributing to open source and working on writing my own libraries and frameworks.
          </p>
          <p>
            Here are some of technologies that I work with:
          </p>
          <ul class="about-skills-container">
            <li v-for="(skill, i) in skills" :key="i" class="about-skills">
              {{ skill }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'About',
  data() {
    return {
      skills: [
        'JavaScript', 'Vue/Nuxt', 'React', 'Node.js', 'Webpack', 'MongoDB', 'Python', 'Flask', 'NDB', 'Make GNU', 'HTML5', 'SCSS/SASS'
      ]
    }
  }
}
</script>

<style lang="scss">
.heading-container {
  display: flex;
  flex-direction: row;
  width: 100%;
}

.about-heading {
  position: relative;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  width: 100%;
  white-space: nowrap;
  font-size: 32px;
  margin: 10px 0px 40px;
}

.about-heading::after {
  content: "";
  display: block;
  height: 1px;
  width: 300px;
  background-color: rgb(45, 57, 82);
  position: relative;
  top: 5px;
  margin-left: 15px;
}

.about-content-container {
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  text-align: left;
}

.about-content {
  width: 60%;
  max-width: 1000px;

  @media (max-width:600px) {
    width: 100%;
  }
}

.about-skills-container {
  display: grid;
  grid-template-columns: minmax(140px, 200px) minmax(140px, 200px) minmax(140px, 200px);
  margin-top: 20px;

  @media (max-width:425px) {
    grid-template-columns: minmax(100px, 150px) minmax(100px, 150px) minmax(100px, 150px);
    margin-top: 20px;
  }

  .about-skills {
    position: relative;
    margin-bottom: 10px;
    padding-left: 20px;
    font-family: "SF Mono", "Fira Code", "Fira Mono", "Roboto Mono", "Lucida Console", Monaco, monospace;
    font-size: 13px;
    color: rgb(136, 146, 176);

    &::before {
      content: "▹";
      position: absolute;
      left: 0px;
      color: rgb(99, 190, 255);
      font-size: 14px;
      line-height: 12px;
    }

    @media (max-width:425px) {
      padding-left: 12px;

      &::before {
        line-height: 16px;
      }
    }
  }
}
</style>
