<script setup>
defineProps({
  index: { type: String, required: true },
  title: { type: String, required: true },
  lead: { type: String, default: "" },
});
</script>

<template>
  <header class="section-head">
    <p class="section-index">{{ index }}</p>
    <div>
      <h2>{{ title }}</h2>
      <p v-if="lead" class="section-lead">{{ lead }}</p>
    </div>
  </header>
</template>
