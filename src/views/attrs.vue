<template>
    <div>
        <div class="hello"/>
        <h2>父组件浪里行舟</h2>
        <child
        :foo = "foo"
        :boo = "boo"
        :coo = "coo"
        :doo = "doo"
        title = "前端公虾米"
        @func1='Func1Click'
        @func2='Func2Click' />
     </div>
</template>

<script>
import child from './child.vue'
export default {
  name: 'HelloWorld',
  components: {
    child
  },
  data () {
    return {
      foo: 'Javascript',
      boo: 'Html',
      coo: 'CSS',
      doo: 'Vue'
    }
  },
  methods: {
    Func1Click (val) {
      this.second = val
    },
    Func2Click (val) {
      this.third = val
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
