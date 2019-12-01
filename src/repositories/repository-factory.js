import auth from './auth-repository'

const repositories = {
  auth
}

export default function (name) {
  return repositories[name]
}
