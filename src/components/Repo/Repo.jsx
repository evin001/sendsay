import React from 'react'
import { cn } from '@bem-react/classname'
import './Repo.css'

const classes = cn('Repo')
const appClasses = cn('App')

const Repo = () => (
  <div className={appClasses({ text: 'center' })}>
    <a href="#" className={classes('link')}>
      @link-to-your-github
    </a>
  </div>
)

export default Repo
