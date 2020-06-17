import { createAsyncThunk, createSlice, createSelector } from '@reduxjs/toolkit'
import md5 from 'js-md5'
import sendsay from '~/app/sendsay'
import StoreProvider from '~/providers/StoreProvider'
import { formatRequest } from './utils'

const thunkPrefix = 'console'

export const makeRequest = createAsyncThunk(
  `${thunkPrefix}/makeRequest`,
  async (request, { rejectWithValue }) => {
    const id = md5(request)
    try {
      const response = await sendsay.request(JSON.parse(request))
      return { id, request, response: formatRequest(response, false) }
    } catch (error) {
      return rejectWithValue({
        id,
        request,
        error: formatRequest(error, false),
      })
    }
  }
)

const history = StoreProvider.getHistory()
const ids = StoreProvider.getHistoryIds()

const initialState = {
  loading: false,
  history,
  ids,
  selected: ids[0] || '',
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
        state.history = {}
        state.ids = []
        state.selected = ''
        StoreProvider.resetHistory()
      }
    },
  },
  extraReducers: (build) => {
    function updateHistory(state, { payload }) {
      if (!state.history[payload.id]) {
        state.ids.unshift(payload.id)
      }
      state.history[payload.id] = payload

      StoreProvider.setHistory(state.history)
      StoreProvider.setHistoryIds(state.ids)

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
  (history, selected) => history[selected]
)

export default consoleSlice.reducer
