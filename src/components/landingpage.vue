<template>
  <div class="landingpage">
    <!-- <img class="limage" src="../assets/logo.png" /> -->
    <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text.</p>
    <Button content="submit" />
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
  height: 100%;
  width: 100%;
}
</style>
