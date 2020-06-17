import store from 'store'

const ASPECT_RATIO_KEY = 'aspect-ratio'
const HISTORY_KEY = 'history'
const HISTORY_IDS_KEY = 'history-ids'

class StoreProvider {
  static getAspectRatio() {
    return store.get(ASPECT_RATIO_KEY)
  }

  static setAspectRatio(value) {
    store.set(ASPECT_RATIO_KEY, value)
  }

  static getHistory() {
    return store.get(HISTORY_KEY) || {}
  }

  static setHistory(value) {
    store.set(HISTORY_KEY, value)
  }

  static getHistoryIds() {
    return store.get(HISTORY_IDS_KEY) || []
  }

  static setHistoryIds(value) {
    store.set(HISTORY_IDS_KEY, value)
  }

  static resetHistory() {
    StoreProvider.setHistory({})
    StoreProvider.setHistoryIds([])
  }
}

export default StoreProvider
