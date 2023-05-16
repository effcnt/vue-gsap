<template>
  <Layout>
    <template #home-hero-image> <Terminal /> </template>
  </Layout>
</template>

<script setup lang="ts">
import DefaultLayout from "vitepress/theme";
import Terminal from "../../components/Terminal.vue";
const { Layout } = DefaultLayout;
</script>
