<template>
  <div class="micro-app">
    <el-container>
      <el-aside width="200px">
        <el-menu class="ch-el-menu" unique-opened router @open="menuOpen">
          <template v-for="(item, key) in menuList" :key="key">
            <el-menu-item :index="item.path">{{ item.name }}</el-menu-item>
          </template>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </div>
</template>

<script setup>
import router from './router/index'

const menuList = router.getRoutes()

const menuOpen = (key, keyPath) => {
  console.log(key, keyPath, 'open')
}
</script>

<style lang="scss">
#sub-app {
  height: 100%;
}

.micro-app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;

  &.noPadding {
    padding: 0;
  }
}
</style>
