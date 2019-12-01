<template>
    <div>
        <ListEditor
            :list="storedList"
            @save="updateList($event)"
            @remove="deleteList()"
            @cancel="$emit('done')"
        />
    </div>
</template>

<script>
    import { reactive } from '@vue/composition-api'
    import { useStore } from '@/composables/use-store'
    import ListEditor from './ListEditor/ListEditor'

    export default {
        components: {
            ListEditor
        },
        props: {
            list: {
                type: Object,
                required: true
            }
        },
        setup(props, { emit }) {
            const store = useStore()

            const storedList = reactive(JSON.parse(JSON.stringify(store.state.lists.find(list => list.id === props.list.id))))

            function updateList(newList) {
                store.commit('PUT_LIST', newList)
                emit('done')
            }

            function deleteList () {
                store.commit('DELETE_LIST', list)
            }

            return {
                storedList,
                deleteList,
                updateList
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
