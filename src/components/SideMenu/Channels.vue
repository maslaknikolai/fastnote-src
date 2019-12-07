<template>
  <div>
    <Channel
      v-for="channel in channels"
      :key="channel.id"
      :channel="channel"
    />
  </div>
</template>

<script>
  import { useStore } from '@/composables/use-store'
  import { computed } from '@vue/composition-api'

  export default {
    setup() {
      const store = useStore()
      const userModule = store.state.user

      const channels = computed(() => userModule.user.channels)

      return {
        channels
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
