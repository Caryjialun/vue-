<template>
    
    <div class="title">
        <vtooltip class="t_title" :tooltip="tooltips"></vtooltip>
        {{tooltips}}
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
            .t_title{
                display: none;
            }
            position: relative; 
            &:hover {
                .t_title {
                    display: block;
                    position: absolute;;
                    left:0;
                    top:-35px;
                    
                }
            }
        }
</style>