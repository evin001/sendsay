import { combineReducers } from '@reduxjs/toolkit'
import authReducer from '~/feature/auth/authSlice'
import consoleReducer from '~/feature/console/consoleSlice'

const rootReducer = combineReducers({
  auth: authReducer,
  console: consoleReducer,
})

export default rootReducer
