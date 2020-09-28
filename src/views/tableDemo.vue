<template>
    <div>
        <!-- 用户管理table -->
        <Table style="width:1200px"
            :dataSource="tableData"
            ref="tableUserControl"
            :showBow ="isShow"
            @checkAllData= "allData"
            @checkData = 'checkedData'
            >
            <!-- 控制列按钮 -->
            <template v-slot:default="slots">
                <div>
                    <button @click="view(slots.item)">查 看</button>
                </div>
            </template>
        </Table>
    </div>
</template>

<script>
import Table from '../components/baseTable'
    export default {
        components:{Table},
        data() {
            return {
                aa:'',
                isShow:false,
                tableData: {
                    //表头
                    columns: [
                        { name: "货款单号", key: "ID" ,width:100,},
                        { name: "审批时间", key: "TaskType",width:100, },
                        { name: "客户姓名", key: "jobNo",width:80, },
                        { name: "年龄", key: "statuss",width:70, },
                        { name: "身份证前6位", key: "name" ,width:100,},
                        { name: "户籍", key: "title" ,width:130,},
                        { name: "渠道涞源", key: "userName" ,width:100,},
                        { name: "单位姓名", key: "doctorID",width:100, },
                        { name: "单位地址", key: "inpatientArea" ,width:170,},
                        { name: "申请项目", key: "time",width:100, },
                        { name: "申请金额", key: "checked" ,width:80,},
                        { name: "芝麻分", key: "zimafen",width:70, },
                        { name: "申请状态", key: "status" ,width:100,},
                    ],
                    datas: [
                        {
                            ID: 11220033,
                            checked: '2000元',
                            doctorID: "小天鹅餐馆", //权限相关
                            TaskType: '2020-09-22 12:19', //任务类型
                            inpatientArea:'湖北身荆州市石首市连心大道83号', //研发人员
                            job: "700",
                            jobNo: "汪群",
                            status: '拒件',
                            statuss:24, //状态
                            name: 370403 ,//名称
                            title: "湖北身荆州市石首市", //页面模块
                            userName: "美业", //路径
                            time: '祛痘', //预计工时
                            // key: "ID",
                            zimafen:'700',
                            key: 1,
                        },
                          {
                            ID: 11220033,
                            // checked: '2000元',
                            doctorID: "小天鹅餐馆", //权限相关
                            TaskType: '2020-09-22 12:19', //任务类型
                            inpatientArea:'湖北身荆州市石首市连心大道83号', //研发人员
                            job: "700",
                            jobNo: "汪群",
                            status: '拒件',
                            statuss:24, //状态
                            name: 370403 ,//名称
                            title: "湖北身荆州市石首市", //页面模块
                            userName: "美业", //路径
                            time: '祛痘', //预计工时
                            // key: "ID",
                            zimafen:'700',
                            key: 2,
                        },
                  
                    ],
                },
            }
        },
        methods:{
            view(item){
                console.log(item);
            },
            allData(data){
                console.log('aa',data);
            },
            checkedData(data){
                // console.log('bb',data);
                this.aa = data;
                console.log('a',this.aa);
            }
        },
        created(){
           
        }
    }
</script>

<style lang="scss" scoped>

</style>