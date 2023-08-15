<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <p>counter = {{ $store.getters.getCounter }}</p>
  <p>{{ getCounter }}</p>
  <button @click="addClickHandle">增加</button>
  <button @click="addAsyncClickHandle">异步增加</button>
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

import { mapGetters, mapMutations, mapActions } from "vuex"

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  computed: {
    ...mapGetters(["getCounter"])
  },
  methods: {
    ...mapMutations(["addCounter"]),
    ...mapActions(["asyncAddCounter"]),
    // 固定调用方式
    addClickHandle() {
      // this.$store.commit("addCounter", 10)
      this.addCounter(20)
    },
    addAsyncClickHandle() {
      //this.$store.dispatch("asyncAddCounter")
      this.asyncAddCounter()
    }

  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
