<template>
  <div id="app">
    <Header />
    <HomePage />
    <Footer />
  </div>
</template>

<script>
import "@/../static/css/reset.css";
import Header from "./components/Header/Header";
import HomePage from "./components/HomePage/HomePage";
import Footer from "./components/Footer/Footer";

export default {
  name: "app",
  components: {
    Header,
    HomePage,
    Footer,
  }
};
</script>

<style lang="stylus"></style>
