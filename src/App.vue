<script setup>
import { RouterLink, RouterView } from 'vue-router';

/**
 * This is the entry-point for the Vue App. Its just for the examples page actually.
 * The components are all inside the components folder.
 */

</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
      </nav>
    </div>
  </header>
  <RouterView />
</template>

<style scoped>

</style>
