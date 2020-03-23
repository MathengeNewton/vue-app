<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <div class="sidebar">
      <Sidebar uname="user name" email="user email@mail.com" />
      <div class="datetime">
        <Datestamp date="5-6-2020" time="15:00:01" />
      </div>
    </div>
    <div class="dom">
      <div class="topbar">
        <Topnav schoolname="my school" />
      </div>
      <div class="homeimage">
        <Landingpage />
      </div>
      <div class="footer">
        <Footer school="my school" />
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "./components/sidebar.vue";
import Datestamp from "./components/datestamp.vue";
import Topnav from "./components/topnav.vue";
import Footer from "./components/footer.vue";
import Landingpage from "./components/landingpage.vue";

export default {
  name: "app",
  components: {
    Sidebar,
    Datestamp,
    Topnav,
    Landingpage,
    Footer
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
.dom {
  width: 80%;
  float: right;
  background-color: white;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
}
.topbar {
  padding-top: 2%;
  margin-bottom: 5%;
}
.homeimage {
  margin-right: 5%;
  background-color: whitesmoke;
  padding: 5px;
  border-radius: 5px;
  float: right;
  width: 20%;
  margin-bottom: 5%;
}
.footer {
  width: 96%;
  border-bottom-right-radius: 5px;
}
</style>
