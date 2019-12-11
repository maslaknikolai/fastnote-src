<template>
  <FloatingBtn
    v-if="!show"
    @click="show = !show"
  />
</template>

<script>
import { useStore } from '@/composables/use-store'
import useAddNotePanelShow from '@/composables/use-add-note-panel-show'

export default {
  setup() {
    const store = useStore()

    const { show } = useAddNotePanelShow(store)

    return {
      show
    }
  }
}
</script>
