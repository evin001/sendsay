import { createAsyncThunk, createSlice, createSelector } from '@reduxjs/toolkit'
import md5 from 'js-md5'
import sendsay from '~/app/sendsay'
import StoreProvider from '~/providers/StoreProvider'

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

const history = StoreProvider.getHistory()

const initialState = {
  loading: false,
  history,
  selected: (history[0] && history[0].id) || '',
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
        StoreProvider.resetHistory()
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

      StoreProvider.setHistory(state.history)

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

export const getHistory = (store) => store.history
export const getSelected = (store) => store.selected
export const getHistorySelected = createSelector(
  [getHistory, getSelected],
  (history, selected) => history.find((item) => item.id === selected)
)

export default consoleSlice.reducer
