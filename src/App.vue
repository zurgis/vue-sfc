<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { routes } from './router/routerNavigation'
import VNavigation from './components/VNavigation.vue'
</script>

<template>
  <div id="app">
    <aside>
      <div class="sidebar-header">
        Single File Components
      </div>

      <div class="sidebar-content">
        <VNavigation :routes="routes" />
      </div>
    </aside>

    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
}

aside {
  display: flex;
  flex-direction: column;
  position: fixed;
  margin: 0;
  padding: 0;
  left: 0;
  top: 0;
  width: 160px;
  height: 100%;
  background-color: #373838;

  >.sidebar-header {
    font-weight: bold;
    color: #fff;
    padding: 10px;
  }

  >.sidebar-content {
    position: relative;
    top: 15px;

    .nav-link {
      color: #fff;
      text-decoration: none;
    }
  }
}

main {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  position: absolute;
  margin: 60px 0;
  padding: 0;
  left: 160px;
  top: 0;
  width: calc(100% - 160px);
  height: calc(100% - 60px);
  justify-content: center;
}
</style>
