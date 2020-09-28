<template>
   <el-tab-bottom :tabList='tabList' :defaultTab="0" @on-click="changeTabBottom"/>
</template>

<script>
import ElTabBottom from '@/components/tab'
    export default {
        components:{ElTabBottom},
        data(){
            return{
                tabList:[
                    {title:'我的',path:'my',icon:"@/assets/logo",checkedIcon:"@/assets/aa"}
                ]
            }
        },
        methods:{
            changeTabBottom(item,index){

            }
        }
    }
</script>

<style scoped>

</style>