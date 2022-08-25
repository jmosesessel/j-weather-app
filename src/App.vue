<template>
  <div class="flex flex-col min-h-screen font-Roboto bg-weather-primary">
    <SideNavigation />
    <RouterView />
  </div>
</template>

<script setup>
  import { RouterView } from 'vue-router';
  import SideNavigation from './components/SideNavigation.vue'
</script>

<style lang="scss" scoped>

</style>