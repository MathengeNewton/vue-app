<template>
  <div class="timestamp">
    <div class="date">{{ date }}</div>
    <div class="time">{{ time }}</div>
  </div>
</template>

<script>
export default {
  name: "Datestamp",
  props: {
    date: Date,
    time: Date
  }
};
</script>

<style>
* {
  font-family: cursive;
}
.timestamp {
  display: inline-flex;
  margin: 2%;
  color: #f9f9f9f9;
}
.date {
  width: 65%;
  margin-right: 15px;
}
.time {
  width: 35%;
}
</style>
