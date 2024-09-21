<script setup>
import { RouterLink, RouterView } from 'vue-router';

/**
 * This is the entry-point for the Vue App. Its just for the examples page actually.
 * The components are all inside the components folder.
 */

</script>

<template>
  <header class="entryHeader">
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="navWrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
      </nav>
    </div>
  </header>
  <div class="bodyWrapper">
  <RouterView />
  </div>
</template>

<style scoped>
.entryHeader{
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 2px 10px;
  background-color: #1C1C1C;
}
.navWrapper nav a{
  text-decoration: none;
  color: #41B883;
}
.bodyWrapper {
  background-color: #262626;
  color: white;
}
</style>
