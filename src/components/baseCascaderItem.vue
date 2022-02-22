<template>
  <div class="cascader-item" :style="{width:widthChanges+rightWidth+'px'}">

    <!--首先渲染出级联组件的最左边部分-->
    <div class="content-left" :style="{width:widthChanges+'px'}">
      <a-checkbox @change="changeAll">全选</a-checkbox>
      <div class="left-width" v-for="(item, index) in options" :key="index">
        <div class="label" @click.stop="select(item)">

          <input
              :class="['check', item.checked ? 'chkDisabled' : '']"
              type="checkbox"
              @click.native.stop
              @change="onChange(item, $event)"
              v-model="item.checked"/>{{item.label}}
        </div>
      </div>
    </div>

    <!--点击左边中的某个选项后，lists才会有值才会渲染右边部分，同样渲染右边部分的时候，也是先渲染左边部分-->
    <div class="content-right" v-if="lists && lists.length" :style="{width: rightWidth+'px'}">
      <CascaderItem
        :count="count"
        :options="lists"
        :selectedItems="selectedItems"
        :level=" level + 1"
        :containerWidth="containerWidth"
        @change="change">
      </CascaderItem>
    </div>

  </div>
</template>

<script>
export default {
  name: 'CascaderItem', // 给组件起个名字，方便组件内部递归调用，即组件内部自己调用自己
  props: ['options', 'selectedItems', 'level', 'count', 'containerWidth'],
  data () {
    return {
      // widthChange: 100
      // isChecked: false
      // result: []
      currentNode: []
    }
  },
  computed: {
    lists () {
      // 根据内容value的变化显示列表，根据当前点击位置对应的level去获取要显示的列表
      return this.selectedItems[this.level] && this.selectedItems[this.level].children
    },
    widthChanges () {
      if (this.count > 2) {
        return this.containerWidth / 3
      }
      return this.containerWidth / (this.count + 1)
    },
    rightWidth () {
      if (this.level === this.count) {
        return 0
      } else {
        switch (this.level) {
          case 0:
            if (this.count === 1) {
              return this.containerWidth / 2
            } else {
              return this.containerWidth / 3 * this.count
            }
          default:
            return this.containerWidth / 3 * (this.count - this.level)
        }
      }
    }
  },
  watch: {
    'currentNode': {
      immediate: true,
      deep: true,
      handler (newVal, oldVal) {
        if (newVal.children) {
          const checkedAll = newVal.children.every(item => item.checked)
          this.$set(this.currentNode, 'checked', checkedAll)
          console.log('count---', newVal)
          // const currentAll = this.options.every(item => item.checked)
          // if (this.count > 0) {
          //   console.log('sss', currentAll)
          //   this.selectedItems[this.level - 1].checked = currentAll
          // } else {
          //   this.selectedItems[0].checked = currentAll
          // }
        } else {
          // console.log('最后一级', this.options)
          // console.log('last--', this.currentNode, this.selectedItems[0])
        }
      }
    }
  },
  methods: {
    // treeData (list) {
    //   return list.map(item => {
    //     this.$set(item, 'checked', true)
    //     let obj = item
    //     if (Array.isArray(item.children)) {
    //       obj.children = this.treeData(item.children)
    //     }
    //     return obj
    //   })
    // },
    // 更新节点下的所有节点状态
    updateTree (data, checked) {
      this.$set(data, 'checked', checked)
      if (data.children && data.children.length) {
        data.children.forEach(item => {
          this.updateTree(item, checked)
        })
      }
    },
    onChange (node, $event) {
      this.currentNode = node
      this.updateTree(node, $event.target.checked)
    },
    changeAll (e) {
      console.log('选择全部', e.target.checked)
    },
    select (item) {
      const currentAll = this.options.every(item => item.checked)
      if (this.level > 0) {
        this.selectedItems[this.level - 1].checked = currentAll
      }
      // 处理CascaderItem组件左侧列点击事件，item为当前点击的对象
      // 向上一级发射change事件，通知上层进行修改，并将当前点击的层级level和item传递过去
      this.$emit('change', {level: this.level, item: item})
    },
    change (newValue) { // 向顶层传递数据改变信息
      this.$emit('change', newValue)
    }

  },
  mounted () {

  }
}
</script>
<style lang="scss" scoped>
  .cascader-item{
    display: flex;
    .content-left {
      overflow-y: scroll;
      border: 1px solid black;
      height: 100px;
      border-right: none;
      &:last-child{
        border-right: 1px solid black;
      }
      // .left-width {
      //   width: 200px;
      // }
      // .label {

      // }
    }
    .content-right {
      flex: 1;
    }
  }
</style>
