<template>
    <div class="tableBox">
      <table class="data-table">

        <thead>
          <tr>
            <!-- 全选 -->
            <th v-if="checkedBox">
              <div class="batch">
                <input type="checkbox" v-model="allChecked" @change="AllCheckedChange()" />
              </div>
            </th> 
            <!-- 表头 -->
            <th v-for="item in dataSource.columns" :key="item.value" :style="{width:item.width+'px'}">
                {{item.name}}
            </th>
            <th class="last-th">操作</th>
          </tr>
        </thead>

        <tbody>
          <!-- 多选 -->
          <tr v-for="item in selectDatas" :key="item.key" :class="item.checked?'tr-active':''">

            <td v-if="checkedBox">
              <input type="checkbox" v-model="item.checked" @change="changeOne(item)" />
            </td>
        
            <!-- <tr v-for="item in tableData" :key="item.key"> -->
                <td v-for="part in dataSource.columns" :key="part.key">
                    {{item[part.key]}}
                </td>
                <!-- table按钮注意细节点，插槽中绑定值把当前对应的item给传进去 -->
                <td class="last-td">
                    <slot v-bind:item="item"></slot>
                </td>
            </tr>
        </tbody>

        </table>
         <!-- 列表无数据 -->
        <div class="noData" v-if="!this.selectDatas.length">{{this.selectDatas.length==0?'暂无数据':''}}</div>
    
    </div>

</template>

<script>
    export default {
        //父组件的table数据
        props: ["dataSource",'showBow'],
        data() {
            return {
                allChecked: "", //全选
                checkList: [], //全选中数据
                selectDatas: [], //this.dataSource
                tableData: this.dataSource.datas,
                checkedBox: this.showBow
            }
        },
        methods:{
          
            // table全选
            AllCheckedChange() {
                this.checkList = []; //选中数据
                // this.tableData//原数据
                if (this.allChecked == true) {
                    for (var i = 0; i < this.tableData.length; i++) {
                    this.tableData[i].checked = true;
                    this.checkList.push(this.tableData[i]);
                    }
                } else {
                    for (var i = 0; i < this.tableData.length; i++) {
                    this.tableData[i].checked = false;
                    this.checkList = [];
                    }
                }
                this.$emit('checkAllData',this.checkList);
                // console.log('a',this.checkList);
            },
            changeOne(item){
                
                if(!item.checked){
                    item = '';
                }
                this.$emit('checkData', item);

            }
        },
        created(){
            this.selectDatas = this.tableData;
            this.selectDatas.forEach((item)=>{
                item.checked = false;
            })
        }
    }
</script>

<style lang="scss" scoped>
// table盒子
.tableBox {
    width: 100%;
    overflow: auto;
    .tableCheck {
        width: 100%;
    }
    .div-table-container {
        width: 100%;
    }
}
// 无数据
.noData {
    text-align: center;
    line-height: 80px;
    font-weight: 700;
    font-size: 24px;
    border:1px solid #0f0c0c;
    border-top:0px;
}
// 搜索下拉框
.serchBox {
    .yaw-radio-group {
        height: 30px;
        line-height: 30px;
    }
}
.last-th{
    width:80px;
}

td {
    // border-left: 1px solid #dae9ef !important;
    // border-bottom: 1px solid #dae9ef !important;
    border:1px solid #0f0c0c !important;
}
th {
    display: table-cell !important;
    border:1px solid #0f0c0c;
}
.data-table {
    width: 100%;
    border-collapse: collapse !important;
}

.data-table thead {
    // background-color: #DAE9EF;
    background-color: #f2f2f2;
    height: 40px;
}
.data-table thead th {
    height: 40px;
    font-size: 14px;
    font-weight: bold;
    color: #333333;
    text-align: center !important;
}
.data-table tbody td {
    height: 40px;
    font-size: 14px;
    font-weight: normal;
    color: #666666;
    text-align: center;
}
.data-table tbody tr:hover {
    // background-color: #EDF4F7;
    background-color:#f2f2f2;
}

</style>