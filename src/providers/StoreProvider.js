import session from 'store/storages/sessionStorage'

const SESSION_KEY = 'session'

class StoreProvider {
  static getSession() {
    return session.read(SESSION_KEY) || ''
  }

  static setSession(value) {
    session.write(SESSION_KEY, value)
  }
}

export default StoreProvider
