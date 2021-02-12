import { provide, inject } from '@nuxtjs/composition-api'

const StoreSymbol = Symbol('state')

export function provideStore(store) {
  provide(StoreSymbol, store)
}

export function useStore() {
  const store = inject(StoreSymbol)
  if (!store) {
    throw new Error('no store found')
  }
  return store
}
