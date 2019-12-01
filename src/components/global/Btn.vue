<template>
  <button
    :disabled="disabled"
    v-tooltip="tooltip"
    :class="[
      'button',
      {
        'button--text': text,
        'button--icon': icon
      }
    ]"
    v-on="$listeners"
  >
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    disabled: Boolean,
    text: Boolean,
    icon: Boolean,
    tooltip: {
      type: [Object, String],
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.button {
  padding: 10px 40px;
	border: 0;
	border-radius: 50px;
	color: #fff;
	margin: 0 10px 10px 0;
	background: linear-gradient(90deg, var(--accent1) 0%,var(--accent2) 100%);
	opacity: .8;
	font: 400 0.8rem var(--default-font);
	transition: all .2s;
	will-change: background;
	position: relative;
	&:hover {
    opacity: 1;
		cursor: pointer;
  }
	&:focus {
    border-color: var(--accent2);
  }
	&--icon {
    width: 35px;
		height: 35px;
		flex-shrink: 0;
		display: inline-flex;
		justify-content: center;
		align-items: center;
		padding: 0;
		svg {
      flex: 0 0 13px ;
			height: 13px;
    }
  }
	&--accent1 {
    background: var(--accent1);
  }
	&--accent2 {
    background: var(--accent2);
  }
  &--text {
    background: transparent !important;
    color: #fff;
    &:hover {
      background: rgba(#fff, .05) !important;
    }
  }
	&[disabled] {
    background: darken(#fff, 30%) !important;
    color: rgba(#000, .7);
    opacity: 1 !important;
		cursor: default;
  }
}
</style>
