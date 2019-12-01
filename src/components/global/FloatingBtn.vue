<template functional>
  <transition name="animation-fade">
    <Btn
      :class="[
        'floating-btn ma-0',
        {
          'floating-btn--secondary': props.secondary
        }
      ]"
      icon
      :disabled="props.disabled"
      v-tooltip="props.tooltip"
      @click="listeners.click"
    >
      {{ tooltip }}
      <Icon icon="fad-plus" />
    </Btn>
  </transition>
</template>

<script>
export default {
  props: {
    disabled: Boolean,
    secondary: Boolean,
    tooltip: {
      type: [Object, String],
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.floating-btn {
  position: fixed !important;
  z-index: 2;
  padding: 0 !important;
	right: 25px;
	bottom: 30px;
	width: 50px !important;
	height: 50px !important;
	font-size: 2rem;
  &--secondary {
    background: var(--accent1) !important;
  }
}
</style>
