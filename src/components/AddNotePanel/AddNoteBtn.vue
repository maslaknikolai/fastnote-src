<template>
  <FloatingBtn
    :tooltip="tooltip"
    :disabled="hasErrors"
    secondary
    @click="addNote()"
  />
</template>

<script>
import { computed } from '@vue/composition-api'
import { useStore } from '@/composables/use-store'

import useFilledLists from '@/composables/use-filled-lists'
import createNoteFromFilledLists from '@/utils/create-note-from-filled-lists'

export default {
  setup() {
    const store = useStore()

    const error = computed(() => {
      if (!useFilledLists.lists.value.length) {
        return ''
      }
      const hasUnfilledList = useFilledLists.lists.value.some(list => {
        if (!list.required) {
          return false
        }
        return list.options.every(option => !option.selected)
      })

      if (hasUnfilledList) {
        return 'Please, answer all required questions'
      }

      return false
    })

    const hasErrors = computed(() => error.value !== false)

    function addNote() {
      const filledLists = JSON.parse(JSON.stringify(useFilledLists.lists.value))

      const note = createNoteFromFilledLists(filledLists)

      store.commit('ADD_NOTE', note)
      useFilledLists.noteAdded()
    }

    const tooltip = computed(() => {
      return {
        trigger: 'manual',
        show: hasErrors.value,
        content: error.value,
        placement: 'left'
      }
    })

    return {
      hasErrors,
      addNote,
      tooltip
    }
  }
}
</script>
