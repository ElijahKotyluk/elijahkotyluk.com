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
        :aria-label="project.ariaLabel"
        :description="project.description"
        :external-link="project.externalLink"
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
          ariaLabel: 'Vue Flask Calendar',
          description: 'Basic event calendar created with Vue, Moment, Flask, NDB',
          externalLink: 'https://github.com/ElijahKotyluk/vue-flask-calendar',
          technologies: ['Vue.js', 'Vuex', 'Moment.js', 'Flask', 'NDB', 'SCSS']
        },
        {
          title: 'nuxt-keep',
          ariaLabel: 'Nuxt Keep',
          description: 'Google keep clone with Nuxt',
          externalLink: 'https://github.com/ElijahKotyluk/nuxt-keep',
          technologies: ['Nuxt', 'Vuex', 'Vuetify']
        },
        {
          title: 'onyx',
          ariaLabel: 'Onyx',
          description: 'Basic Javascript unit testing library.',
          externalLink: 'https://github.com/ElijahKotyluk/onyx',
          technologies: ['Javascript']
        },
        {
          title: 'vue-weather-app',
          ariaLabel: 'Vue Weather App',
          description: 'Weather application that requests the user\'s geolocation and displays the local weather.',
          externalLink: 'https://github.com/ElijahKotyluk/vue-weather-app',
          technologies: ['Vue.js', 'Vuex', 'Firebase', 'Materialize.css']
        },
        {
          title: 'vue-firebase-chat',
          ariaLabel: 'Vue Firebase Chat',
          description: 'Basic realtime chat application.',
          externalLink: 'https://github.com/ElijahKotyluk/vue-firebase-chat',
          technologies: ['Vue.js', 'Firebase', 'Materialize.css']
        },
        {
          title: 'vue-gcloud-scaffold',
          ariaLabel: 'Vue Gcloud Scaffold',
          description: 'Vue.js scaffold with webpack, vuex, vue-router for easy static deployment to Google App Engine.',
          externalLink: 'https://github.com/ElijahKotyluk/vue-gcloud-scaffold',
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
  justify-content: center;
}
</style>
