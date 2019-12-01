<template>
  <div class="list">
    <EditList
      v-if="editing"
      :list="list"
      @done="editing = false"
    />

    <ListOptionsSelect
      v-else
      :list="list"
      @edit="editing = true"
    />
  </div>
</template>

<script>
import { ref } from '@vue/composition-api'

import ListOptionsSelect from './ListOptionsSelect'
import EditList from './EditList'

export default {
  components: {
    ListOptionsSelect,
    EditList
  },
  props: {
    list: {
      type: Object,
      required: true
    }
  },
  setup() {
    const editing = ref(false)

    return {
      editing
    }
  }
}
</script>

<style lang="scss" scoped>
.list {
  position: relative;
  overflow: auto;
  flex: 300px 0 0;
}
</style>
