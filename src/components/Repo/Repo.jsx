import React from 'react'
import { cn } from '@bem-react/classname'
import './Repo.css'

const classes = cn('Repo')
const appClasses = cn('App')

const Repo = () => (
  <div className={appClasses({ text: 'center' })}>
    <a href="https://github.com/evin001/sendsay" className={classes('link')}>
      @evin001
    </a>
  </div>
)

export default Repo
