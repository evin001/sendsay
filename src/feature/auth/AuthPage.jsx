import React, { useState } from 'react'
import { cn } from '@bem-react/classname'
import TextField from '~/components/TextField'
import Button from '~/components/Button'
import Logo from '~/components/Logo'
import AuthForm from './AuthForm'
import './AuthPage.css'

const classes = cn('AuthPage')

const AuthPage = () => {
  const [form, setForm] = useState(new AuthForm())
  const handleChangeForm = (event) => {
    const nextForm = form.clone()
    nextForm[event.target.id].value = event.target.value
    setForm(nextForm)
  }

  return (
    <div className={classes('root')}>
      <div>
        <div className={classes({ text: 'center' })}>
          <Logo />
        </div>
        <div className={classes('form-container')}>
          <div className={classes('title')}>API-консолька</div>
          <TextField
            label="Логин"
            name="login"
            value={form.login.value}
            error={form.login.error}
            onChange={handleChangeForm}
          />
          <TextField
            label="Сублогин"
            name="sublogin"
            optional
            value={form.sublogin.value}
            error={form.sublogin.error}
            onChange={handleChangeForm}
          />
          <TextField
            label="Пароль"
            name="password"
            type="password"
            value={form.password.value}
            error={form.password.error}
            onChange={handleChangeForm}
          />
          <Button disabled={form.error}>Войти</Button>
        </div>
        <div className={classes({ text: 'center' })}>
          <a href="#" className={classes('repo-link')}>
            @link-to-your-github
          </a>
        </div>
      </div>
    </div>
  )
}

export default AuthPage
