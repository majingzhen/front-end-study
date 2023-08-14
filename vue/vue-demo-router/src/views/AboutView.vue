<template>
    <button :class="btnClass" @click="handleClick">
      {{ text }}
    </button>
  </template>
  
  <script>
  export default {
    props: {
      text: {
        type: String,
        required: true,
      },
      type: {
        type: String,
        default: 'default',
      },
    },
  
    data() {
      return {
        disabled: false,
      };
    },
  created() {
    alert(111)
  },
    computed: {
      btnClass() {
        return ['btn', `btn-${this.type}`, { disabled: this.disabled }];
      },
    },
  
    methods: {
      handleClick() {
        if (!this.disabled) {
          this.$emit('click');
        }
      },
    },
  };
  </script>