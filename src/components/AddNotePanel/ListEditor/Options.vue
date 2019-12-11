<template>
  <div>
    <Option
      v-for="(option, i) in options"
      :key="i"
      :option.sync="option"
    />
  </div>
</template>

<script>
import Option from './Option'

export default {
  components: {
    Option
  },
  model: {
    prop: 'options',
  },
  props: {
    options: {
      type: Array,
      default: () => []
    }
  }
}
</script>
