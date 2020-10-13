<template>
    <div>
        <base-input placeholder="请输入内容"
         v-model="value" @input="inputValue"
         :prefixIcon="icon1" 
        >
        </base-input>
         
        <!-- <div>
            121
            <i :class="icon1" class="iconfont"></i>
        </div> -->
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