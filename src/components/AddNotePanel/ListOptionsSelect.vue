<template>
    <div>
        <h3 :class="['title mb-4', {'title--required': list.required}]">
            <Btn icon @click="$emit('edit')">
                <Icon icon="fas-pen" size="15" />
            </Btn>
            {{ list.title }}
        </h3>
        <ListOption
            v-for="(option, i) in list.options"
            :key="i"
            :option="option"
            @click="optionCheckHandler(option)"
        />
        <FormErrors class="mb-2" v-model="errors" />
    </div>
</template>

<script>
    import { computed } from '@vue/composition-api'
    import { useStore } from '@/composables/use-store'
    import ListOption from './ListOption'

    export default {
        components: {
            ListOption
        },
        props: {
            list: {
                type: Object,
                required: true
            }
        },
        setup(props) {
            const store = useStore()

            const errors = computed(() => {
                const errors = []
                if (props.list.required) {
                    const selectedOptions = props.list.options.filter(i => i.selected)
                    if (!selectedOptions.length) {
                        if (props.list.multiple) {
                            errors.push('Select at least one option')
                        } else {
                            errors.push('Select any option')
                        }
                    }
                }
                return errors
            })

            function optionCheckHandler(option) {
                if (!props.list.multiple) {
                    props.list.options.forEach(item => {
                        if (item !== option) {
                            item.selected = false
                        }
                    })
                }

                option.selected = !option.selected
            }

            return {
                errors,
                optionCheckHandler
            }
        }
    }
</script>

<style lang="scss" scoped>
.title {
    font: 500 1.5rem var(--default-font);
    &--required {
        font-weight: 600;
    }
}
</style>
