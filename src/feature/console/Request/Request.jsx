import React, { useRef } from 'react'
import { cn } from '@bem-react/classname'
import classNames from 'classnames'
import TextField from '~/components/TextField'
import Splitter from './Splitter'
import './Request.css'

const classes = cn('Request')

const Request = () => {
  const root = useRef()
  const firstPane = useRef()
  const secondPane = useRef()

  const handleDrag = (x, splitterWidth) => {
    const parentWidth = root.current.offsetWidth - splitterWidth
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
        rootClassName={classNames(
          classes('text-field-root'),
          classes('first-pane')
        )}
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
        rootClassName={classNames(
          classes('text-field-root'),
          classes('second-pane')
        )}
        multiline
      />
    </div>
  )
}

export default Request
