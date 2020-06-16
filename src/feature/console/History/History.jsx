import React, { useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { cn } from '@bem-react/classname'
import useHeightScrollBar from '~/hooks/useHeightScrollBar'
import { setSelected } from '../consoleSlice'
import Dropdown from './Dropdown'
import ResetButton from './ResetButton'
import './History.css'

const classes = cn('History')

const History = () => {
  const dropdowns = useRef()
  const dispatch = useDispatch()
  const { history } = useSelector((store) => ({
    history: store.console.history,
  }))

  const height = useHeightScrollBar(dropdowns)

  const handleSelected = (id) => () => {
    dispatch(setSelected(id))
  }

  return (
    <div className={classes('root')}>
      <div
        ref={dropdowns}
        className={classes('dropdown-container')}
        style={height ? { height: `${height}px` } : {}}
      >
        {history.map((item) => (
          <Dropdown
            key={item.id}
            type={item.response ? 'success' : 'error'}
            title={JSON.parse(item.request).action || '???'}
            onClick={handleSelected(item.id)}
          />
        ))}
      </div>
      <ResetButton />
    </div>
  )
}

export default History
