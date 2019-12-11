<template>
  <Btn
    class="delete"
    icon
    :tooltip="tooltip"
    @click="onClick()"
  >
    <Icon
      v-if="!confirmationCounter"
      icon="trash"
      size="13"
    />
    <template v-else>
      {{ confirmationCounter }}
    </template>
  </Btn>
</template>

<script>
import { ref, onBeforeUnmount, computed } from '@vue/composition-api'

export default {
  setup(props, { emit }) {
    const confirmationCounter = ref(0)

    let interval
    function onClick() {
      if (confirmationCounter.value) {
        emit('confirm')
      } else {
        confirmationCounter.value = 3
        interval = setInterval(() => {
          confirmationCounter.value--
          if (confirmationCounter.value === 0) {
            clearInterval(interval)
          }
        }, 1000)
      }
    }

    onBeforeUnmount(() => {
      if (interval) {
        clearInterval(interval)
      }
    })

    const tooltip = computed(() => {
      return {
        trigger: 'manual',
        show: !!confirmationCounter.value,
        content: 'Sure?',
        placement: 'left'
      }
    })

    return {
      confirmationCounter,
      tooltip,
      onClick
    }
  }
}
</script>

<style lang="scss" scoped>
.delete {
    position: absolute!important;
    right: 20px;
    top: 20px;
    transition: all .3s;
}
</style>
