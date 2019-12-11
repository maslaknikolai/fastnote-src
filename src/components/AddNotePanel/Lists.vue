<template>
  <div class="scroll">
    <List
      v-for="(list, i) in lists"
      :key="list.id"
      :list="list"
      :list-index="i"
    />

    <CreateList />
  </div>
</template>

<script>
import { watch, ref, } from '@vue/composition-api'
import { useStore } from '@/composables/use-store'
import useFilledLists from '@/composables/use-filled-lists'

import CreateList from './CreateList'
import List from './List'

export default {
  components: {
    List,
    CreateList
  },
  setup() {
    const store = useStore()

    function copyStoredLists() {
      let copiedLists = JSON.parse(JSON.stringify(store.state.lists))

      copiedLists.forEach(list => {
        list.options.forEach(option => {
          option.selected = option.isDefault ? true : false
        })
      })

      return copiedLists
    }

    let lists = ref(copyStoredLists())
    useFilledLists.lists = lists
    useFilledLists.onNoteAdded = () => {
      lists.value = copyStoredLists()
    }

    watch(
      () => store.state.lists,
      () => {
        lists.value = copyStoredLists()
      },
      {
        lazy: true,
        deep: true
      }
    )

    return {
      lists,
    }
  },
}
</script>

<style lang="scss" scoped>
.scroll {
  height: 100%;
  padding: 40px 0 0;
  overflow: auto;
  display: flex;
  > * {
    margin-bottom: 30px;
    padding: 0 15px;
    border-right: 1px solid rgba(#fff, .05);
  }
}
</style>
