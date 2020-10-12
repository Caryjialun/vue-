<template>

    <div>
        <div class="button">
            <el-button @click="clearChecked()">清除选中</el-button>
        </div>

        <div class="context">
            <tree-transfer
                ref="tree-transfer"
                filter
                :title="title"
                :from_data="fromData"
                :to_data="toData"
                :defaultProps="defaultProps"
                @left-check-change = "leftCheckChange"
                @right-check-change = "rightCheckChange"
            >
            </tree-transfer>
        </div>
    </div>
    
</template>

<script>
import TreeTransfer from '../components/treeTransfer'
export default {
    components:{TreeTransfer},
    data() {
        return {
            defaultProps:{
                label:'name',children:'children'
            },
            fromData:[
                {
                    id:1,
                    pid:0,
                    name:'第一大类',
                    children:[
                        {
                            id:2,
                            pid:1,
                            name:'苹果',
                            children:[]
                        },
                        {
                            id:3,
                            pid:1,
                            name:'香蕉',
                            children:[]
                        },
                        {
                            id:4,
                            pid:1,
                            name:'梨子',
                            children:[]
                        }
                    ]
                }
            ],
            toData:[]
        }
    }, 
    methods:{
        clearChecked(){
            this.$refs['tree-transfer'].clearChecked();
        },
        leftCheckChange(node,tree,checkAll){
            console.log(node);
            console.log(tree);
            console.log(checkAll)
        },
        rightCheckChange(node,tree,checkAll){
            console.log(node);
            console.log(tree);
            console.log(checkAll)
        }
    },
    computed:{
        title(){
            return ['左目录','右目录']
        }
    },
    mounted(){

    }
}
</script>

<style scoped>
    .button{

    }
    .context{

    }
</style>