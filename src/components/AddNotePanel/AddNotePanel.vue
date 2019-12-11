<template>
  <div>
    <transition name="addnote__animation">
      <div
        class="addnote"
        v-if="show"
      >
        <CloseBtn @click="show = false" />

        <Lists />

        <AddNoteBtn />
      </div>
    </transition>
  </div>
</template>

<script>
import { useStore } from '@/composables/use-store'
import useAddNotePanelShow from '@/composables/use-add-note-panel-show'

import Lists from './Lists'
import AddNoteBtn from './AddNoteBtn'
import CloseBtn from './CloseBtn'

export default {
  components: {
    Lists,
    AddNoteBtn,
    CloseBtn
  },
  setup() {
    const store = useStore()
    const { show } = useAddNotePanelShow(store)

    return {
      show
    }
  }
}
</script>

<style lang="scss" scoped>
.addnote {
  position: fixed;
  z-index: 1;
	bottom: 0;
	background: var(--newitem-bg);
	width: 100%;
	left: 0;
	height: 80vh;
  max-height: 800px;
  &__animation {
    &-enter-active, &-leave-active {
      transition: all .4s;
    }
    &-enter, &-leave-active {
      bottom: -80vh !important;
    }
  }
}
</style>
