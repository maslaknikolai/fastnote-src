import Vue from 'vue'

const methods = {
  vibrate: (duration = 60) => {
    navigator.vibrate(duration)
  }
}

export default {
  install () {
    Object.entries(methods).forEach(([name, method]) => {
      Vue.prototype['$' + name] = method
    })
  }
}
