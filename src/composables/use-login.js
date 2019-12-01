import { ref } from '@vue/composition-api'
import ValidationError from '@/classes/validation-error'

import repositoryFactory from '@/repositories/repository-factory'
const authRepository = repositoryFactory('auth')

export default function (store) {
  const email = ref('')
  const emailErrors = ref([])
  const emailRegex = /.+@.+\..+/
  const password = ref('')
  const loading = ref(false)

  const authentificate = () => {
    loading.value = true
    authRepository.login({
      email: email.value,
      password: password.value
    })
      .then((token) => {
        store.commit('user/SET_TOKEN', token)
        store.dispatch('user/getUserInfo')
      })
      .catch(error => {
        if (error instanceof ValidationError) {
          emailErrors.value = error.messages.email || []
        }
      })
      .finally(() => {
        loading.value = false
      })
  }

  return {
    loading,
    email,
    emailRegex,
    emailErrors,
    password,

    authentificate
  }
}
