<template>
    <div>
        <!-- checkbox选项区域 -->
        <div>
            <el-checkbox-group v-model="checkList">
                <el-checkbox
                    v-for="item of selfCheckList"
                    :key="item[configProps.prop]"
                    :label="item[configProps.prop]"
                    :checked="item[configProps.checked]"
                    :disabled="item[configProps.disabled]"
                >
                {{item[configProps.label]}}
                </el-checkbox>
            </el-checkbox-group>
        </div>

        <!-- 列表table区域 -->
        <div>
            <el-table border :data="selfData">
                <el-table-column
                    v-for="item of selfColumns"
                    :key="item[configProps.prop]"
                    :label="item[configProps.label]"
                    :prop="item[configProps.prop]"
                    align="center"
                >
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script>
export default {
  name: 'ljl-config-table',
  props: {
    columns: Array,
    data: Array
  },
  data () {
    return {
      checkList: []
    }
  },
  computed: {
    // 类型验证选中项
    selfCheckList () {
      if (!Array.isArray(this.columns)) {
        return []
      }
      return this.columns
    },
    // 整理配置项
    configProps () {
      return {
        prop: 'prop', // 匹配的字段名
        label: 'label', // 匹配的字段文字
        checked: 'checked', // 选中字段
        disabled: 'disabled' // 禁止字段
      }
    },
    // 整理的table数据
    selfData () {
      return this.data || []
    },
    // 整理table表头comlumn
    selfColumns () {
      let columnsList = []
      // 拿到选checkbox选中的数据
      this.columns.forEach(item => {
        if (item[this.configProps.checked]) {
          columnsList.push(item)
        }
      })
      return columnsList
    }
  },
  // 监听checkbox的选中,如果选中的值包含则为true,不包含这为false
  watch: {
    checkList (n, v) {
      this.selfCheckList.forEach(item => {
        item[this.configProps.checked] = n.includes(item[this.configProps.prop])
      })
    }
  }
}
</script>

<style scoped>

</style>
