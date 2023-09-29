<script setup lang="ts">
import { ref } from "vue";
import type { Ref } from "vue";
import { auth } from "~/services/auth";

useSeoMeta({
  title: "Login",
});

const login: Ref<string> = ref<string>("");
const password: Ref<string> = ref<string>("");

async function getFormInfo() {
  if (!login.value.length || !password.value.length) {
    alert("All fields must be filled");
  } else {
    await auth(login.value, password.value);
  }
}
</script>

<template>
  <div class="container">
    <div class="title">Authentication</div>
    <input
      v-model="login"
      type="text"
      class="input-field"
      placeholder="Username"
    />
    <input
      v-model="password"
      type="password"
      class="input-field"
      placeholder="Password"
    />
    <button @click="getFormInfo" class="login-button">Login</button>
  </div>
</template>
