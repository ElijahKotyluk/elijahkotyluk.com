<template>
  <section class="section-container project-section-container">
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
  data () {
    return {
      projects: [
        {
          title: 'Vuetify',
          ariaLabel: 'Vuetify',
          description: 'A material component framework for Vue.js applications.  It aims to provide all the tools necessary to create beautiful content rich applications.',
          externalLink: 'https://github.com/VuetifyJS/Vuetify',
          technologies: ['Vue.js', 'TypeScript']
        },
        {
          title: 'TS-Lexer',
          ariaLabel: 'TS Lexer',
          description: 'A simple Lexer written in TypeScript',
          externalLink: 'https://github.com/ElijahKotyluk/TS-Lexer',
          npm: true,
          technologies: ['TypeScript']
        },
        {
          title: 'Onyx',
          ariaLabel: 'Onyx',
          description: 'An open source unit testing library in early stages of development. Onyx will provide you with all necessary tools to test your Javascript.',
          externalLink: 'https://github.com/onyxjs/onyx',
          technologies: ['TypeScript', 'Node']
        },
        {
          title: 'Bēkn',
          ariaLabel: 'Bēkn',
          description: 'Bēkn creates a way for users to browse community based opportunities nearby, and aims to empower individuals into action making it easier for them to join causes addressing issues as a collective.',
          externalLink: 'https://www.bekn.org',
          technologies: ['Vue.js', 'Vuetify', 'TypeScript', 'Firebase', 'Python', 'Flask']
        },
        {
          title: 'webpack-scaffold-ek',
          ariaLabel: 'Webpack Scaffold EK',
          description: 'An interactive scaffold built with Webpack and Yeoman, allows you to spin up a project with everything already configured.',
          externalLink: 'https://github.com/ElijahKotyluk/webpack-scaffold-ek',
          npm: true,
          technologies: ['Webpack', 'Yeoman']
        },
        {
          title: 'nuxt-keep',
          ariaLabel: 'Nuxt Keep',
          description: 'Google keep clone with Nuxt',
          externalLink: 'https://github.com/ElijahKotyluk/nuxt-keep',
          technologies: ['Nuxt', 'Vuex', 'Vuetify']
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

.project-section-container {
  max-width: 1200px !important;
}

.projects-content-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
