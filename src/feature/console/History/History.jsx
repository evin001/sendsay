import React from 'react'
import { cn } from '@bem-react/classname'
import Dropdown from './Dropdown'
import ResetButton from './ResetButton'
import './History.css'

const classes = cn('History')

const History = () => (
  <div className={classes('root')}>
    <div className={classes('dropdown-container')}>
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

export default History
