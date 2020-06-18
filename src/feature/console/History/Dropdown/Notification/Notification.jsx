import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import { cn } from '@bem-react/classname'
import { useDidMount } from 'beautiful-react-hooks'
import './Notification.css'

const classes = cn('Notification')

const Notification = ({ message, onAnimationEnd }) => {
  const root = useRef()

  useDidMount(() => {
    root.current.addEventListener('animationend', onAnimationEnd)
  })

  return (
    <div ref={root} className={classes('root')}>
      {message}
    </div>
  )
}

Notification.propTypes = {
  message: PropTypes.string,
  onAnimationEnd: PropTypes.func,
}

export default Notification
