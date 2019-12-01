<template>
  <div class="answer">
    <div class="answer__title">
      {{ answer.title }}:
    </div>
    <Options
      :options="answer.options"
    />
  </div>
</template>

<script>
import Options from './Options'

export default {
  components: {
    Options
  },
  props: {
    answer: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.answer {
  display: flex;
  margin-right: 10px;
  padding-right: 10px;
  margin-bottom: 10px;
  &__title {
    margin-right: 10px;
    font-weight: bold;
  }
}
</style>
