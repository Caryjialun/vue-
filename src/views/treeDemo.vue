<template>
  <div>
    <power :powerData='powers' @change="powerChange" />
  </div>
</template>

<script>
import power from '@/components/baseTree'
export default {
  components: {power},
  data () {
    return {
      // powers: [],
      powers: [
        {
          'value': 1,
          'name': '江西',
          'children': [
            // {
            //   'value': 2,
            //   'name': '赣州',
            //   'children': [
            //     {
            //       'value': 3,
            //       'name': '全南县'
            //     },
            //     {
            //       'value': 4,
            //       'name': '龙南县'
            //     }
            //   ]
            // }
          ]
        },
        {
          'name': '合肥',
          'value': 22,
          'children': [
            {
              'name': '萨吉',
              'value': 33,
              'children': [
                {
                  'name': '收到县',
                  'value': 44
                },
                {
                  'name': '乌龙县',
                  'value': 55
                }
              ]
            }
          ]
        }
      ]
    }
  },
  methods: {
    powerChange (v) {
      console.log('v', v)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
