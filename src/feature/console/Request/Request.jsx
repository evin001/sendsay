import React from 'react'
import { cn } from '@bem-react/classname'
import TextField from '~/components/TextField'
import './Request.css'

const classes = cn('Request')

const Request = () => (
  <div className={classes('root')}>
    <TextField
      label="Запрос:"
      value=""
      name="request"
      tagClassName={classes('text-field')}
      labelClassName={classes('label')}
      labelContainerClassName={classes('label-container')}
      multiline
      fullWidth
    />
    <div className={classes('divider')} />
    <TextField
      label="Ответ:"
      value=""
      name="response"
      tagClassName={classes('text-field')}
      labelClassName={classes('label')}
      labelContainerClassName={classes('label-container')}
      multiline
      fullWidth
    />
  </div>
)

export default Request
