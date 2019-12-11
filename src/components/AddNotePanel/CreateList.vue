<template>
  <div class="create">
    <div v-if="!creating">
      <div
        v-if="!lists.length"
        class="mb-3"
      >
        Lets create your first list of options
      </div>
      <Btn @click="creating = true">
        Create new list
      </Btn>
    </div>

    <ListCreator
      v-else
      @done="creating = false"
    />
  </div>
</template>

<script>
import { ref, computed } from '@vue/composition-api'
import { useStore } from '@/composables/use-store'
import ListCreator from './ListCreator'

export default {
  components: {
    ListCreator,
  },
  setup() {
    const store = useStore()

    const creating = ref(false)
    const lists = computed(() => store.state.lists)

    return {
      creating,
      lists
    }
  }
}
</script>

<style lang="scss" scoped>
.create {
    flex: 330px 0 0;
}
</style>
