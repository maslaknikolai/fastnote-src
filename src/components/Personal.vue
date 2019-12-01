<template>
  <div class="personal">
    <div class="personal__title mb-3">Profile:</div>
    <Loading v-if="loading" />

    <template v-else>
      <div class="mb-2">
        Name: {{ userName }}
      </div>
      <div class="mb-2">
        Email: {{ userEmail }}
      </div>

      <Btn @click="logout()">Logout</Btn>
    </template>
  </div>
</template>

<script>
import { useStore } from '@/composables/use-store'
import { computed } from '@vue/composition-api'
import auth from '@/plugins/auth'

export default {
  setup() {
    const store = useStore()
    const userModule = store.state.user

    const userName = computed(() => userModule.user.name)
    const userEmail = computed(() => userModule.user.email)

    const loading = computed(() => userModule.loading)

    function logout () {
      auth.logout()
    }

    return {
      userName,
      userEmail,
      loading,
      logout
    }
  },
}
</script>

<style lang="scss" scoped>
.personal {
  padding: 0 20px;
  &__title {
    font-size: 1.2rem;
    font-weight: bold;
  }
}
</style>
