<template>
    
    <div class="title">
        <div class="title-head">
            <img src="../assets/logo.png"/>
            <vtooltip class="t_title" :tooltip="tooltips"></vtooltip>
        </div>
    </div>

</template>

<script>
 import vtooltip from '../components/baseTooltip'
    export default {
        components:{vtooltip},
        data() {
            return {
                tooltips:'',
                
            }
        },
        methods:{},
        mounted(){
            this.tooltips = '我是气泡框组件'
        }
    }
</script>

<style lang="scss" scoped>
       .title {
           .title-head{
                width: 50px;
                height: 50px;
                img{
                    width: 50px;
                    height: 50px;
                }
                .t_title{
                    display: none;
                }
                position: relative; 
                &:hover {
                    .t_title {
                        display: block;
                        position: absolute;
                        left:0;
                        top:-35px;
                    }
                }
           }     
        }
</style>