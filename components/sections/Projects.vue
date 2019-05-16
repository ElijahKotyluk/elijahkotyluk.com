<template>
  <section class="section-container">
    <div class="heading-container">
      <h3 id="projects" class="projects-heading">
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
          title: 'vue-flask-calendar',
          description: 'Basic event calendar created with Vue, Moment, Flask, NDB',
          technologies: ['Vue.js', 'Vuex', 'Moment.js', 'Flask', 'NDB', 'SCSS']
        },
        {
          title: 'onyx',
          description: 'Basic Javascript unit testing library.',
          technologies: ['Javascript']
        },
        {
          title: 'vue-weather-app',
          description: 'Weather application that requests the user\'s geolocation and displays the local weather.',
          technologies: ['Vue.js', 'Vuex', 'Firebase', 'Materialize.css']
        },
        {
          title: 'vue-firebase-chat',
          description: 'Basic realtime chat application.',
          technologies: ['Vue.js', 'Firebase', 'Materialize.css']
        },
        {
          title: 'vue-calendar',
          description: 'Static event calendar.',
          technologies: ['Vue.js', 'Vuex', 'Moment.js', 'SCSS']
        },
        {
          title: 'vue-gcloud-scaffold',
          description: 'Vue.js scaffold with webpack, vuex, vue-router for easy static deployment to Google App Engine.',
          technologies: ['Vue', 'Webpack']
        }
      ]
    }
  }
}
</script>

<style lang="scss">
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
    margin: 10px 0px 40px;

    &::after {
      content: "";
      display: block;
      height: 1px;
      width: 300px;
      background-color: rgb(45, 57, 82);
      position: relative;
      top: 5px;
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
