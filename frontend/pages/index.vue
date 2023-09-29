<script setup lang="ts">
import { logout } from "~/services/logout";

useSeoMeta({
  title: "Main",
});
</script>

<template>
  <div class="container">
    <p>
      <NuxtLink @click="logout" to="/login" class="leave-button"
        >Logout</NuxtLink
      >
    </p>
    <div class="title">Main Page</div>
    <div class="description">
      Welcome to my website! Here are some articles:
    </div>
    <NuxtLink to="/page1" class="index-link"
      >Space, the final frontier
    </NuxtLink>
    <NuxtLink to="/page2" class="index-link"> Animals </NuxtLink>
    <NuxtLink to="/page3" class="index-link">The Future</NuxtLink>
    <div class="description">Feel free to explore and enjoy!</div>
  </div>
</template>
