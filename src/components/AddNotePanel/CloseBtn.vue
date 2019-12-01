<template functional>
    <button class="close-btn" @click="listeners.click">
        <Icon class="close-btn__icon" icon="fad-plus"/>
    </button>
</template>

<script>
    export default { }
</script>

<style lang="scss" scoped>
.close-btn {
    cursor: pointer;
    position: absolute;
    top: -25px;
    right: 25px;
    width: 50px;
    height: 50px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    font: 400 2rem var(--default-font);
    border: 2px solid var(--accent2);
    border-radius: 50px;
    &__icon {
        color: #fff;
        height: 24px;
        transform: rotate(45deg);
    }
  }
</style>
