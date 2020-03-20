<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <div class="sidebar">
      <Sidebar uname="newton" email="rexynewton79@gmail.com" />
      <div class="datetime">
        <Datestamp date="5-6-2020" time="15:00" />
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "./components/sidebar.vue";
import Datestamp from "./components/datestamp.vue";

export default {
  name: "app",
  components: {
    Sidebar,
    Datestamp
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 5px;
  margin-top: 15px;
}
.sidebar {
  width: 20%;
  float: left;
  background-color: rgba(14, 35, 49);
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
}

.sidebar .datetime {
  display: center;
  width: 90%;
  height: 10%;
}
</style>
