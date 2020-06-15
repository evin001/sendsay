import store from 'store'

const ASPECT_RATIO = 'aspect-ratio'

class StoreProvider {
  static getAspectRatio() {
    return store.get(ASPECT_RATIO)
  }

  static setAspectRatio(value) {
    store.set(ASPECT_RATIO, value)
  }
}

export default StoreProvider
