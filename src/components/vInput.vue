<template>
    <input
        :value="vvalue" @input="$emit('input',$event.target.value)"
        @change="$emit('change',$event.target.value)"
    >
</template>

<script>
export default {
  name: 'v-input',
  props: ['value'],
  data () {
    return {
      vvalue: '' // 子组件是改变不了父组件的值，这时候可以用另一个指针来处理就行
    }
  },
  mounted () {
    this.vvalue = this.value
  }
}
</script>

<style scoped>

</style>
