import React, { useRef } from 'react'
import { cn } from '@bem-react/classname'
import { useDidMount } from 'beautiful-react-hooks'
import classNames from 'classnames'
import TextField from '~/components/TextField'
import StoreProvider from '~/providers/StoreProvider'
import Splitter from './Splitter'
import './Request.css'

const classes = cn('Request')

const Request = () => {
  const root = useRef()
  const firstPane = useRef()
  const secondPane = useRef()

  const updatePercentage = (first, second) => {
    firstPane.current.style = `width: ${first}%`
    secondPane.current.style = `width: ${second}%`
  }

  useDidMount(() => {
    const percents = StoreProvider.getAspectRatio()
    if (percents) {
      updatePercentage(percents.first, percents.second)
    }
  })

  const handleDrag = (x, splitterWidth) => {
    const parentWidth = root.current.offsetWidth - splitterWidth
    const firstPercent = (x * 100) / parentWidth
    const secondPercent = 100 - firstPercent

    if (firstPercent > 10 && firstPercent < 90) {
      updatePercentage(firstPercent, secondPercent)
      StoreProvider.setAspectRatio({
        first: firstPercent,
        second: secondPercent,
      })
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
