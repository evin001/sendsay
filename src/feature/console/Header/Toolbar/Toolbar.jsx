import React from 'react'
import { cn } from '@bem-react/classname'
import './Toolbar.css'

const classes = cn('Toolbar')

const Toolbar = () => (
  <div className={classes('root')}>
    <span>some@email.com</span>
    <span className={classes('divider')}>:</span>
    <span>sublogin</span>
  </div>
)

export default Toolbar
