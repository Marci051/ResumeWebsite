<script setup>
import SectionHeading from "./SectionHeading.vue";
import { projects } from "../data/profile.js";
</script>

<template>
  <section id="work" class="section">
    <div class="wrap">
      <SectionHeading
        index="03"
        title="Selected work"
        lead="Sample project stories, placed here for review. Nothing in this section is a final claim yet."
      />
      <ol class="projects">
        <li v-for="(project, index) in projects" :key="project.title" class="project">
          <p class="project-index">0{{ index + 1 }}</p>
          <div>
            <div class="project-title">
              <h3>{{ project.title }}</h3>
              <span v-if="project.sample" class="sample">Example</span>
            </div>
            <p class="project-summary">{{ project.summary }}</p>
            <dl class="project-meta">
              <div>
                <dt>Role</dt>
                <dd>{{ project.role }}</dd>
              </div>
              <div>
                <dt>Stack</dt>
                <dd>{{ project.stack.join(" · ") }}</dd>
              </div>
            </dl>
          </div>
        </li>
      </ol>
    </div>
  </section>
</template>
