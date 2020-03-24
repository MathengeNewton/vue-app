<template>
  <div class="landingpage">
    <!-- <img class="limage" src="../assets/logo.png" /> -->
    <div class="sec">
      <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text.</p>
    </div>
    <div id="sect" class="sec">
      <p>
        Lorem ipsum, or lipsum as it is sometimes known, is dummy text.
        Lorem ipsum, or lipsum as it is sometimes known, is dummy text
        Lorem ipsum, or lipsum as it is sometimes known, is dummy text
        Lorem ipsum, or lipsum as it is sometimes known, is dummy text
        Lorem ipsum, or lipsum as it is sometimes known, is dummy text
        Lorem ipsum, or lipsum as it is sometimes known, is dummy text
        Lorem ipsum, or lipsum as it is sometimes known, is dummy text
      </p>
    </div>
    <div class="sec" id="btn">
      <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text.</p>
      <p>{{ message }}</p>
      <Button content="submit" v-on:click="reverseMessage" />
    </div>
  </div>
</template>

<script>
import Button from "./button.vue";
export default {
  name: "Landingpage",
  components: {
    Button
  }
};
</script>
<style>
.landingpage {
  display: inline-flex;
}
.sec {
  width: 25%;
  margin: 2.5%;
  height: 200px;
  background-color: whitesmoke;
  border-radius: 5px;
}
#sect {
  text-overflow: clip;
  overflow: scroll;
}
</style>
