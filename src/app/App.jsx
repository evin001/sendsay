import React from 'react'
import { Provider } from 'react-redux'
import store from './store'
import Wrapper from './Wrapper'
import './App.css'

const App = () => (
  <Provider store={store}>
    <Wrapper />
  </Provider>
)

export default App
