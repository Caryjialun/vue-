<template>
  <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      fixed
      prop="date"
      label="日期"
      width="150">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="120">
    </el-table-column>
    <el-table-column
      prop="province"
      label="省份"
      width="120">
    </el-table-column>
    <el-table-column
      prop="city"
      label="市区"
      width="120">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      width="300">
    </el-table-column>
    <!-- <el-table-column
      prop="zip"
      label="邮编"
      width="120">
    </el-table-column> -->
    <el-table-column
      fixed="right"
      label="操作"
      width="200" inline-template>
            <span v-if="row.city== '普陀区'">
                <div v-if="Array.isArray(row.zip)" style="display:flex;flex-wrap:wrap">
                    <div v-for="(obj,i) in row.zip" :key="i" style="margin-left:10px">  
                        <video style="width:50px;height50px" :src="obj" controls="controls"></video>
                    </div>
                </div>
                <div v-else>
                    <video style="width:50px;height50px" :src="row.zip" controls="controls"></video>
                </div>
            </span>
            <span v-else >{{row.zip}}</span>   
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    methods: {
      handleClick(row) {
        console.log(row);
      }
    },
    data() {
      return {
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区1',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区2',
          address: '上海市普陀区金沙江路 1517 弄',
          zip: 200333
        }, {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区3',
          address: '上海市普陀区金沙江路 1519 弄',
          zip: 200333
        }, {
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1516 弄',
          zip: [
            "https://video-test.meihaofenqi.cn/19483674-ba4106f7ee-1600137554676.MOV?e=1600228802&token=InfH3C262bywrAeDYs2145mmcZgrBrHEqLU3piJB:s8r7t0ASqrrP0aDUabPgGOfKJeI=",
            "https://video-test.meihaofenqi.cn/19483674-ba4106f7ee-1600137554676.MOV?e=1600228802&token=InfH3C262bywrAeDYs2145mmcZgrBrHEqLU3piJB:s8r7t0ASqrrP0aDUabPgGOfKJeI=",
            "https://video-test.meihaofenqi.cn/19483674-ba4106f7ee-1600137554676.MOV?e=1600228802&token=InfH3C262bywrAeDYs2145mmcZgrBrHEqLU3piJB:s8r7t0ASqrrP0aDUabPgGOfKJeI="
          ]
        }]
      }
    }
  }
</script>

<style scoped>
    ul,li{
        list-style: none;
        float: left;
    }
</style>