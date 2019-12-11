<template>
  <div class="option">
    <Color
      v-model="option.color"
      class="option__color"
    />
    <div>{{ option.name }}</div>
  </div>
</template>

<script>
import Color from '@/components/Color'
export default {
  components: {
    Color
  },
  props: {
    option: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.option {
  display: flex;
  margin-bottom: 5px;
  margin-right: 10px;
  &__color {
    margin-right: 3px;
    transform: translateY(3px);
    width: 10px;
    height: 10px;
  }
}
</style>
