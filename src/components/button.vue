<template>
  <div class="button">
    <button>{{ content }}</button>
  </div>
</template>

<script>
export default {
  name: "Button",
  props: {
    content: String
  }
};
</script>

<style scoped>
* {
  font-family: Arial, Helvetica, sans-serif;
}
button {
  width: 45%;
  background-color: rgb(255, 255, 255);
  padding: 15px;
  border-radius: 5px;
  margin: 5%;
  text-align: center;
}
</style>
