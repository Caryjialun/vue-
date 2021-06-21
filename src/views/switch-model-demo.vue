<template>
    <div>
        <BaseSwitch v-model="isActive" />
    </div>
</template>

<script>
import BaseSwitch from '@/components/base-switch'
export default {
  components: {BaseSwitch},
  data () {
    return {
      isActive: false
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
