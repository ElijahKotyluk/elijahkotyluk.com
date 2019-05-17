<template>
  <div class="project-card-container">
    <div class="project-card-inner">
      <div class="card-header">
        <h4 class="card-title">
          {{ title }}
        </h4>
      </div>
      <div class="card-content">
        <p class="card-description">
          {{ description }}
        </p>
        <ul class="tech-stack">
          <li
            v-for="(item, i) in technologies"
            :key="i"
            class="tech-stack-item"
          >
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectCard',
  props: {
    title: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    technologies: {
      type: Array,
      default: function () {
        return []
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.project-card-container {
  width: 275px;
  margin: 10px 10px;
  transition-delay: 0ms;
  visibility: visible;
  opacity: 1;
  transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s, opacity 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0s, transform 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
}

.project-card-inner {
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  height: 100%;
  background-color: rgb(23, 42, 69);
  padding: 25px;
  border-radius: 2px;
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;

  .card-header {
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: flex-end;

    .card-title {
      font-size: 22px;
      color: rgb(204, 214, 246);
      margin: 0px 0px 10px;
    }
  }

  .card-description {
    font-size: 17px;
    text-align: left;
  }
}

.tech-stack {
  -webkit-box-flex: 1;
  flex-grow: 1;
  display: flex;
  align-items: flex-end;
  flex-wrap: wrap;
  margin-top: 20px;

  .tech-stack-item {
    font-family: "SF Mono", "Fira Code", "Fira Mono", "Roboto Mono", "Lucida Console", Monaco, monospace;
    font-size: 12px;
    color: rgb(168, 178, 209);
    line-height: 1.75;
    margin-right: 12px;
  }
}
</style>
