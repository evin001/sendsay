import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import Sendsay from 'sendsay-api'
import StoreProvider from '~/providers/StoreProvider'

const thunkPrefix = `auth`
const sendsay = new Sendsay()

export const signIn = createAsyncThunk(
  `${thunkPrefix}/signIn`,
  async ({ login, sublogin, password }, { rejectWithValue }) => {
    try {
      await sendsay.login({ login, sublogin, password })
      StoreProvider.setSession(sendsay.session)
      return sendsay.session
    } catch (err) {
      return rejectWithValue(
        err.id ? { id: err.id, explain: err.explain } : err.message
      )
    }
  }
)

export const logout = createAsyncThunk(`${thunkPrefix}/logout`, async () => {
  try {
    await sendsay.request({ action: 'logout' })
  } catch (err) {
    throw err
  } finally {
    StoreProvider.resetSession()
  }
})

const initialState = {
  error: null,
  loading: false,
  session: StoreProvider.getSession(),
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: {
    // SignIn
    [signIn.fulfilled]: (state, action) => {
      state.session = action.payload
      state.loading = false
    },
    [signIn.rejected]: (state, action) => {
      state.error = action.payload
      state.loading = false
    },
    [signIn.pending]: (state) => {
      state.loading = true
      state.error = null
    },
    // Logout
    [logout.fulfilled]: (state) => {
      state.session = ''
    },
    [logout.rejected]: (state) => {
      state.session = ''
    },
  },
})

export default authSlice.reducer
