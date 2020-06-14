import React, { useState } from 'react'
import screenfull from 'screenfull'
import { cn } from '@bem-react/classname'
import FullscreenIcon from '../icons/FullscreenIcon'
import FullscreenOutputIcon from '../icons/FullscreenOutputIcon'
import './FullscreenButton.css'

const classes = cn('FullscreenButton')

const FullscreenButton = () => {
  const [open, setOpen] = useState(false)

  const handleToggle = () => {
    if (screenfull.isEnabled) {
      screenfull.toggle()
      setOpen(!open)
    }
  }

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleToggle()
    }
  }

  return (
    <div
      tabIndex={0}
      onClick={handleToggle}
      onKeyPress={handleKeyPress}
      className={classes('root')}
    >
      {open ? <FullscreenOutputIcon /> : <FullscreenIcon />}
    </div>
  )
}

export default FullscreenButton
