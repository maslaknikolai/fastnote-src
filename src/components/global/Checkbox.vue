<template>
  <label class="check">
    <input
      v-model="Value"
      type="checkbox"
      class="check__input"
      :disabled="disabled"
    >
    <span class="check__label">{{ label }}</span>
  </label>
</template>

<script>
export default {
  props: {
    value: Boolean,
    disabled: Boolean,
    label: { type: String, default: '' }
  },
  computed: {
    Value: {
      get () { return this.value },
      set (val) { this.$emit('input', val) }
    }
  }
}
</script>

<style lang="scss" scoped>
.check {
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  &__input {
    margin-right: 5px;
  }
  &__label {
    user-select: none;
  }
}
</style>
