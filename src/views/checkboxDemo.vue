<template>
  <div>
   <a-row class="labelBox">
      <a-col :span="4" class="label">
        选择学生：
      </a-col>
      <a-col :span="18">
        <div class="checkBox">
          <!-- :disabled="!this.unLockList.length>0" -->
          <a-checkbox
            :indeterminate="indeterminate"
            :checked="checkAll"
            @change="onCheckAllChange">
            选择全部
          </a-checkbox>
          <span>已选择 {{checkedList.length}} 个 / 可选学生 {{unLockList.length}} 个</span>
        </div>
        <a-checkbox-group
          class="optionsBox"
          v-model="checkedList"
          :options="plainOptions"
          @change="onAppChange" />
      </a-col>
    </a-row>
  </div>
</template>

<script>
// import {CheckboxGroup} from 'ant-design-vue'
export default {
  // components: {
  //   CheckboxGroup
  // },
  data () {
    return {
      indeterminate: false,
      plainOptions: [
        {value: 1, label: '王小明'},
        {value: 2, label: '孙芷蕾'},
        {value: 3, label: '张亦寒'},
        {value: 4, label: '李天荷'}
        // {
        //   'id': 1,
        //   'value': 1,
        //   'label': '江西',
        //   'children': [
        //     {
        //       'label': '赣州',
        //       'children': [
        //         {
        //           'label': '全南县'
        //         },
        //         {
        //           'label': '龙南县'
        //         }
        //       ]
        //     }
        //   ]
        // },
        // {
        //   'id': 2,
        //   'value': 2,
        //   'label': '浙江',
        //   'children': [
        //     {
        //       'label': '赣州',
        //       'children': [
        //         {
        //           'label': '全南县'
        //         },
        //         {
        //           'label': '龙南县'
        //         }
        //       ]
        //     }
        //   ]
        // }
      ],
      checkedList: [],
      unLockList: [],
      noCheck: []
      // alreadyCheckedList: [
      //   {id: 5, name: '孟冰枫'}
      // ]
    }
  },
  created () {
    const {plainOptions} = this
    // alreadyCheckedList.forEach(e => {
    //   plainOptions.forEach(i => {
    //     if (e.id === i.value) {
    //       i.disabled = true
    //     }
    //   })
    // })
    const unList = plainOptions.filter(l => !l.disabled)
    this.$set(this, 'unLockList', unList)
  },
  methods: {
    /** 选择/取消全部学生
   * @param {any} e
   */
    onCheckAllChange (e) {
      if (e.target.checked) {
        this.$set(this, 'noCheck', false)
        const arr = []
        this.plainOptions.forEach(res => {
          if (!res.disabled) {
            // 全选时，将选项中的value值传给 checkedList
            arr.push(res.id)
          }
        })
        this.$set(this, 'checkedList', arr)
        // console.log('checkedList', this.checkedList);
      } else {
        this.$set(this, 'checkedList', [])
      }
      Object.assign(this, {
        indeterminate: false,
        checkAll: e.target.checked
      })
    },
    /** 选择学生与全选的checkbox状态关联
   * @param {any} checkedList
   */
    onAppChange (checkedList) {
      if (checkedList.length !== 0) {
        this.$set(this, 'noCheck', false)
      }
      this.indeterminate = !!checkedList.length && checkedList.length < this.unLockList.length
      this.checkAll = checkedList.length === this.unLockList.length
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
