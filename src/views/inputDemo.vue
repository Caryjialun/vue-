<template>
    <div>
        <base-input placeholder="请输入内容"
         v-model="value" @input="inputValue"
         :prefixIcon="icon1" :del="true"
        >
        </base-input>
         
    </div>
</template>

<script>
import baseInput from '../components/baseInput'
    export default {
        components:{baseInput},
        data() {
            return {
                value:'',
                icon1:'icon-search'
            }
        },
        methods:{
            inputValue(val){
                console.log(val);
            }
        }
    }
</script>

<style scoped>

</style>