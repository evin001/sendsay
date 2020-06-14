import React from 'react'
import { useSelector } from 'react-redux'
import AuthPage from '../feature/auth/AuthPage'
import ConsolePage from '../feature/console/ConsolePage'

const Wrapper = () => {
  const { session } = useSelector((store) => ({
    session: store.auth.session,
  }))

  return !session ? <AuthPage /> : <ConsolePage />
}

export default Wrapper
