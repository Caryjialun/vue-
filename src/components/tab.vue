<template>
    <div class="tab-fill-height">
        <div class="tab-position-fixed">
            <div v-for="(item,index) in tabList" :key="index"
                @click="changeTab(item,index)"
                :class="activeTab == index? 'tab-title-active':'tab-title'"
            >
                {{item.checkedIcon}}
                <img :src="activeTab == index?item.checkedIcon:item.icon" alt="" >
                <div class="tab-text">{{item.title}}</div>
               
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'ElTabBottom',
        data(){
            return{
                activeTab:0
            }
        },
        created(){
            this.activeTab = this.defaultTab;
        },
        props:{
            tabList:{
                type: Array,
                default:[]
            },
            defaultTab:{
                type:Number,
                default:0
            } 
        },
        methods:{
            changeTab(item,index){
                if(item.path){
                    this.activeTab = index;
                    this.$router.push({name:item.path});
                };
                this.$emit('on-click',item,index);
            }
        }
    }

</script>

<style scoped>
    /* 脱离文档的高度 */
    .tab-fill-height{
        width:100%;
        height:50px;
    }
    /*绝对定位 */
    .tab-position-fixed{
        position: fixed;  /* 固定定位 */
        bottom: 0;
        left:0;
        right:0;
        height: 50px;
        z-index: 999; /* 显示在最文档流最高层 */
        display: flex;
        align-items: center;
        justify-content: space-around;
        background: #fff;
        border-top: 1px solid #ddd
    }
    /* 默认样式或选中tab样式 */
    .tab-title-active{
        color:#005398;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    /* 未选中的tab样式 */
    .tab-title{
        color:#999;
        display: flex;
        flex-direction:  column;
        align-items: center;
    }
    /* 底部文字样式 */
    .tab-text{
        margin-top:3px;
        font-size: 12px;
    }
    /* 底部图标大小 */
    .tab-icon-20{
        width:20px;
        height:20px;
    }
</style>