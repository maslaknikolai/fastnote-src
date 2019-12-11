<template>
  <button
    :class="[
      'option',
      {
        'option--selected': option.selected
      }
    ]"
    @click="$emit('click')"
  >
    <Color
      class="mr-2"
      v-model="option.color"
    />
    <div>{{ option.name }}</div>
  </button>
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
      default: () => ({})
    },
  },
}
</script>

<style lang="scss" scoped>
.option {
  display: flex;
  width: 100%;
  color: #fff;
  padding: 10px;
  background: transparent;
  margin-bottom: .7rem;
  user-select: none;
  transition: all .2s;
  border-radius: 50px;
  justify-content: flex-start;
  &:hover {
    background: rgba(#fff, .05);
    cursor: pointer;
  }
  &--selected {
    background: var(--accent2) !important;
  }
}
</style>
