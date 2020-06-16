import Sendsay from 'sendsay-api'
import SessionProvider from '../providers/SessionProvider'

const sendsay = new Sendsay()

if (SessionProvider.getSession()) {
  sendsay.session = SessionProvider.getSession()
}

export default sendsay
