<script setup>
import { profile } from "../data/profile.js";
</script>

<template>
  <section id="top" class="hero">
    <div class="wrap hero-grid">
      <div>
        <p class="eyebrow">{{ profile.location }}</p>
        <h1>
          <span>{{ profile.firstName }}</span>
          <span class="name-last">{{ profile.lastName }}</span>
        </h1>
        <p class="role">{{ profile.role }}</p>
        <p class="lede">{{ profile.summary }}</p>
        <div class="hero-actions">
          <a class="btn btn-solid" href="#work">Selected work</a>
          <a class="btn btn-ghost" :href="`mailto:${profile.email}`">Email me</a>
        </div>
      </div>
      <aside class="dossier" aria-label="At a glance">
        <dl>
          <div>
            <dt>Now</dt>
            <dd>Full-Stack Developer<br />Mega Vision Team</dd>
          </div>
          <div>
            <dt>Since</dt>
            <dd>2024</dd>
          </div>
          <div>
            <dt>Focus</dt>
            <dd>Django, REST, Vue</dd>
          </div>
          <div>
            <dt>English</dt>
            <dd>B2–C1</dd>
          </div>
        </dl>
      </aside>
    </div>
  </section>
</template>
