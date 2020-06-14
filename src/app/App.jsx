import React from 'react'
import { Provider } from 'react-redux'
import AuthPage from '../feature/auth/AuthPage'
import store from './store'
import './App.css'

const App = () => (
  <Provider store={store}>
    <AuthPage />
  </Provider>
)

export default App
