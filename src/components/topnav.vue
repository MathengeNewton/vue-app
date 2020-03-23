<template>
  <div class="topnav">
    <div class="schooldets">
      <div>
        <img class="avatar" src="../assets/logo.png" />
      </div>
      <h3>{{ schoolname }}</h3>
    </div>
    <div class="logout">
      <Button content="logout" />
    </div>
  </div>
</template>
<script>
import Button from "./button.vue";
export default {
  name: "Topnav",
  props: {
    schoolname: String
  },
  components: {
    Button
  }
};
</script>
<style scoped>
* {
  color: black;
}
.topnav {
  display: inline-flex;
  width: 100%;
}
.schooldets {
  width: 40%;
  float: left;
  display: inline-flex;
}
.schooldets .avatar {
  margin-top: 7px;
  width: 30%;
  background-color: white;
  border: 2px solid black;
  border-radius: 50%;
}
.logout {
  width: 30%;
  float: right;
  margin-left: 30%;
}
</style>
