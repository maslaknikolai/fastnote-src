<template>
  <div>
    <NoteAddedNotifier />
    <!-- <SideMenu /> -->
    <div class="layout">
      <Logo />
      <Notes />
    </div>
    <AddNotePanelToggleButton />
    <AddNotePanel />
  </div>
</template>

<script>
import { provideStore } from '@/composables/use-store'

import Logo from './components/Logo'
import SideMenu from './components/SideMenu'
import Notes from './components/Notes/Notes'
import AddNotePanel from './components/AddNotePanel/AddNotePanel'
import AddNotePanelToggleButton from './components/AddNotePanelToggleButton'
import NoteAddedNotifier from './components/NoteAddedNotifier'

export default {
  setup(props, {root: {$store}}) {
    provideStore($store)
  },
  components: {
    Logo,
    SideMenu,
    Notes,
    AddNotePanelToggleButton,
    AddNotePanel,
    NoteAddedNotifier
  }
}
</script>

<style lang="scss" scoped>
.layout {
  padding: 20px;
}
</style>
