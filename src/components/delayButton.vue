<template>
  <button @click.stop="onButtonClick">
    <slot />
  </button>
</template>

<script>
// 延迟按钮组件
export default {
  name: 'DebounceButton',
  props: {
    delay: {
      type: Number,
      default: 300
    }
  },
  data () {
    return {
      timer: null
    }
  },
  methods: {
    onButtonClick () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      this.timer = setTimeout(() => {
        this.$emit('click')
        this.timer = null
      }, this.delay)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
