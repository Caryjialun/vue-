 <template>
  <div
    class="c-tab-container"
    ref="tabs"
  >
    <div class="c-tabs">
      <span
        v-for="(item, index) in tabList"
        :key="item.title"
        @click="changeIndex(index)"
        :class="activeIndex===index?'active':''"
      >
        <b>{{ item.name }}</b>
      </span>
    </div>

  </div>
</template>

<script>

export default {
  name: 'CTabs',
  props: {
    active: {
      type: Number,
      default: 0
    },
    gradeList: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      activeIndex: 0,
      tabList: [
        {
          name: '知识点完成情况',
          id: 0
        },
        {
          name: '学生掌握情况',
          id: 1
        },
        {
          name: '班级共性错题',
          id: 2
        }
      ]
    }
  },
  watch: {
    active (v) {
      this.activeIndex = v
    }
  },
  computed: {

  },
  mounted () {

  },

  methods: {
    changeIndex (index) {
      this.activeIndex = index
      this.$emit('change', index)
    }
  }
}
</script>

<style lang="scss" scoped>
.c-tab-container {
  background: #fff;
}
.c-tabs {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 61px;
  color: rgba(17, 31, 44, 0.8);
  font-size: 17px;
  background: #fff;
  position: relative;
  span {
    width: 153px;
    text-align: center;
    margin-right: 58px;
    cursor: pointer;
  }
  .active {
    color: #1989FA;
    position: relative;
    &::after{
      content: '';
      position:absolute;
      left:calc(50% - 7px);
      bottom:-25px;
      position:absolute;
      width: 7px;
      height: 7px;
      border-radius: 50%;
      background: #fff;
      border:2px solid #1989FA;
      z-index:2;
    }
    &::before{
      content: '';
      position:absolute;
      bottom:-20px;
      left:-3px;
      position:absolute;
      width: 153px;
      border:1px solid #1989FA;
    }
  }
  &::after {
    content: '';
    width: 100%;
    height: 1px;
    background: #EBEEF5;
    border-radius: 24px;
    position: absolute;
    left: 0;
    bottom: 0;
    overflow: hidden;
  }
}

</style>
