<template>
  <div
    :class="[
      'field',
      {
        'field--light': light,
        'field--invalid': errors.length
      }
    ]"
  >
    <input
      v-model="Value"
      class="field__input"
      :type="type"
      :placeholder="label"
    >
  </div>
</template>

<script>
export default {
  props: {
    value: { type: String, default: '' },
    type: { type: String, default: 'text' },
    label: { type: String, default: '' },
    light: Boolean,
    rules: { type: Array, default: () => [] }
  },
  computed: {
    Value: {
      get () { return this.value },
      set (val) { this.$emit('input', val) }
    },
    errors () {
      return this.rules.reduce((errors, rule) => {
        const error = rule(this.value)
        if (error !== true) errors.push(error)
        return errors
      }, [])
    }
  }
}
</script>

<style lang="scss" scoped>
.field {
  border-bottom: 2px solid;
  display: inline-block;
  margin: 0 10px 10px 0;
  transition: all .3s;
  &__input {
    border: 0;
    width: 100%;
    padding: 10px 0;
    color: #fff;
  }
  &--light {
    border-bottom-color: rgba(#fff, .4);
    .field__input {
      color: #fff;
    }
  }
  &--invalid {
    border-color: #f00 !important;
  }
}
</style>
