import React from 'react'
import { useSelector } from 'react-redux'
import AuthPage from '../feature/auth/AuthPage'

const Wrapper = () => {
  const { session } = useSelector((store) => ({
    session: store.auth.session,
  }))

  return !session ? <AuthPage /> : session
}

export default Wrapper
