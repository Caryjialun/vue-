<template>
    <div>
        <breadcrumb :dataInfo="list" :disType="typeStr"></breadcrumb>
    </div>
</template>

<script>
import breadcrumb from '../components/baseBreadcrumb'
    export default {
        components:{breadcrumb},
        data() {
            return {
               list:[
                   {title:'首页',path:'/'},
                   {title:'单选',path:'/radio'},
                   {title:'错误'}
               ],
               typeStr:'/'
            }
        },
        created(){

        },
        methods:{

        }
    }
</script>

<style scoped>

</style>