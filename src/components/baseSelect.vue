<template>
    <div class="base-select">
        <!-- 第一部分：封装清除按钮图标和下拉图标到input里面 -->
        <i :class="{'icon-qingchu':clear&&value.length,'open':isShow}" 
            class="icon-zhankai1 iconfont icon-pos" @click="displayType"
        >
        </i>
        <input type="text" ref="input" class="input-style"
                :value="inputValue"
                :placeholder="placeholder"
                :disabled ="disabled"
                @input="selfInput"
                @blur="selfBlur"
            > 
        <!-- 第二部分：封装下拉数据显示，这里可以用vue中的动画过渡标签
        <transition></transition>来显示 -->
        <transition name="custome-slide">

            <div v-show="isShow">
                <ul>
                    <li v-for="(item,index) in options" :key="index">
                        {{item.label}}
                    </li>
                </ul>
            </div>

        </transition>

    </div>
</template>

<script>
    
    export default {
        data() {
            return {
                inputValue:'',
                isShow:false
            }
        },
        props:{
            value:[Array,String,Number],
            options:{
                type:Array
            },
            placeholder:String,
            disabled:String,
            clear:{
                type:Boolean,
                default:false
            }
        },
        methods:{
            selfInput(e){
                this.inputValue = e.target.value;
            },
            selfBlur(e){

            },
            displayType(e){
                if(this.isShow){
                    this.isShow = false;
                    // 切换显示并阻止冒泡
                    e.stopPropagation();
                }
            }
        }
    }
</script>

<style scoped>

    .base-select{
        position: relative;
        width: 130px;
      
    }

    .input-style{
        line-height:25px;
        
    }

    .icon-pos{
        position: absolute;
        top:8px;
        right:0; 
        cursor:pointer;
        transition: all 0.3s;
    }
    .open{
        transform: translateY(0) rotate(180deg);
    }

    .base-input{
        /* width: 100%;
        position: absolute;
        left:20px;
        top:0; */
    }

    /* 动画样式处理 */
    .custom-slide-enter-active{
        animation: down 0.3s;
        transform-origin: center top; /* origin定位 */
    }
    .custom-slide-leave-active{
        animation: up 0.3s;
        transform-origin: center top;
    }

    @keyframes down{
        0%{
            opacity: 0;
            transform: scaleY(0);
        }
        100%{
            opacity: 1;
            transform: scaleY(1);
        }
    }

    @keyframes up{
        0%{
            opacity: 1;
            transform: scaleY(1);
        }
        100%{
            opacity: 0;
            transform: scaleY(0)
        }
    }
    
</style>