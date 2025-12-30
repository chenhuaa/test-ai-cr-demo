<template>
  <div class="micro-app">
    <router-view />
  </div>
</template>

<script setup></script>

<style lang="scss">
#sub-app {
  height: 100%;
}

.micro-app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  padding: 16px;

  &.noPadding {
    padding: 0;
  }
}
</style>
