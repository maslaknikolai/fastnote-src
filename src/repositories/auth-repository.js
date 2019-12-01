import axios from '@/plugins/axios'
import ValidationError from '@/classes/validation-error'

export default {
    login({
        email,
        password
    }) {
        const endpoint = '/auth/login'

        return axios.post(endpoint, {
            email,
            password
        })
            .then(response => {
                return response.data.token
            })
            .catch(error => {
                throw new ValidationError(error.response.data.errors)
            })
    },
    register({
        email,
        password,
        name
    }) {
        const endpoint = '/auth/register'

        return axios.post(endpoint, {
            email,
            password,
            name
        })
            .then(response => {
                return response.data.token
            })
            .catch(error => {
                throw new ValidationError(error.response.data.errors)
            })
    },
    profile() {
        const endpoint = '/auth/profile'
        return axios.get(endpoint)
            .then(response => response.data.user)
    }
}
