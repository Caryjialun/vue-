<template>
    <div class="ljl-input">
           <!-- 清空按钮-->
          
        <!-- 第一部分 -->
        <input ref="input" :value="value" 
            :type="type" @input="selfInput"
            @focus="selfFocus"
            @blur="selfBlur"
            @change="selfChange"/>

        <!-- input前缀部分 -->
        <div class="prefix-icon" >
            <i :class="[prefixIcon]" v-if="prefixIcon" class="iconfont"></i>
            <slot name="prefix"></slot>
        </div>

        <!-- input后缀部分 -->
        <div class="suffix-icon">
            <i :class="[suffixIcon]" v-if="suffixIcon" class="iconfont"></i>
            <slot name="suffix"></slot>
            
            <i v-if="del && value" @click="handleDel"
            class="iconfont icon-qingchu"></i>
        </div>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                
            }
        },
        props:{
        value:null,
           type: {
                type: String,
                default: 'text'
            },
            prefixIcon:{
                type: String,
                default: ''
            },
            suffixIcon:{
                type: String,
                default: ''
            },
            del:{
                type:Boolean,
                default:false
            }
        },
        methods:{
            selfInput(e){
                this.$emit('input',e.target.value);
            },
            selfBlur(e){
                this.$emit('blur',e)
            },
            selfFocus(e){
                this.$emit('focus',e)
            },
            selfChange(e){
                this.$emit('change',e.target.value)
            },
            handleDel(){
                this.$emit('input','')
            }
        },
        created(){
            console.log('a',this.del);
            console.log('b',this.value)
        }
    }
</script>

<style scoped>

    .ljl-input{
        display:flex;
        position: relative;
        width:250px
    }

    .prefix-icon{
        position:absolute;
        top:5px;
        left:3px;
        cursor: pointer;
    }

    .suffix-icon{
        position: absolute;
        top:5px;
        right:3px;
        cursor: pointer;
    }

    input{
        height:25px;
        line-height:25px;
        width: 100%;
        padding-left:18px;
    }
  
 
</style>