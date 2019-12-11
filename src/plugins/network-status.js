import Vue from 'vue'

export default {
  install() {
    Vue.mixin({
      data: () => ({
        isOffline: false
      }),
      created() {
        window.addEventListener('online', this._setNetworkStatusOnline)
        window.addEventListener('offline', this._setNetworkStatusOffline)
      },
      beforeDestroy() {
        window.removeEventListener('online', this._setNetworkStatusOnline)
        window.removeEventListener('offline', this._setNetworkStatusOffline)
      },
      methods: {
        _setNetworkStatusOnline() {
          this.isOffline = false
        },
        _setNetworkStatusOffline() {
          this.isOffline = true
        }
      },
    })
  }
}
