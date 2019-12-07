<template>
  <div class="registration">
    <div class="mb-2">Lets create account</div>

    <Field v-model="name" :rules="[v => !!v]" class="registration__field" label="Name" @input="nameErrors = []" />
    <FormErrors :errors="nameErrors" />

    <Field v-model="email" :rules="[v => !!v && !!v.match(emailRegex) ]" class="registration__field" label="Email" @input="emailErrors = []" />
    <FormErrors :errors="emailErrors" />

    <Field v-model="password" :rules="[v => !!v && v.length >= 6]" class="registration__field" type="password" label="Password" @input="passwordErrors = []" />
    <FormErrors :errors="passwordErrors" />

    <div class="mt-2">
      <Btn @click="registrate()" :disabled="loading">Create account</Btn>
      <Btn text @click="$emit('login')">Already have an account</Btn>
    </div>

    <Loading v-if="loading" />
  </div>
</template>

<script>
import useRegister from '@/composables/use-register'
import { useStore } from '@/composables/use-store'

export default {
  setup() {
    const store = useStore()
    const { emailRegex, loading, name, email, nameErrors, emailErrors, passwordErrors, password, registrate } = useRegister(store)

    return {
      emailRegex,
      loading,
      name,
      email,
      nameErrors,
      emailErrors,
      passwordErrors,
      password,
      registrate,
    }
  }
}
</script>

<style lang="scss" scoped>
.registration {
  padding: 0 30px;
  &__field {
    width: 100%;
  }
}
</style>
