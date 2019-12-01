<template>
    <div class="answers">
        <Answer
            v-for="(answer, i) in answers"
            :key="answer.name"
            :answer="answer"
        />
    </div>
</template>

<script>
    import Answer from './Answer'
    export default {
        components: {
            Answer
        },
        props: {
            answers: {
                type: Array,
                required: true
            }
        }
    }
</script>

<style lang="scss" scoped>
.answers {
    flex-wrap: wrap;
    width: calc(100% - 60px);
    @include media-max(600px) {
        display: block;
    }
}
</style>
