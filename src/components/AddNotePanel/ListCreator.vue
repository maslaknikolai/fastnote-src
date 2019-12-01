<template>
    <ListEditor
        :list="list"
        create
        @save="createList"
        @cancel="$emit('done')"
    />
</template>

<script>
    import { useStore } from '@/composables/use-store'
    import { reactive } from '@vue/composition-api'
    import ListEditor from './ListEditor/ListEditor'

    export default {
        components: {
            ListEditor,
        },
        setup(props, { emit }) {
            const store = useStore()

            const list = reactive({
                title: '',
                required: true,
                multiple: true,
                options: [
                    {
                        name: '',
                        color: '#fff',
                        isDefault: true
                    }
                ],
            })

            function createList(list) {
                store.commit('ADD_LIST', list)
                emit('done')
            }

            return {
                list,
                createList
            }
        }
    }
</script>
