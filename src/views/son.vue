<template>
    <div class="border">
    <h2>孙组件</h2>
    <p>boo: {{ boo }}</p>
    <p>childCom2: {{ $attrs }}</p>
    <button @click='handleFunc1'>fuc1 button</button>
    <button @click='handleFunc2'>fuc2 button</button>
    </div>
</template>

<script>
export default {
  data () {
    return {
      boo: ''
    }
  },
  created () {
    console.log('aaa', this.$attrs) // {  "coo": "CSS", "doo": "Vue", "title": "前端工匠" }
  },
  methods: {
    handleFunc1 () {
      console.log('a')
    },
    handleFunc2 () {
      console.log('b')
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
