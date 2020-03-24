<template>
  <div class="footer">
    <div class="copyright">
      @copyright 2020
      {{ school }}
    </div>
    <div class="links">links go here</div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  props: {
    school: String
  }
};
</script>

<style>
* {
  font-family: cursive;
}
.footer {
  padding: 3px;
  color: #f9f9f8f8;
  background-color: rgb(22, 34, 43);
  display: inline-flex;
}
.copyright {
  margin-right: 30%;
}
.links {
  margin-left: 15%;
}
</style>
