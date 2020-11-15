<template>
    <div>
        <!-- v-model的实现方式绑定组件 -->
        <vinput v-model="value"/>
        {{value}}
    </div>
</template>

<script>
    import vinput from '../components/vInput'
    export default {
        components:{vinput},
        data(){
            return{
                value:''
            }
        }
    }
</script>

<style scoped>

</style>