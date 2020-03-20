<template>
  <div class="mainpage">
    <div class="sidebar">
      <div class="profile">
        <img class="avatar" src="../assets/logo.png" />
        <div class="name">
          <p>
            <strong>Mr./Mrs</strong>
            {{ uname }}
          </p>
        </div>
        <div class="email">
          <p>{{ email }}</p>
        </div>
        <hr />
      </div>
      <div class="menus">
        <Dropdown />
      </div>
    </div>
  </div>
</template>

<script>
import Dropdown from "../components/dmenu.vue";

export default {
  name: "Sidebar",
  props: {
    uname: String,
    email: String
  },
  components: {
    Dropdown
  }
};
</script>
<style scoped>
* {
  align-content: center;
  color: #f9f9f9f9;
}
.sidebar {
  font-size: small;
  width: 90%;
  height: 90%;
  background-color: rgba(14, 35, 49, 0.158);
  padding-top: 5%;
  padding-bottom: 5%;
  text-align: center;
  display: block;
}
.sidebar .profile .avatar {
  width: 30%;
  background-color: white;
  border: 2px solid black;
  border-radius: 50%;
}
.sidebar .profile .name {
  font-weight: 100;
}
.sidebar .profile .email {
  opacity: 0.3;
}
.sidebar .profile hr {
  width: 90%;
  border: 0.5px solid;
  align-self: center;
}
.sidebar .button {
  width: 100%;
  float: left;
}
.menus {
  margin-top: 60%;
  margin-left: 25%;
}
</style>
