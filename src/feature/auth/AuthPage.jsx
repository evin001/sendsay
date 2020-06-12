import React from 'react'
import { cn } from '@bem-react/classname'
import TextField from '~/common/components/TextField'
import SingInButton from './SingInButton'
import './AuthPage.css'

const classes = cn('AuthPage')

const AuthPage = () => (
  <div className={classes()}>
    <div className={classes('container')}>
      <div className={classes('title')}>API-консолька</div>
      <TextField label="Логин" name="login" />
      <TextField label="Сублогин" name="sublogin" />
      <TextField label="Пароль" name="password" />
      <SingInButton />
    </div>
  </div>
)

export default AuthPage
