import React from 'react'
import { cn } from '@bem-react/classname'
import FormatIcon from '../icons/FormatIcon'
import './FormatButton.css'

const classes = cn('FormatButton')

const FormatButton = () => (
  <button className={classes()}>
    <FormatIcon />
    <span className={classes('label')}>Форматировать</span>
  </button>
)

export default FormatButton
