<template>
  <section class="section-container">
    <div class="heading-container">
      <h3 class="projects-heading">
        Things I've Built
      </h3>
    </div>
    <div class="projects-content-container">
      <project-card
        v-for="(project, i) in projects"
        :key="i"
        :title="project.title"
        :description="project.description"
        :technologies="project.technologies"
      />
    </div>
  </section>
</template>

<script>
import ProjectCard from '~/components/ProjectCard.vue'

export default {
  name: 'Projects',
  components: {
    ProjectCard
  },
  data() {
    return {
      projects: [
        {
          title: 'vue-moment-calendar',
          description: 'Basic event calendar created with Vue, Moment, Flask, NDB',
          technologies: ['Vue.js', 'Vuex', 'Moment.js', 'Flask', 'NDB']
        },
        {
          title: 'onyx',
          description: 'Basic Javascript unit testing library.',
          technologies: ['Javascript']
        },
        {
          title: 'vue-firebase-chat',
          description: 'Simple chat application built with firebase',
          technologies: ['Vue.js', 'Vuex', 'Firebase']
        },
        {
          title: 'vue-moment-calendar',
          description: 'Basic event calendar created with Vue, Moment, Flask, NDB',
          technologies: ['Vue.js', 'Vuex', 'Moment.js', 'Flask', 'NDB']
        },
        {
          title: 'onyx',
          description: 'Basic Javascript unit testing library.',
          technologies: ['Javascript']
        },
        {
          title: 'vue-firebase-chat',
          description: 'Simple chat application built with firebase',
          technologies: ['Vue.js', 'Vuex', 'Firebase']
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.section-container {
  max-width: 1000px;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  flex-direction: column;
  align-items: flex-start;
  margin: 0px auto;
  padding: 150px 0px;
}

.heading-container {
  position: relative;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  width: 100%;
  white-space: nowrap;
  font-size: 32px;
  margin: 10px 0px 40px;

  .projects-heading {
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
}

.projects-content-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>
