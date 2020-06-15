import React from 'react'
import { cn } from '@bem-react/classname'
import TextField from '~/components/TextField'
import Splitter from './Splitter'
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
      rootClassName={classes('text-field-root')}
      multiline
    />
    <Splitter />
    <TextField
      label="Ответ:"
      value=""
      name="response"
      tagClassName={classes('text-field')}
      labelClassName={classes('label')}
      labelContainerClassName={classes('label-container')}
      rootClassName={classes('text-field-root')}
      multiline
    />
  </div>
)

export default Request
