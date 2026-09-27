<script setup>
import SectionHeading from "./SectionHeading.vue";
import { profile } from "../data/profile.js";
</script>

<template>
  <section id="about" class="section">
    <div class="wrap">
      <SectionHeading
        index="01"
        title="About"
        lead="Backend first, with enough interface skill to ship the screen that sits on top of it."
      />
      <div class="about-grid">
        <div class="prose">
          <p v-for="(paragraph, i) in profile.about" :key="i">{{ paragraph }}</p>
        </div>
        <div>
          <p class="eyebrow">How I work</p>
          <ul class="principles">
            <li v-for="item in profile.principles" :key="item.title">
              <strong>{{ item.title }}</strong>
              <span>{{ item.text }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
