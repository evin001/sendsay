import React, { useState } from 'react'
import screenfull from 'screenfull'
import FullscreenIcon from '../icons/FullscreenIcon'
import FullscreenOutputIcon from '../icons/FullscreenOutputIcon'

const FullscreenButton = () => {
  const [open, setOpen] = useState(false)
  const handleToggle = () => {
    if (screenfull.isEnabled) {
      screenfull.toggle()
      setOpen(!open)
    }
  }
  return (
    <div onClick={handleToggle}>
      {open ? <FullscreenOutputIcon /> : <FullscreenIcon />}
    </div>
  )
}

export default FullscreenButton
