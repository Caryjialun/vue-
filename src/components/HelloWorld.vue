<template>
  <div class="hello">

    <h1 ref="aa" @click="aa">{{ msg }}</h1>

    <el-table :data="dataList" border style="width: 100%" >
        <el-table-column :fixed="index == '0'? true :false"
          inline-template v-for="(val,index) in dataTitle"
          :label="val" :key="val.id" :prop = "index.toString()" sortable="custom" align="center" width="120">
          <div>
				      {{row[parseInt(index)+1]}}

							<span v-if="val=='b' && row[2]>0">
								<el-button  type="text" @click="searchRow(row[0])">查看</el-button>
							</span>
				    </div>
        </el-table-column>
      </el-table>

      <div class="circle"  @click="disHandle">
        <div class="circle-content" v-show="isShow">
        </div>
      </div>
      <el-button type="primary" @click="serch">搜索</el-button>
  </div>
</template>

<script>
import a from 'crypto-random-string'
export default {
  name: 'HelloWorld',

  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      dataTitle: ['a', 'b', 'c'],
      dataList: [['0', '1', 2], ['0', '1', 3]],
      isShow: false

    }
  },
  methods: {
    aa () {
      this.msg = '22'
    },
    searchRow (data) {
      console.log(data)
    },
    serch () {
      console.log('a', this.isShow)
    },
    disHandle () {
      this.isShow = !this.isShow
      console.log('a', this.isShow)
    }
  },
  watch: {
    msg (val, old) {
      console.log('old', old)
      console.log('val', val)
    }
  },
  beforeUpdate () {
    console.log('beforeUpdate', this.msg)
    console.log('更新前dom', this.$refs.aa.innerHTML)
  },
  updated () {
    console.log('updated', this.msg)
    console.log('更新后dom', this.$refs.aa.innerHTML)
  },
  mounted () {
    console.log('moueted', this.msg)
    this.dataTitle.forEach((item, index) => {
      if (item == 'a') {
        this.dataTitle.splice(index, 1)
      }
    })
    // console.log('a', this.dataList[1])
    let {msg} = this
    console.log('aaaa', msg)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.circle{
  border:1px solid red;
  border-radius: 50%;
  width:100px;
  height: 100px;
}
.circle-content{
  margin:10px;
  width:80px;
  height:80px;
  border-radius: 50%;
  background-color:#42b983;
}
</style>
