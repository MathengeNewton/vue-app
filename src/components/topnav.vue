<template>
  <div class="topnav">
    <div class="schooldets">
      <h3>{{ schoolname }}</h3>
    </div>
    <div class="myavatar">
      <img class="avatar" src="../assets/556211_1.jpg" />
    </div>
    <!-- <div class="logout">
      <Button content="logout" />
    </div>-->
  </div>
</template>
<script>
// import Button from "./button.vue";
export default {
  name: "Topnav",
  props: {
    schoolname: String
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
  margin-left: 5%;
  width: 40%;
  float: left;
  display: inline-flex;
}
.avatar {
  margin-top: 7px;
  width: 30%;
  background-color: white;
  border: 2px solid black;
  border-radius: 50%;
}
.myavatar {
  width: 30%;
  float: right;
  margin-left: 30%;
}
</style>
