<template>
    <div>
        <!-- <LjlTable></LjlTable> -->
        <ljl-table :columns="column" :data="tableData"></ljl-table>
    </div>
</template>

<script>
import LjlTable from '../components/configTable';
    export default {
        components:{ LjlTable},
        data() {
            return {
               column:[
                    {
                        prop: "name",
                        label: "姓名",
                        checked: true,
                        disabled: true
                    },
                    {
                        prop: "age",
                        label: "年龄",
                        checked: true,
                        disabled: false
                    },
                    {
                        prop: 'job',
                        label: '工作',
                        checked: true,
                        disabled: false
                    },
                    {
                        prop: 'idCard',
                        label: '身份证',
                        checked: true,
                        disabled: false
                    },
               ],
               tableData:[],
            }
        },
        created(){
            this.tableData=[{"name":'aa',"age":11,'job':'武汉','idCard':4201121312312312}];
        }
    }
</script>

<style scoped>

</style>