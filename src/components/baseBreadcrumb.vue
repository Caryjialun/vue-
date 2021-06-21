<template>
    <!-- 面包屑主要使用router-link来跳转处理
        1.要区分有无path传递进来的情况
        2.面包屑层级符号的显示处理
     -->
    <div class="breadcrumb">
        <div v-for="(item,index) in dataInfo" :key="index">
            <router-link v-if="item.path" class="link-text"
                :to = "item.path" v-text="item.title"
            >
            </router-link>
            <span v-else v-text="item.title" :key="index"></span>
            <!-- 符号控制处理 -->
            <span  v-text="disType" v-if="dataInfo.length>index+1" ></span>
        </div>
    </div>

</template>

<script>
export default {
  data () {
    return {

    }
  },
  props: {
    dataInfo: {
      type: Array,
      default: null
    },
    disType: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
    .breadcrumb{
        display:flex
    }
    .router-link-active{
        text-decoration:none;
    }
    a{
        text-decoration:none;
        color:black
    }
    .link-text{
        font-weight: bold;

    }
</style>
