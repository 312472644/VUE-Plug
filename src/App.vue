<template>
  <div id="app">
    <timeline></timeline>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      password: null,
    };
  },
  methods: {
    complete(value) {
      console.log(value);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
