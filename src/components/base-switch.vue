<template>
  <div :class="['base-switch', active && 'base-switch-active']" @click="handleClick">
    <div class="base-switch-pie"></div>
  </div>
</template>

<script>
export default {
  name: 'BaseSwitch',
  // 通过model属性自定义 属性名和事件名
  model: {
    event: 'change',
    prop: 'active'
  },
  props: {
    // 虽然自定义了 active属性，仍然要在 props 选项里面声明
    active: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClick () {
      // 暴露change事件
      this.$emit('change', !this.active)
    }
  }
}
</script>
<style>
.base-switch{
   background:red;

}
.base-switch .base-switch-pie{
    width: 20px;
    height: 40px;
    background: green
}

.base-switch-active{
    background: greenyellow;
}
</style>
