<script setup>
import { profile } from "../data/profile.js";

const links = [
  { label: "Email", href: `mailto:${profile.email}`, value: profile.email },
  { label: "Phone", href: profile.phoneHref, value: profile.phoneDisplay },
  { label: "LinkedIn", href: profile.linkedin, value: "fatemeh-delkhosh", external: true },
  { label: "GitHub", href: profile.github, value: "Marci051", external: true },
];
</script>

<template>
  <section id="contact" class="contact">
    <div class="wrap">
      <p class="eyebrow light">06 — Contact</p>
      <h2>Let’s talk.</h2>
      <p class="contact-lead">
        {{ profile.location }}. The fastest way to reach me is email.
      </p>
      <a class="contact-email" :href="`mailto:${profile.email}`">{{ profile.email }}</a>
      <ul class="contact-links">
        <li v-for="link in links" :key="link.label">
          <a
            :href="link.href"
            :target="link.external ? '_blank' : undefined"
            :rel="link.external ? 'noopener noreferrer' : undefined"
          >
            <span>{{ link.label }}</span>
            {{ link.value }}
          </a>
        </li>
      </ul>
      <p class="colophon">© {{ new Date().getFullYear() }} {{ profile.name }}</p>
    </div>
  </section>
</template>
