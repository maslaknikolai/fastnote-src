import { ref } from '@vue/composition-api'
import ValidationError from '@/classes/validation-error'

import repositoryFactory from '@/repositories/repository-factory'
const authRepository = repositoryFactory('auth')

export default function (store) {
  const emailRegex = /.+@.+\..+/
  const loading = ref(false)

  const name = ref('')
  const nameErrors = ref([])

  const email = ref('')
  const emailErrors = ref([])

  const password = ref('')
  const passwordErrors = ref([])

  const registrate = () => {
    loading.value = true
    authRepository.register({
      email: email.value,
      password: password.value,
      name: name.value
    })
      .then(() => {
        store.dispatch('user/getUserInfo')
      })
      .catch(error => {
        if (error instanceof ValidationError) {
          nameErrors.value = error.messages.name || []
          emailErrors.value = error.messages.email || []
          passwordErrors.value = error.messages.password || []
        }

        loading.value = false
      })
  }

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
