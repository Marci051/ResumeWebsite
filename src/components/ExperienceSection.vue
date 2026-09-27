<script setup>
import SectionHeading from "./SectionHeading.vue";
import { experience } from "../data/profile.js";
</script>

<template>
  <section id="experience" class="section section-alt">
    <div class="wrap">
      <SectionHeading
        index="02"
        title="Experience"
        lead="Both roles are at Mega Vision Team in Mashhad."
      />
      <ol class="roles">
        <li v-for="job in experience" :key="job.role" class="role">
          <div class="role-meta">
            <p class="role-dates">{{ job.dates }}</p>
            <p class="role-place">{{ job.place }}</p>
          </div>
          <div>
            <h3>{{ job.role }}</h3>
            <p class="role-org">{{ job.org }}</p>
            <ul class="points">
              <li v-for="point in job.points" :key="point">{{ point }}</li>
            </ul>
            <ul class="tags" aria-label="Skills used">
              <li v-for="tag in job.tags" :key="tag">{{ tag }}</li>
            </ul>
          </div>
        </li>
      </ol>
    </div>
  </section>
</template>
