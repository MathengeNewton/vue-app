import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

const reverse = new Vue({
  el: '#btn',
  data: {
    message: "Reverse this"
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
});
new Vue({
  reverse,
  render: h => h(App)
}).$mount("#app");