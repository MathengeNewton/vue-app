<template>
  <div class="dropdown">
    <ul>
      <li>
        <a href="#home">Mails</a>
      </li>
      <li>
        <a href="#news">News</a>
      </li>
      <li>
        <a href="#convos">Conversations</a>
      </li>
      <li>
        <a href="#resources">Resources</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Dropdown",
  props: {
    listitem: String
  }
};
</script>

<style>
.dropdown {
  float: left;
  margin-bottom: 70%;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  width: 100%;
  background-color: rgba(14, 35, 49, 0.158);
}

li a {
  display: block;
  color: white;
  padding: 10px 16px;
  text-decoration: none;
}
li a.active {
  background-color: rgba(14, 35, 49);
  color: white;
}

li a:hover:not(.active) {
  background-color: rgb(148, 236, 232);
  color: black;
}
</style>
