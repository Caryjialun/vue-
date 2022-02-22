<template>
  <div class="powerList">
    <div v-for="(item,index) in powers" :key="item.id" :class="{item:true,active:item.active}">
      <Checkbox :indeterminate="item.indeterminate" :value="item.val1" @click.prevent.native="handleCheckAll(index)">
        <span style="color:#1C213A;font-weight:600;">&nbsp;{{item.name}}1</span>
      </Checkbox>
      <div style="font-size:30px;float:right;width:220px;cursor: pointer;color:#BEC1C8;text-align:right;" @click="open(item.active,index)">
        <Icon :type="item.active? 'md-arrow-dropup': 'md-arrow-dropdown'" />
      </div>
      <!-- 全部都是只有一级子菜单的 -->
      <CheckboxGroup v-if="onechildren(item.children)" v-model="item.checked" @on-change="checkGroupChange($event,index)">
        <Checkbox v-for="item2 in item.children" :key='item2.id' :label="item2.id">{{item2.name}}</Checkbox>
      </CheckboxGroup>
      <template v-else>
        <div v-for='(item3,index3) in item.children' :key="item3.id" class="item3">
          <!-- 有二级子菜单的 -->
          <template v-if="item3.children">
            <Checkbox :indeterminate="item3.indeterminate" :value="item3.val1" @click.prevent.native="level2CheckAll(index,index3)">&nbsp;{{item3.name}}</Checkbox>
            <CheckboxGroup v-model="item3.checked" @on-change='checkGroupChange($event,index,index3)'>
              <Checkbox v-for="item4 in item3.children" :key='item4.id' :label="item4.id">{{item4.name}}</Checkbox>
            </CheckboxGroup>
          </template>
        </div>
      </template>
    </div>
  </div>
</template>
<script>
/**
 *公共的权限选择组件，接受后端返回的权限列表powerData
 *返回选中的权限的id的arr @change接受
  */
