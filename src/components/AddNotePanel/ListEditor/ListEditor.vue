<template>
  <div class="editor">
    <div class="editor__title">
      <Field
        v-model="editableList.title"
        light
        label="Option list title"
        :rules="[ v => !!v ]"
      />
      <DeleteBtn
        v-if="!create"
        class="editor__delete tty5 ma-0"
        @confirm="$emit('remove')"
      />
    </div>

    <div class="mt-3">Options</div>

    <Options v-model="editableList.options" />

    <Checkbox
      v-model="editableList.multiple"
      label="Multiple allowed"
      :disabled="isManyDefaultOptions"
      class="mt-2"
    />

    <Checkbox
      v-model="editableList.required"
      label="Required list"
    />

    <Btn
      class="mt-3"
      :disabled="!!formErrors.length"
      @click="save()"
    >
      {{ create ? 'Create list' : 'Save'}}
    </Btn>

    <Btn
      class="mt-3"
      @click="$emit('cancel')"
      text
    >
      Cancel
    </Btn>

    <FormErrors v-model="formErrors" />
  </div>
</template>

<script>
import { computed, reactive, watch } from '@vue/composition-api'

import Options from './Options'
import DeleteBtn from '@/components/DeleteBtn'

export default {
  components: {
    Options,
    DeleteBtn
  },
  props: {
    create: Boolean,
    list: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props, { emit }) {
    let editableList = reactive(JSON.parse(JSON.stringify(props.list)))

    const isManyDefaultOptions = computed(() => {
      const defaultOptions = editableList.options.filter(i => i.isDefault)

      return defaultOptions.length > 1
    })

    watch(() => isManyDefaultOptions.value, (val) => {
      if (val) {
        editableList.multiple = true
      }
    })

    watch(
        () => editableList.options,
        () => {
            const { options } = editableList
            const i = options.length - 1
            const last = options[i]

            if (last.name.length > 0) {
                options.push({
                    name: '',
                    isDefault: false,
                    color: '#fff'
                })
            } else {
                const preLast = options[i - 1]
                if (preLast) {
                    if (preLast.name.length === 0) {
                        options.splice(i, 1)
                    }
                }
            }
        },
        {
            deep: true,
        }
    )

    const formErrors = computed(() => {
      const errors = []

      if (!editableList.title) {
        errors.push('The list of options should have a title')
      }
      if (editableList.options.filter(i => i.name).length < 2) {
        errors.push('The list of options should have at least 2 options')
      }

      return errors
    })

    function save() {
      emit('save', {
        ...editableList,
        options: editableList.options.filter(i => i.name)
      })
    }

    return {
      editableList,
      formErrors,
      isManyDefaultOptions,
      save
    }
  }
}
</script>

<style lang="scss" scoped>
.editor {
  &__title {
    display: flex;
    align-items: flex-start;
  }
  &__delete {
    position: static !important;
  }
}
</style>
