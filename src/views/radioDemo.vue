<template>
    <div>
       <Radio v-model="value" :defalutVal="value" :title="titleName" :options="options" @change="changeType"></Radio>
       <p>选中{{value}}</p>

       <el-button type="primary" @click="submit">确定</el-button>
    </div>
</template>

<script>
import Radio from '../components/baseRadio';
    export default {
        components:{Radio},
        data() {
            return {
                value:'选项1',
                titleName:'基础radio组件',
                options: ['选项1','选项2','选项3'],
                options1: [
                        {
                            label: 'aa',
                            value: 'valuea',
                            disabled: true
                        },
                        {
                            label: 'bb',
                            value: 'valueb',
                            disabled: false
                        }
                    ]
            }
        },
        methods:{
            changeType(value){
                console.log('aaaa',value);
            },
            submit(){
                console.log('vvv',this.value);
            }
        },
        created(){
            this.value = '选项1'
        },
    }
</script>

<style  scoped>

</style>