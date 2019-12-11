<template>
  <div class="hamburger">
    {{ userName }}
    <button
      class="hamburger__btn"
      v-on="$listeners"
    >
      <Loading v-if="loading" />
      <Icon
        v-else
        icon="cloud-computing"
      />
    </button>
  </div>
</template>

<script>
import { computed } from '@vue/composition-api'
import { useStore } from '@/composables/use-store'

export default {
  setup() {
    const store = useStore()
    const userModule = store.state.user

    const userName = computed(() => userModule.user.name)
    const loading = computed(() => userModule.loading)

    return {
      userName,
      loading
    }
  },
}
</script>

<style lang="scss" scoped>
.hamburger {
	position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
	z-index: 4;
	top: 20px;
	right: 25px;
  &__btn {
    margin-left: 10px;
    height: 50px;
    width: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    border-radius: 50%;
    border: 1px solid rgba(#fff, .1);
    transition: border .2s;
    &:hover {
      border: 1px solid rgba(#fff, .2);
      cursor: pointer;
    }
  }
}
</style>
