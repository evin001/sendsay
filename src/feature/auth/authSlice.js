import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import SessionProvider from '~/providers/SessionProvider'
import sendsay from '~/app/sendsay'

const thunkPrefix = `auth`

export const signIn = createAsyncThunk(
  `${thunkPrefix}/signIn`,
  async ({ login, sublogin, password }, { rejectWithValue }) => {
    try {
      await sendsay.login({ login, sublogin, password })
      SessionProvider.setSession(sendsay.session)
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
    SessionProvider.resetSession()
  }
})

export const pingPong = createAsyncThunk(
  `${thunkPrefix}/pingPong`,
  async () => {
    const res = await sendsay.request({ action: 'pong' })
    return {
      account: res.account,
      sublogin: res.sublogin,
    }
  }
)

const initialState = {
  error: null,
  loading: false,
  session: SessionProvider.getSession(),
  account: '',
  sublogin: '',
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
    // PingPong
    [pingPong.fulfilled]: (state, action) => {
      state.account = action.payload.account
      state.sublogin = action.payload.sublogin
    },
  },
})

export default authSlice.reducer
