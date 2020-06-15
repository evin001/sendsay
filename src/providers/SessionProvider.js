import session from 'store/storages/sessionStorage'

const SESSION_KEY = 'session'

class SessionProvider {
  static getSession() {
    return session.read(SESSION_KEY) || ''
  }

  static setSession(value) {
    session.write(SESSION_KEY, value)
  }

  static resetSession() {
    session.remove(SESSION_KEY)
  }
}

export default SessionProvider
