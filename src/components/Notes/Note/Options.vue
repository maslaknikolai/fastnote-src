<template>
  <div class="options">
    <Option
      v-for="(option, i) in options"
      :key="i"
      :option="option"
    />
  </div>
</template>

<script>
import Option from './Option'
export default {
  components: {
    Option
  },
  props: {
    options: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.options {
    display: flex;
    flex-wrap: wrap;
}
</style>
