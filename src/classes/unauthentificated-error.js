export default class UnauthentificatedError extends Error {
  constructor(message) {
    super('')
    this.name = 'UnauthentificatedError'
    this.message = message
  }
}
