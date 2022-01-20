<template>
  <div class="tab1">
    <div id="box1" v-for="(item, index) in obj1" :key="index" @click="selected_1(item.value)"
     :class="{ 'active':active_tab1.includes(item.value)}">{{ item.label }}</div>
</div>
</template>

<script>
export default {
  name: 'Mselect',
  data () {
    return {
      obj1: [
        {label: 'a', value: 1},
        {label: 'b', value: 2}
      ],
      active_tab1: []
    }
  },
  methods: {
    selected_1 (key) {
      let arrIndex = this.active_tab1.indexOf(key)
      if (arrIndex > -1) { // 已选中,点击取消
        this.active_tab1.splice(arrIndex, 1)
      } else { // 未选中,点击选中
        this.active_tab1.push(key)
      }
      console.log('aa', this.active_tab1)
    }
  }
}
</script>

<style lang="scss" scoped>
  .active{
    color:red
  }
</style>
