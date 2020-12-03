<template>
    
    <div class="base_tooltip">
     {{tooltip}}
        <div class="all_bubble">
            <div class=" left_bubble "></div>
            <div class=" left_bubble2"></div> 
            <div class=" zezao "></div>
        </div>
    </div>
  
</template>

<script>
    export default {
        data() {
            return {
            //   _tooltip:'' 
            }
        },
        props: {
            tooltip: {
                type: String,
                default: ""
            },
        }, 
        methods:{},
        mounted(){
            // console.log('a', this.tooltip);
            // this._tooltip = this.tooltip;
        }
    }
</script>

<style>
    /*气泡矩形*/
    .base_tooltip{
        position:relative;
        width:144px;
        border:1px solid #9584FF;
        border-radius:4px;
    }

    /*左三角气泡*/
    .left_bubble:after{
        content:"";
        position:absolute;
        bottom:0;
        left:30%;
        border:9px solid transparent;
        border-top-color:#9584FF;
        border-bottom:0;
        margin:0 0 -9px -34px;
        border-left:0;
    }
    .left_bubble2::after{
        content: "";
        position: absolute;
        bottom: 0;
        left: 30%;
        border: 10px solid transparent;
        border-top-color: #fff;
        border-bottom: 0;
        margin: 0 0 -9px -35px;
        border-left: 0;
        transform: scale(0.65);
    }

    .zezao{
        position: absolute;
        left: 6.8%;
        bottom:-1px;
        width: 6.5px;
        background-color: #ffffff;
        border-top: 1px solid #ffffff;
    }
    .all_bubble{
        position: relative;
        left:5px;
    }
</style>