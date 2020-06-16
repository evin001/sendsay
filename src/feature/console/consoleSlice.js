import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import md5 from 'js-md5'
import sendsay from '~/app/sendsay'

const thunkPrefix = 'console'

export const makeRequest = createAsyncThunk(
  `${thunkPrefix}/makeRequest`,
  async (request, { rejectWithValue }) => {
    const id = md5(request)
    try {
      const response = await sendsay.request(JSON.parse(request))
      return { id, request, response }
    } catch (error) {
      return rejectWithValue({ id, request, error })
    }
  }
)

const initialState = {
  loading: false,
  history: [],
  selected: '',
}

const consoleSlice = createSlice({
  name: 'console',
  initialState,
  reducers: {
    setSelected: (state, { payload }) => {
      state.selected = payload
    },
    resetHistory: (state) => {
      if (state.history.length) {
        state.history = []
      }
    },
  },
  extraReducers: (build) => {
    function updateHistory(state, { payload }) {
      const historyIndex = state.history.findIndex(
        (item) => item.id === payload.id
      )

      if (~historyIndex) {
        state.history[historyIndex] = payload
      } else {
        state.history.push(payload)
      }

      state.selected = payload.id
      state.loading = false
    }

    build.addCase(makeRequest.fulfilled, updateHistory)
    build.addCase(makeRequest.rejected, updateHistory)

    build.addCase(makeRequest.pending, (state) => {
      state.loading = true
    })
  },
})

export const { setSelected, resetHistory } = consoleSlice.actions

export default consoleSlice.reducer
