import React from 'react'
import { cn } from '@bem-react/classname'
import Header from './Header'
import History from './History'
import Request from './Request'
import Actions from './Actions'
import './ConsolePage.css'

const classes = cn('ConsolePage')

const ConsolePage = () => (
  <div className={classes('root')}>
    <Header />
    <History />
    <Request />
    <Actions />
  </div>
)

export default ConsolePage
