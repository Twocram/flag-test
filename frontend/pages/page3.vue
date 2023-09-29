<script setup lang="ts">
import { TPost } from "~/types";
import { usePageInfo } from "~/composables/usePageInfo";

useSeoMeta({
  title: "The Future",
});

let post: TPost | null = await usePageInfo("page3");
</script>

<template>
  <div class="container">
    <div class="title">{{ post ? post.title : "" }}</div>
    <div class="article" v-if="post" v-html="post.content"></div>
    <p><NuxtLink href="/" class="home-button">Back to Home</NuxtLink></p>
  </div>
</template>
