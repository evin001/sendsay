import React from 'react'
import { cn } from '@bem-react/classname'
import TextField from '~/components/TextField'
import Button from '~/components/Button'
import Logo from '~/components/Logo'
import Loader from '~/components/Loader'
import './AuthPage.css'

const classes = cn('AuthPage')

const AuthPage = () => (
  <div className={classes('root')}>
    <div>
      <div className={classes({ text: 'center' })}>
        <Logo />
      </div>
      <div className={classes('form-container')}>
        <div className={classes('title')}>API-консолька</div>
        <TextField label="Логин" name="login" />
        <TextField label="Сублогин" name="sublogin" optional />
        <TextField label="Пароль" name="password" type="password" />
        <Button>
          <Loader />
        </Button>
      </div>
      <div className={classes({ text: 'center' })}>
        <a href="#" className={classes('repo-link')}>
          @link-to-your-github
        </a>
      </div>
    </div>
  </div>
)

export default AuthPage
