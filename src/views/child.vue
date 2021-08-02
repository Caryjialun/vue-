<template>
    <div>
        <h2>子组件</h2>
        <p>foo:foo作为props属性绑定 {{ foo }}</p>
        <p>child的$attrs: {{ $attrs }}</p>
        <p>child计算属性{{changeFoo}}</p>
        <son v-bind="$attrs" v-on="$listeners"></son>
    </div>

</template>

<script>
import Son from './son'
export default {
  components: {Son},
  props: {
    foo: String // foo作为props属性绑定
  },
  computed: {
    changeFoo () {
      return this.$attrs.boo.replace('l', 'b')
    }
  },
  created () {
    console.log(this.$attrs) // { "boo": "Html", "coo": "CSS", "doo": "Vue", "title": "前端工匠" }
    console.log(this.$listeners)
  }
  // mounted () {
  //   console.log(this.$attrs) // { "boo": "Html", "coo": "CSS", "doo": "Vue", "title": "前端工匠" }
  //   console.log(this.$listeners)
  // }
}
</script>

<style lang="scss" scoped>

</style>
