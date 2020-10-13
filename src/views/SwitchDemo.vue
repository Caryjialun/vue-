<template>
    <div>
        <!-- 此处有一个细节点，v-model传递的值，到子组件后可以直接用value接收 -->
        <base-switch v-model="value" 
            :activeText="activeValue" :inactiveText="inactiveValue"
            :activeColor="activeTextColor" :inactiveColor="inactiveTextColor"
            @change="getValue">
        </base-switch>
        <el-button @click="submit">提交</el-button>
    </div>
</template>

<script>
import BaseSwitch from '../components/baseSwitch'
    
    export default {
        components:{BaseSwitch},
        data() {
            return {
                value:'',
                activeValue:'',
                inactiveValue:'',
            }
        },
        created(){
            this.activeValue = '开';
            this.inactiveValue = '关';
            this.activeTextColor = 'red';
            this.inactiveTextColor = 'green';
            this.value = true;
        },
        methods:{
            getValue(val){
                console.log('val',val);
            },
            submit(){
                console.log('a',this.value);
            }
        },
        
    }
</script>

<style  scoped>

</style>