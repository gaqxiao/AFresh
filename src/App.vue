<template>
  <div id="app">
    <router-view />
    <!-- footer -->
    <Footer />
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue';
export default {
  components: {
    Footer,
  },
};
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
