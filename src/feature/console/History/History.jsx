import React, { useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { cn } from '@bem-react/classname'
import useHeightScrollBar from '~/hooks/useHeightScrollBar'
import {
  setSelected,
  resetHistory,
  deleteHistory,
  requestById,
} from '../consoleSlice'
import { copyToClipboard } from '../utils'
import Dropdown from './Dropdown'
import ResetButton from './ResetButton'
import './History.css'

const classes = cn('History')

const History = () => {
  const dropdowns = useRef()
  const dispatch = useDispatch()
  const { history, ids } = useSelector((store) => ({
    history: store.console.history,
    ids: store.console.ids,
  }))

  const height = useHeightScrollBar(dropdowns, ids.length)

  const handleSelected = (id) => () => {
    dispatch(setSelected(id))
  }

  const handleReset = () => {
    dispatch(resetHistory())
  }

  const handleDelete = (id) => () => {
    dispatch(deleteHistory(id))
  }

  const handleMake = (id) => () => {
    dispatch(requestById(id))
  }

  const handleCopy = (id) => () => {
    if (copyToClipboard(history[id].request)) {
      console.log('copy!')
    }
  }

  return (
    <div className={classes('root')}>
      <div
        ref={dropdowns}
        className={classes('dropdown-container')}
        style={height ? { height: `${height}px` } : {}}
      >
        {ids.map((id) => (
          <Dropdown
            key={id}
            type={history[id].response ? 'success' : 'error'}
            title={JSON.parse(history[id].request).action || '???'}
            onSelect={handleSelected(id)}
            onDelete={handleDelete(id)}
            onMake={handleMake(id)}
            onCopy={handleCopy(id)}
          />
        ))}
      </div>
      <ResetButton onClick={handleReset} />
    </div>
  )
}

export default History
