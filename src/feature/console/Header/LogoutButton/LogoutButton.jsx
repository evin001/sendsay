import React from 'react'
import { cn } from '@bem-react/classname'
import { useDispatch } from 'react-redux'
import { logout } from '~/feature/auth/authSlice'
import LogoutIcon from '../icons/LogoutIcon'
import './LogoutButton.css'

const classes = cn('LogoutButton')

const LogoutButton = () => {
  const dispatch = useDispatch()
  const handleLogout = () => dispatch(logout())
  return (
    <div className={classes('root')} onClick={handleLogout}>
      <span className={classes('label')}>Выйти</span>
      <LogoutIcon />
    </div>
  )
}

export default LogoutButton
