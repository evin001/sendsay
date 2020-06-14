import React from 'react'
import { cn } from '@bem-react/classname'
import ResetIcon from '../icons/ResetIcon'
import './ResetButton.css'

const classes = cn('ResetButton')

const ResetButton = () => (
  <div className={classes('root')}>
    <div className={classes('container')}>
      <ResetIcon />
    </div>
  </div>
)

export default ResetButton
