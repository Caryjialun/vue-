<template>

      <div class="ljl-switch" :class="{'ljl-switch-on' : isChecked}" :value="getValue"
      @click="toggle">
          <div v-if="isChecked && activeText" class="switch-left-text" :style="{color:activeColor?activeColor:''}">
              {{activeText}}
          </div>

          <div v-if="!isChecked && inactiveText" class="switch-right-text" :style="{color:inactiveColor?inactiveColor:''}">
              {{inactiveText}}
          </div>
      </div>

</template>
<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: null
    },
    activeText: {
      type: String,
      default: ''
    },
    inactiveText: {
      type: String,
      default: ''
    },
    activeColor: {
      type: String,
      default: ''
    },
    inactiveColor: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      isChecked: this.value,
      getValue: this.value
    }
  },
  computed: {
  },
  watch: {
    value (val) {
      this.isChecked = val
    },
    isChecked (val) {
      this.$emit('change', val)
    }
  },
  methods: {
    toggle () {
      this.isChecked = !this.isChecked
    }
  },
  created () {
    console.log('aa', this.value)
  }
}
</script>
<style>
    .ljl-switch {
        display: flex;
        position: relative;
        width: 52px;
        height: 24px;
        border: 1px solid #DFDFDF;
        outline: 0;
        border-radius: 16px;
        box-sizing: border-box;
        background-color: #DFDFDF;
        transition: background-color 0.1s, border 0.1s;
        cursor: pointer;
      }
      .ljl-switch:before {
        content: " ";
        position: absolute;
        top: 0;
        left: 0;
        width: 50px;
        height: 22px;
        border-radius: 15px;
        background-color: #FDFDFD;
        transition: transform 0.35s cubic-bezier(0.45, 1, 0.4, 1);
      }
      .ljl-switch:after {
        content: "";
        position: absolute;
        top:0;
        left:0;
        width:22px;
        height:22px;
        border-radius:15px;
        background-color:#fff;
        box-shadow:0 1px 3px rgba(0,0,0,0.4);/** 阴影是为了一些显示圆效果 */
        transition: transform 0.35s cubic-bezier(0.4, 0.4, 0.25, 1.35);
      }
      .ljl-switch-on {
        border-color: #6F6F6F;
        background-color: #1AAD19;
      }
      .ljl-switch-on:before {
        border-color: #1AAD19;
        background-color: #409eff;
      }
      .ljl-switch-on:after {
        transform: translateX(28px);
      }
      .switch-left-text{
        position:absolute;
        padding:0 5px;
        line-height:20px;
        color:#FFF;
        user-select:none; /**关键属性不让它选中 */
        text-align:left;
      }

      .switch-right-text{
        position:absolute;
        position:0 5px;
        line-height:20px;
        color: #7a7a7a;;
        right:5px;
        text-align:right;
        user-select: none;
      }
</style>
