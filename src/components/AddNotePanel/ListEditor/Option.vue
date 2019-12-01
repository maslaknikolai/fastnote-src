<template>
    <div class="option">
        <Checkbox
            v-model="option.isDefault"
            v-tooltip="'Set if option should be selected by default'"
        />
        <Field
            v-model="option.name"
            light
            label="Option text"
        />
        <Color
            v-model="option.color"
            class="mt-3"
            changeable
        />
    </div>
</template>

<script>
    import Color from '@/components/Color'

    export default {
        components: {
            Color
        },
        model: {
            prop: 'option'
        },
        props: {
            option: {
                type: Object,
                default: () => ({})
            }
        }
    }
</script>

<style lang="scss" scoped>
.option {
    display: flex;
}
</style>
