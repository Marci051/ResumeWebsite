<script setup>
import SectionHeading from "./SectionHeading.vue";
import { skillGroups } from "../data/profile.js";
</script>

<template>
  <section id="skills" class="section section-alt">
    <div class="wrap">
      <SectionHeading
        index="04"
        title="Skills"
        lead="What I actually use. AI is marked as early stage, because it is."
      />
      <ul class="skill-groups">
        <li v-for="group in skillGroups" :key="group.label">
          <div class="skill-label">
            <h3>{{ group.label }}</h3>
            <span v-if="group.note">{{ group.note }}</span>
          </div>
          <ul class="tags">
            <li v-for="item in group.items" :key="item">{{ item }}</li>
          </ul>
        </li>
      </ul>
    </div>
  </section>
</template>
