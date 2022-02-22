<template>
  <div>
    级联组件
    <cascader :options="options" :width="600"></cascader>
  </div>
</template>

<script>
import Cascader from '@/components/baseCascader'
export default {
  components: {Cascader},
  data () {
    return {
      options: [
        {
          'value': 1,
          'label': '江西',
          'children': [
            {
              'value': 2,
              'label': '赣州',
              'children': [
                {
                  'value': 3,
                  'label': '全南县',
                  'children': [
                    {
                      'value': 44,
                      'label': '赣州1'
                    }
                  ]
                },
                {
                  'value': 4,
                  'label': '龙南县'
                }
              ]
            },
            {
              'value': 22,
              'label': 'sdfas'
            }
          ]
        },
        {
          'label': '合肥',
          'value': 22
          // 'children': [
          //   {
          //     'label': '萨吉',
          //     'value': 33,
          //     'children': [
          //       {
          //         'label': '收到县',
          //         'value': 44
          //       },
          //       {
          //         'label': '乌龙县',
          //         'value': 55
          //       }
          //     ]
          //   }
          // ]
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
