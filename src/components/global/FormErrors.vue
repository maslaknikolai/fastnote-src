<template>
  <transition-group
    tag="ul"
    class="errors"
    name="errors"
  >
    <li
      v-for="error in errors"
      :key="error"
      class="errors__item"
    >
      {{ error }}
    </li>
  </transition-group>
</template>

<script>
export default {
  model: { prop: 'errors' },
  props: {
    errors: { type: Array, default: () => [] }
  }
}
</script>

<style lang="scss" scoped>
.errors {
  padding-left: 30px;
  &-enter-active, &-leave-active {
    transition: all .3s;
    max-height: 100px;
  }
  &-enter, &-leave-to {
    opacity: 0;
    max-height: 0px;
  }
  &__item {
    color: lighten(#f00, 20%);
  }
}
</style>
