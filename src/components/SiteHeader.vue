<script setup>
import { onMounted, onUnmounted, ref, watch } from "vue";
import { nav } from "../data/profile.js";

const open = ref(false);
const scrolled = ref(false);
const active = ref("about");

function onScroll() {
  scrolled.value = window.scrollY > 8;
}

function onResize() {
  if (window.innerWidth > 860) open.value = false;
}

let observer;

onMounted(() => {
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onResize);
  observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) active.value = visible.target.id;
    },
    { rootMargin: "-20% 0px -55% 0px", threshold: [0.1, 0.25, 0.5] },
  );
  nav.forEach((item) => {
    const el = document.getElementById(item.id);
    if (el) observer.observe(el);
  });
});

onUnmounted(() => {
  window.removeEventListener("scroll", onScroll);
  window.removeEventListener("resize", onResize);
  observer?.disconnect();
  document.body.classList.remove("nav-open");
});

watch(open, (value) => {
  document.body.classList.toggle("nav-open", value);
});
</script>

<template>
  <header class="site-header" :class="{ 'is-scrolled': scrolled }">
    <a class="skip" href="#about">Skip to content</a>
    <div class="wrap header-bar">
      <a class="brand" href="#top">Fatemeh Delkhosh</a>
      <nav class="desk-nav" aria-label="Sections">
        <a
          v-for="item in nav"
          :key="item.id"
          :href="`#${item.id}`"
          :class="{ 'is-active': active === item.id }"
          :aria-current="active === item.id ? 'true' : undefined"
        >
          {{ item.label }}
        </a>
      </nav>
      <button
        class="nav-toggle"
        type="button"
        :aria-expanded="open"
        aria-controls="mobile-nav"
        @click="open = !open"
      >
        <span class="sr-only">{{ open ? "Close menu" : "Open menu" }}</span>
        <span></span>
        <span></span>
      </button>
    </div>
    <nav
      id="mobile-nav"
      class="mobile-nav"
      :class="{ 'is-open': open }"
      aria-label="Sections"
    >
      <a
        v-for="item in nav"
        :key="item.id"
        :href="`#${item.id}`"
        @click="open = false"
      >
        {{ item.label }}
      </a>
    </nav>
  </header>
</template>
