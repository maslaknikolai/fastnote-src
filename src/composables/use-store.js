import { inject, provide } from '@vue/composition-api'

const storeSymbol = Symbol()

export function provideStore(store) {
  provide(storeSymbol, store)
}

export function useStore() {
  const store = inject(storeSymbol)

  return store
}
