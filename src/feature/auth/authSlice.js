import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import Sendsay from 'sendsay-api'

const thunkPrefix = `auth`
const senday = new Sendsay()

export const signIn = createAsyncThunk(
  `${thunkPrefix}/signIn`,
  async ({ login, sublogin, password }, { rejectWithValue }) => {
    try {
      return await senday.login({ login, sublogin, password })
    } catch (err) {
      return rejectWithValue(err)
    }
  }
)

const initialState = {
  error: null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: {
    [signIn.fulfilled]: (state, action) => {
      console.log(action)
    },
    [signIn.rejected]: (state, action) => {
      state.error = { id: action.payload.id, explain: action.payload.explain }
    },
    [signIn.pending]: (state, action) => {
      console.log(action)
    },
  },
})

export default authSlice.reducer
