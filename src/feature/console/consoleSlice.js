import { createAsyncThunk, createSlice, createSelector } from '@reduxjs/toolkit'
import md5 from 'js-md5'
import sendsay from '~/app/sendsay'
import StoreProvider from '~/providers/StoreProvider'
import { formatRequest } from './utils'

const thunkPrefix = 'console'

const HISTORY_LIMIT = 15

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

export const requestById = createAsyncThunk(
  `${thunkPrefix}/requestById`,
  (id, { getState, dispatch }) => {
    const {
      console: { history },
    } = getState()
    dispatch(makeRequest(history[id].request))
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
      if (state.ids.length) {
        state.history = {}
        state.ids = []
        state.selected = ''
        StoreProvider.resetHistory()
      }
    },
    deleteHistory: (state, { payload }) => {
      state.ids.splice(state.ids.indexOf(payload), 1)
      delete state.history[payload]
      if (payload === state.selected) {
        state.selected = state.ids[0] || ''
      }
      StoreProvider.setHistory(state.history)
      StoreProvider.setHistoryIds(state.ids)
    },
  },
  extraReducers: (build) => {
    function updateHistory(state, { payload }) {
      if (state.ids.length === HISTORY_LIMIT) {
        const lastId = state.ids.pop()
        delete state.history[lastId]
      }

      if (state.history[payload.id]) {
        state.ids.splice(state.ids.indexOf(payload.id), 1)
      }
      state.ids.unshift(payload.id)
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

export const { setSelected, resetHistory, deleteHistory } = consoleSlice.actions

export const getHistory = (store) => store.history
export const getSelected = (store) => store.selected
export const getHistorySelected = createSelector(
  [getHistory, getSelected],
  (history, selected) => history[selected]
)

export default consoleSlice.reducer
