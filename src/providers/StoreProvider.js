import store from 'store'

const ASPECT_RATIO_KEY = 'aspect-ratio'
const HISTORY_KEY = 'history'

class StoreProvider {
  static getAspectRatio() {
    return store.get(ASPECT_RATIO_KEY)
  }

  static setAspectRatio(value) {
    store.set(ASPECT_RATIO_KEY, value)
  }

  static setHistory(value) {
    store.set(HISTORY_KEY, value)
  }

  static getHistory() {
    return store.get(HISTORY_KEY) || []
  }

  static resetHistory() {
    StoreProvider.setHistory([])
  }
}

export default StoreProvider
