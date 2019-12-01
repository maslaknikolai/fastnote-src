import { computed } from '@vue/composition-api'

export default function (store) {
    const show = computed({
        get() {
            return store.state.addNotePanelShow
        },
        set(val) {
            store.commit('SET_ADD_NOTE_PANEL_SHOW', val)
        }
    })

    return {
        show
    }
}
