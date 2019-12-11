<template>
  <div class="notes">
    <Empty v-if="!notes.length" />

    <transition-group
      v-else
      name="notes__animation"
    >
      <Note
        v-for="note in notes"
        :key="note.date_create"
        :note="note"
      />
    </transition-group>
  </div>
</template>

<script>
import { useStore } from '@/composables/use-store'
import { computed } from '@vue/composition-api'

import Note from './Note/Note'
import Empty from './Empty'

export default {
  components: {
    Note,
    Empty
  },
  setup() {
    const store = useStore()
    const notes = computed(() => store.state.notes)
    const sortedNotes = computed(() =>{
      return notes.value.slice().sort((a, b) => b.date_create - a.date_create)
    })

    return {
      notes: sortedNotes
    }
  }
}
</script>

<style lang="scss" scoped>
.notes {
  &__animation {
    &-enter-active, &-leave-active {
        transition: all .5s;
    }
    &-enter, &-leave-active {
        opacity: 0 !important;
        margin-bottom: -90px;
    }
  }
}
</style>
