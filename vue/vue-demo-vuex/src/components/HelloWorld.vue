<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>counter = {{ $store.state.counter }}</p>
    <p>{{ counter }}</p>
  </div>
</template>

<script>
import { mapState } from "vuex"
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  // 专门来读取vuex的数据
  computed: {
    ...mapState(["counter"])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
