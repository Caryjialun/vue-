<template>
    <div>
        <div>tree组件</div>
        <el-tree :data="data" :props="defaultProps" ref="elTree"></el-tree>
    </div>
</template>

<script>
export default {
  data () {
    return {
      data: [
        {
          label: '一级 1',
          children: [{
            label: '二级 1-1',
            children: [{
              label: '三级 1-1-1'
            }]
          }]
        },
        {
          label: '一级 2',
          children: [{
            label: '二级 1-2',
            children: [{
              label: '三级 1-1-2'
            }]
          }]
        }
      ],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  },
  mounted () {
    console.log('aa', this.$refs.elTree.$el)
  },
  methods: {
    query () {

    }
  }

}
</script>

<style lang="scss">
    // #elTree{

    // }
</style>
