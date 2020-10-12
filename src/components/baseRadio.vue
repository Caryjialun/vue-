<template>
    <div class="base-radio">
        <!-- radio中的标题 -->
        <label class="radio-title">{{title}}</label>

        <!-- radio选项及选项值 -->
        <div class="radio-content">
            <div class="radio-options" v-for="(item,index) in options" :key="index">
                <label>
                    <div>
                        <input type="radio" class="radio-input" v-model="selectValue" @change="changeValue"
                            :value = "typeof item=='string'?item:item.value"
                            :disabled = "typeof item == 'string'? false:item.disabled==true?true:false"
                        >
                        <span class="select-radio" :class="typeof item == 'string'?'':item.disabled==true?'radio-disabled':''"></span>

                        <span>{{typeof item == 'string'?item: item.label}}</span>
                    </div>
                </label>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                selectValue:'',
            }
        },
        props:{
            title:String,
            options:[String,Array],
            defalutVal:[String,Number] //默认值属性
        },
        // 关键位置监听值的变化
        watch:{
            selectValue(){
               
                this.$emit('input', this.selectValue);
            }
        },
        computed:{
         
        },
        methods:{
            changeValue(val){
                this.selectValue = val.target.value;
                this.$emit('change', this.selectValue );
            }
        },
        created(){
            this.selectValue = this.defalutVal; 
        }
    }
</script>

<style scoped>
    .radio-content{
        display: flex;
        justify-content:center;
    }
    .radio-input{
        display: none;
    }
    .select-radio{
        box-sizing: border-box;
        display: inline-block;
        background-color: #fff;
        border-radius: 100%;
        border: 1px solid #ccc;
        position: relative;
        width: 20px;
        height: 20px;
        vertical-align: middle;
    }

    .radio-input:checked + .select-radio {
        background-color: #26a2ff;
        border-color: #26a2ff;
    }

    .radio-input:checked + .select-radio::after {
        background-color: #fff;
        -webkit-transform: scale(1);
        transform: scale(1);
    }
    .select-radio::after {
        content: ' ';
        border-radius: 100%;
        top: 5px;
        left: 5px;
        position: absolute;
        width: 8px;
        height: 8px;
        -webkit-transition: -webkit-transform 0.2s;
        transition: -webkit-transform 0.2s;
        transition: transform 0.2s;
        transition: transform 0.2s, -webkit-transform 0.2s;
        -webkit-transform: scale(0);
        transform: scale(0);
    }
    .radio-disabled{
        background-color: black
    }
</style>