import {Checkbox, Icon, CheckboxGroup} from 'view-design'
export default {
  props: {
    powerData: Array
  },
  components: {Checkbox, Icon, CheckboxGroup},
  data () {
    return {
      powers: []
    }
  },
  watch: {
    powerData: {
      handler (val, old) {
        if (val && val.length && JSON.stringify(val) !== JSON.stringify(old)) {
          console.log('val--', val)
          this.powers = this.formatData(val)
          this.save([...this.powers])
        }
      },
      immediate: true,
      deep: true
    }
  },
  methods: {
    // 保存返回选中的项的数组
    save (arr) {
      let auth_id = []
      arr.forEach(item => {
        if (item.indeterminate || item.val1) {
          auth_id.push(item.id)
          if (this.onechildren(item.children)) {
            auth_id = auth_id.concat([...item.checked])
          } else {
            item.children.forEach(item2 => {
              if (item2.indeterminate || item2.val1) {
                auth_id.push(item2.id)
                auth_id = auth_id.concat([...item2.checked])
              }
            })
          }
        }
      })
      console.log(auth_id)
      this.$emit('change', auth_id)
    },
    // 把获取到的权限格式化成需要的格式
    /**
     * active :dom开关
     * indeterminate: 勾选状态为-的样式
     * val1 全选的状态
     * total 有多级时子菜单的总数
     * checked 二级多选当前选中的值
      */
    formatData (arr) {
      return arr.map(item => {
        item.active = false // 用于开关下拉
        if (!this.onechildren(item.children)) { // 有多级子菜单
          let total = 0 // 计算当前项下的底级子菜单的总数 用于给主一级全选相应的状态
          item.children.map(item => item.children.length).forEach(item => {
            total += item
          })
          item.total = total
          item.children = item.children.map(item2 => {
            item2.checked = item2.children.filter(item3 => item3.select_status === 1).map(item4 => item4.id)
            if (item2.checked.length === item2.children.length) { // 选中的子选项数量等于子选项数量 就是全选
              item2.indeterminate = false
              item2.val1 = true
            } else if (item2.checked.length === 0) { // 没有选中的
              item2.indeterminate = false
              item2.val1 = false
            } else { // <
              item2.indeterminate = true
              item2.val1 = false
            }
            return item2
          })
          this.changeLevel1Status(item) // 设置一级全选的状态
        } else { // 只有一级子菜单的
          item.checked = item.children.filter(item => item.select_status === 1).map(item => item.id) // 子菜单当前选中的值
          let childrenNum = item.children.length
          let checkedNum = item.children.filter(item5 => item5.select_status === 1).length
          if (checkedNum === 0) {
            item.indeterminate = false
            item.val1 = false
          } else if (checkedNum < childrenNum) {
            item.indeterminate = true
            item.val1 = false
          } else {
            item.indeterminate = false
            item.val1 = true
          }
        }
        return item
      })
    },
    // 权限展开，手风琴
    open (val, index) {
      // 关闭所有的
      this.powers = this.powers.map(item => {
        item.active = false
        return item
      })
      let obj = this.powers[index]
      obj.active = !val
      // 打开点击的
      this.powers.splice(index, 1, obj)
    },
    // 只有一级子菜单的
    onechildren (arr) {
      console.log('arr11--', arr)
      return arr.every(item => item.children === undefined)
    },
    /**
    * 主菜单的全选
    * @param index (索引)
    */
    handleCheckAll (index) {
      if (this.onechildren(this.powers[index].children)) { // 只有一级子菜单的
        let powers = [...this.powers]
        let obj = powers[index]
        if (obj.indeterminate) { // 当前项有子菜单选中的
          obj.val1 = false
        } else {
          obj.val1 = !obj.val1
        }
        obj.indeterminate = false

        if (obj.val1) { // 如果是全选
          obj.checked = obj.children.map(item => item.id)
        } else {
          obj.checked = []
        }
        this.powers = [...powers]
        this.save([...this.powers])
      } else {
        this.checkAllOther(index)
      }
    },
    // 有多级子菜单的全选
    checkAllOther (index) {
      let powers = [...this.powers]
      if (powers[index].indeterminate) { // 当前项有子菜单选中的
        powers[index].val1 = false
      } else {
        powers[index].val1 = !powers[index].val1
      }
      powers[index].indeterminate = false
      if (powers[index].val1) { // 如果是全选
        powers[index].children.forEach(item => {
          item.val1 = true // 所有2级全选选中
          item.indeterminate = false // 状态去掉
          item.checked = item.children.map(item2 => item2.id) // 2级全选的子菜单都选中
        })
      } else {
        powers[index].children.forEach(item => {
          item.val1 = false
          item.checked = []
          item.indeterminate = false // 状态去掉
        })
      }
      this.powers = [...powers]
      this.save([...this.powers])
    },
    // 子菜单的checkGrounp改变，data选中的项的id构成的arr
    checkGroupChange (data, index, index3) {
      let powers = [...this.powers]
      let obj = index3 === undefined ? powers[index] : powers[index].children[index3]// 有index3就是二级子菜单的checkGroup
      if (data.length === obj.children.length) { // 全部勾选
        obj.indeterminate = false
        obj.val1 = true
      } else if (data.length > 0) { // 有选中的
        obj.indeterminate = true
        obj.val1 = false
      } else { // 没选中的
        obj.indeterminate = false
        obj.val1 = false
      }
      // 有二级子菜单的项改变的时候
      if (index3 !== undefined) {
        this.changeLevel1Status(powers[index])
      }
      this.powers = [...powers]
      this.save([...this.powers])
    },
    // 2级的全选
    level2CheckAll (index, index3) {
      let powers = [...this.powers]
      let obj = powers[index].children[index3] // 当前操作的2级全选
      if (obj.indeterminate) { // 当前项有子菜单选中的
        obj.val1 = false
      } else {
        obj.val1 = !obj.val1
      }
      obj.indeterminate = false

      if (obj.val1) { // 如果是全选
        obj.checked = obj.children.map(item => item.id)
      } else {
        obj.checked = []
      }
      this.changeLevel1Status(powers[index])
      this.powers = [...powers]
      this.save([...this.powers])
    },
    // 二级子菜单或2级全选时更改一级全选的状态
    changeLevel1Status (obj) {
      let checkedNum = 0
      obj.children.map(item => item.checked.length).forEach(item => {
        checkedNum += item
      })
      if (checkedNum === 0) {
        obj.indeterminate = false
        obj.val1 = false
      } else if (checkedNum < obj.total) {
        obj.indeterminate = true
        obj.val1 = false
      } else {
        obj.indeterminate = false
        obj.val1 = true
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.powerList {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  .item {
    width: 370px;
    height: 58px;
    background: #f9f9f9;
    line-height: 58px;
    margin-bottom: 20px;
    padding: 0 10px 0 20px;
    overflow: hidden;
    &.active {
      height: auto;
    }
    /deep/ .ivu-checkbox-group label {
      display: block;
    }
    .item3 {
      /deep/ .ivu-checkbox-group {
        padding-left: 20px;
        label {
          display: inline-block;
        }
      }
    }
  }
}
</style>
