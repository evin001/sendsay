import React from 'react'
import { cn } from '@bem-react/classname'
import Button from '~/components/Button'
import Repo from '~/components/Repo'
import FormatButton from './FormatButton'
import './Actions.css'

const classes = cn('Actions')

const Actions = () => (
  <div className={classes('root')}>
    <Button className={classes('send-button')}>Отправить</Button>
    <Repo />
    <FormatButton />
  </div>
)

export default Actions
