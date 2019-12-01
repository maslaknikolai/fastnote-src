<template>
  <div
    :class="[
      'colorselect',
      {
        'colorselect--changeable': changeable
      }
    ]"
    :style="{ backgroundColor: color }"
    v-tooltip="changeable ? 'Click to select color' : false"
    @click="openColorSelect()"
  >
    <input type="color" class="colorselect__input" ref="input" v-model="color">
  </div>
</template>

<script>
import { computed } from '@vue/composition-api'
export default {
  props: {
    changeable: Boolean,
    value: { type: String, default: '#fff' }
  },
  setup(props, { emit, refs }) {
    const color = computed({
      get() { return props.value },
      set(val) { emit('input', val) }
    })

    function openColorSelect () {
      if (props.changeable) {
        refs.input.focus()
        refs.input.click()
      }
    }

    return {
      color,
      openColorSelect
    }
  }
}
</script>

<style lang="scss" scoped>
.colorselect {
  flex-shrink: 0;
  flex-grow: 0;
  border: 2px solid var(--bg2);
  width: 20px;
  height: 20px;
  background: #000;
  border-radius: 50%;
  &--changeable {
    cursor: pointer;
  }
  &__input {
    display: none;
  }
}
</style>
