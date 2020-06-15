import React, { useRef } from 'react'
import { cn } from '@bem-react/classname'
import useHeightScrollBar from '~/hooks/useHeightScrollBar'
import Dropdown from './Dropdown'
import ResetButton from './ResetButton'
import './History.css'

const classes = cn('History')

const History = () => {
  const dropdowns = useRef()
  const height = useHeightScrollBar(dropdowns)

  return (
    <div className={classes('root')}>
      <div
        ref={dropdowns}
        className={classes('dropdown-container')}
        style={height ? { height: `${height}px` } : {}}
      >
        <Dropdown title="track.get" type="success" />
        <Dropdown title="issue.send" type="error" />
        <Dropdown title="track.get" type="success" />
        <Dropdown title="issue.send" type="error" />
        <Dropdown title="track.get" type="success" />
        <Dropdown title="issue.send" type="error" />
        <Dropdown title="track.get" type="success" />
        <Dropdown title="issue.send" type="error" />
      </div>
      <ResetButton />
    </div>
  )
}

export default History
