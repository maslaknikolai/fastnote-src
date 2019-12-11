<template>
  <div class="login">
    <div class="mb-2">
      Lets login
    </div>

    <Field
      v-model="email"
      :rules="[v => !!v && !!v.match(emailRegex)]"
      class="login__field"
      label="Email"
      @input="emailErrors = []"
    />
    <FormErrors v-model="emailErrors" />

    <Field
      v-model="password"
      class="login__field mb-4"
      type="password"
      label="Password"
    />

    <div class="mt-2">
      <Btn
        :disabled="loading"
        @click="authentificate()"
      >
        Login
      </Btn>
      <Btn
        text
        @click="$emit('register')"
      >
        Create account
      </Btn>
    </div>

    <Loading v-if="loading" />
  </div>
</template>

<script>
import useLogin from '@/composables/use-login'
import { useStore } from '@/composables/use-store'

export default {
  setup() {
    const store = useStore()
    const { email, password, emailErrors, loading, emailRegex, authentificate } = useLogin(store)

    return {
      emailErrors,
      email,
      password,
      loading,
      emailRegex,

      authentificate
    }
  },
}
</script>

<style lang="scss" scoped>
.login {
  padding: 0 30px;
  &__field {
    width: 100%;
  }
}
</style>
