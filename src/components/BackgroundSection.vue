<script setup>
import SectionHeading from "./SectionHeading.vue";
import { education, highlights, programs } from "../data/profile.js";
</script>

<template>
  <section id="background" class="section">
    <div class="wrap">
      <SectionHeading
        index="05"
        title="Background"
        lead="School, placements, and the programs I showed up for."
      />
      <div class="background-grid">
        <div>
          <p class="eyebrow">Education</p>
          <ol class="schools">
            <li v-for="school in education" :key="school.school">
              <p class="role-dates">{{ school.dates }}</p>
              <h3>{{ school.school }}</h3>
              <p class="role-org">{{ school.field }} · {{ school.place }}</p>
              <p>{{ school.detail }}</p>
            </li>
          </ol>
        </div>
        <div>
          <p class="eyebrow">Recognition</p>
          <ol class="highlights">
            <li v-for="item in highlights" :key="item.title">
              <h3>{{ item.title }}</h3>
              <p>{{ item.detail }}</p>
            </li>
          </ol>
          <p class="eyebrow programs-label">Also</p>
          <ul class="programs">
            <li v-for="item in programs" :key="item">{{ item }}</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
