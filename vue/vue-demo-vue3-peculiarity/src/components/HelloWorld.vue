<template>
  <div class="hello">
   <p>{{ message }}</p>
   <p>{{ message2 }}</p>
   <ul>
    <li v-for="(item, index) in names.data" :key="index">{{ item }}</li>
   </ul>
   <button @click="clickHandle">点击</button>
   <p>{{ msg }}</p>
  </div>
</template>

<script>

import { ref, reactive, inject, onMounted } from "vue";
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  // 组合式api
  setup(props) {

    const message2 = inject("message")
    const msg = props.msg
    const message = ref("matuto")


    const names = reactive({
      data: ["张三","李四", "王五"]
    })

    function clickHandle() {
      message.value = "majz"
    }
    // 比以前有优势，以前同一个生命周期函数只能存在一个，现在可以存在多个
    onMounted(() => {
      console.log("生命周期函数：onMounted")
    })
    onMounted(() => {
      console.log("生命周期函数：onMounted2")
    })

    return {
      message,
      names,
      clickHandle,
      msg,
      message2
    }
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
