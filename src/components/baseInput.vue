<template>
    <div class="ljl-input">

        <!-- input前缀部分 -->
        <div class="prefix-icon" >
            <i :class="[prefixIcon]" v-if="prefixIcon" class="iconfont"></i>
            <slot name="prefix"></slot>
        </div>
        <!-- 第一部分 -->
        <input ref="input" :value="value" 
        :type="type" @input="selfInput"
        @focus="selfFocus"
        @blur="selfBlur"
        @change="selfChange"/>

        <!-- input后缀部分 -->
        <div class="suffix-icon">
            <i :class="[suffixIcon]" v-if="suffixIcon"></i>
            <slot name="suffix"></slot>
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
            }
        },
        created(){
            console.log('a',this.prefixIcon);
        }
    }
</script>

<style scoped>
    .ljl-input{
        display:flex;
    }
    .prefix-icon{
        /* display: inline; */
    }
    .suffixIcon{

    }
    @font-face{

    }
</style>