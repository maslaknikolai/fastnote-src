<template>
  <div class="note">
    <div class="note__header">
      <Btn v-if="note.isStored" @click="saveOnServer">Save on server</Btn>
      <Date v-model="note.date_create" />
      <DeleteBtn @confirm="remove()" />
    </div>

    <Answers
      :answers="note.answers"
    />
  </div>
</template>

<script>
import { useStore } from '@/composables/use-store'

import Answers from './Answers'
import DeleteBtn from '@/components/DeleteBtn'
import Date from './Date'

export default {
  components: {
    Answers,
    DeleteBtn,
    Date
  },
  props: {
    note: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const store = useStore()

    function remove() {
      store.commit('REMOVE_NOTE', props.note)
    }
    return {
      remove
    }
  }
}
</script>

<style lang="scss" scoped>
.note {
  margin-top: 20px;
  background: rgba(#fff, .05);
  padding: 20px;
  border-radius: 20px;
  position: relative;
  transition: all .3s;
  &__header {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }
}
</style>
