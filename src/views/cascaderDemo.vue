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
          'label': '江西',
          'children': [
            {
              'label': '赣州',
              'children': [
                {
                  'label': '全南县'
                  // 'children': [
                  //   {
                  //     'label': '涨三',
                  //     'children': []
                  //   }
                  // ]
                },
                {
                  'label': '龙南县'
                }
              ]
            }
          ]
        },
        {
          'label': '湖北',
          'children': [
            {
              'label': '武汉',
              'children': [
                {
                  'label': '江汉县'
                },
                {
                  'label': '汉口县'
                },
                {
                  'label': '青山县'
                },
                {
                  'label': '虹口县'
                },
                {
                  'label': '掌机县'
                },
                {
                  'label': '青山县'
                },
                {
                  'label': '虹口县'
                },
                {
                  'label': '掌机县'
                },
                {
                  'label': '掌机县'
                },
                {
                  'label': '青山县'
                },
                {
                  'label': '虹口县'
                },
                {
                  'label': '掌机县'
                }
              ]
            },
            {
              'label': '黄冈',
              'children': [
                {
                  'label': '江汉县'
                },
                {
                  'label': '汉口县'
                },
                {
                  'label': '青山县'
                },
                {
                  'label': '虹口县'
                },
                {
                  'label': '掌机县'
                },
                {
                  'label': '青山县'
                },
                {
                  'label': '虹口县'
                },
                {
                  'label': '掌机县'
                },
                {
                  'label': '掌机县'
                },
                {
                  'label': '青山县'
                },
                {
                  'label': '虹口县'
                },
                {
                  'label': '掌机县'
                }
              ]
            },
            {
              'label': '黄石',
              'children': [
                {
                  'label': '江汉县'
                },
                {
                  'label': '汉口县'
                },
                {
                  'label': '青山县'
                },
                {
                  'label': '虹口县'
                },
                {
                  'label': '掌机县'
                },
                {
                  'label': '青山县'
                },
                {
                  'label': '虹口县'
                },
                {
                  'label': '掌机县'
                },
                {
                  'label': '掌机县'
                },
                {
                  'label': '青山县'
                },
                {
                  'label': '虹口县'
                },
                {
                  'label': '掌机县'
                }
              ]
            },
            {
              'label': '十眼',
              'children': [
                {
                  'label': '江汉县'
                },
                {
                  'label': '汉口县'
                },
                {
                  'label': '青山县'
                },
                {
                  'label': '虹口县'
                },
                {
                  'label': '掌机县'
                },
                {
                  'label': '青山县'
                },
                {
                  'label': '虹口县'
                },
                {
                  'label': '掌机县'
                },
                {
                  'label': '掌机县'
                },
                {
                  'label': '青山县'
                },
                {
                  'label': '虹口县'
                },
                {
                  'label': '掌机县'
                }
              ]
            },
            {
              'label': '荆州',
              'children': [
                {
                  'label': '江汉县'
                },
                {
                  'label': '汉口县'
                },
                {
                  'label': '青山县'
                },
                {
                  'label': '虹口县'
                },
                {
                  'label': '掌机县'
                },
                {
                  'label': '青山县'
                },
                {
                  'label': '虹口县'
                },
                {
                  'label': '掌机县'
                },
                {
                  'label': '掌机县'
                },
                {
                  'label': '青山县'
                },
                {
                  'label': '虹口县'
                },
                {
                  'label': '掌机县'
                }
              ]
            }
          ]
        },
        {
          'label': '合肥',
          'children': [
            {
              'label': '萨吉',
              'children': [
                {
                  'label': '收到县'
                },
                {
                  'label': '乌龙县'
                }
              ]
            }
          ]
        },
        {
          'label': '胡南',
          'children': [
            {
              'label': '长沙',
              'children': [
                {
                  'label': '收到县'
                },
                {
                  'label': '乌龙县'
                }
              ]
            }
          ]
        },
        {
          'label': '河北',
          'children': [
            {
              'label': '设计',
              'children': [
                {
                  'label': '收到县'
                },
                {
                  'label': '乌龙县'
                }
              ]
            }
          ]
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
