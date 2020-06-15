import React, { useState } from 'react'
import { cn } from '@bem-react/classname'
import { useDispatch, useSelector } from 'react-redux'
import { signIn } from './authSlice'
import TextField from '~/components/TextField'
import Button from '~/components/Button'
import Logo from '~/components/Logo'
import Alert from '~/components/Alert'
import Loader from '~/components/Loader'
import Repo from '~/components/Repo'
import AuthForm from './AuthForm'
import './AuthPage.css'

const classes = cn('AuthPage')
const appClasses = cn('App')

const AuthPage = () => {
  const [form, setForm] = useState(new AuthForm())
  const dispatch = useDispatch()
  const { error, loading } = useSelector((store) => ({
    error: store.auth.error,
    loading: store.auth.loading,
  }))

  const handleChangeForm = (event) => {
    const nextForm = form.clone()
    nextForm[event.target.id].value = event.target.value
    setForm(nextForm)
  }

  const handleSignIn = () => {
    if (!loading) {
      dispatch(
        signIn({
          login: form.login.value,
          sublogin: form.sublogin.value,
          password: form.password.value,
        })
      )
    }
  }

  return (
    <div className={classes('root')}>
      <div>
        <div className={appClasses({ text: 'center' })}>
          <Logo />
        </div>
        <div className={classes('form-container')}>
          <div className={classes('title')}>API-консолька</div>
          {error && (
            <Alert description={JSON.stringify(error)} title="Вход не вышел" />
          )}
          <TextField
            label="Логин"
            name="login"
            value={form.login.value}
            error={form.login.error}
            onChange={handleChangeForm}
            tagClassName={classes('text-field')}
          />
          <TextField
            label="Сублогин"
            name="sublogin"
            optional
            value={form.sublogin.value}
            error={form.sublogin.error}
            onChange={handleChangeForm}
            tagClassName={classes('text-field')}
          />
          <TextField
            label="Пароль"
            name="password"
            type="password"
            value={form.password.value}
            error={form.password.error}
            onChange={handleChangeForm}
            tagClassName={classes('text-field')}
          />
          <Button
            disabled={form.error}
            onClick={handleSignIn}
            className={classes('sign-in-button')}
          >
            {loading ? <Loader /> : 'Войти'}
          </Button>
        </div>
        <Repo />
      </div>
    </div>
  )
}

export default AuthPage
