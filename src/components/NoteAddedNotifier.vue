<template>
    <transition name="notifier__animation">
        <div v-if="shown" class="notifier">
            Note added successfully!
        </div>
    </transition>
</template>

<script>
    import { ref, watch } from '@vue/composition-api'
    import useFilledLists from '@/composables/use-filled-lists'
    export default {
        setup() {
            const shown = ref(false)

            useFilledLists.onNoteAdded = () => {
                shown.value = true
            }

            let timeOut;
            watch(() => shown.value, () => {
                if (shown.value) {
                    clearTimeout(timeOut)
                    timeOut = setTimeout(() => {
                        shown.value = false
                    }, 1500)
                }
            })

            return {
                shown
            }
        }
    }
</script>

<style lang="scss" scoped>
.notifier {
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0 0 2px 2px;
    top: 0;
    width: 100%;
    height: 40px;
    text-align: center;
    background: var(--accent1);
    padding: 5px;
    z-index: 20;
    &__animation {
        &-enter-active, &-leave-active {
            transition: all .3s;
        }
        &-enter, &-leave-to {
            transform: translateY(-100%);
        }
    }
}
</style>
