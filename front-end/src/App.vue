<template>
  <div id="app">
    <Header />
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import "@/../static/css/reset.css";
import Header from "./components/Header/Header";
import router from "./router/route.js";

export default {
  name: "app",
  router,
  components: {
    Header
  }
};
</script>

<style lang="stylus"></style>
