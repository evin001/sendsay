import React, { useRef } from 'react'
import { cn } from '@bem-react/classname'
import TextField from '~/components/TextField'
import Splitter from './Splitter'
import './Request.css'

const classes = cn('Request')

const Request = () => {
  const root = useRef()
  const firstPane = useRef()
  const secondPane = useRef()

  const handleDrag = (x) => {
    const parentWidth = root.current.offsetWidth
    const firstPercent = (x * 100) / parentWidth

    if (firstPercent > 10 && firstPercent < 90) {
      firstPane.current.style = `width: ${firstPercent}%`
      secondPane.current.style = `width: ${100 - firstPercent}%`
    }
  }

  return (
    <div className={classes('root')} ref={root}>
      <TextField
        ref={firstPane}
        label="Запрос:"
        value=""
        name="request"
        tagClassName={classes('text-field')}
        labelClassName={classes('label')}
        labelContainerClassName={classes('label-container')}
        rootClassName={classes('text-field-root')}
        multiline
      />
      <Splitter onDrag={handleDrag} />
      <TextField
        ref={secondPane}
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
}

export default Request
