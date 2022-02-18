<template>
  <div class="cascader" v-click-outside="close">
    <div class="title" @click="toggle">{{resultPath}}</div>
    <div class="content" :style="{width: width+'px'}" v-if="isVisible">
      <!--拆分为左右2个组件，然后循环输出组件-->
      <!--level重0开始传递-->
      <CascaderItem
        :containerWidth="width"
        :count="count"
        :options="options"
        :selectedItems="selectedItems"
        :level="0"
        @change="change"/>
    </div>
  </div>
</template>

<script>
import CascaderItem from './baseCascaderItem.vue'
export default {
  name: 'Cascader',
  components: {
    CascaderItem
  },
  props: ['options', 'width'], // 定义一个options属性用于接收外部传递给级联组件的数据，即选择项列表
  data () {
    return {
      isVisible: false,
      selectedItems: [], // 用户已选择项
      count: 0 // 存储的计数
    }
  },
  computed: {
    resultPath () { // 通过用户已选择项计算出用户的选择路径
      return this.selectedItems.map((item) => item.label).join('/')
    }
  },
  methods: {
    change (newValue) {
      console.log('newValue-----', newValue)
      if (!newValue.item.children) {
        this.selectedItems.splice(newValue.level, 1, newValue.item) // 没有children则直接替换
      } else {
        this.count = newValue.level + 1
        this.selectedItems.splice(newValue.level, 1, newValue.item) // 替换当前点击位置信息
        this.selectedItems.splice(newValue.level + 1) // 删除当前点击位置之后的数据并新增加面板
      }
    },
    // 关闭下半部分(选择列表部分)
    close () {
      this.isVisible = false
    },
    // 下半部分(选择列表部分)显示和隐藏的切换
    toggle () {
      this.isVisible = !this.isVisible
    }
  }
}
</script>
<style lang="scss">
.cascader{
  .title {
    border: 1px solid black;
    height: 40px;
    line-height: 40px;
  }
  .content {
    border: 1px solid red;
    overflow-x: auto;
  }
}
</style>
