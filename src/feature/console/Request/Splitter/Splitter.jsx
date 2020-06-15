import React, { useState, useRef } from 'react'
import PropTypes from 'prop-types'
import { cn } from '@bem-react/classname'
import { useMouseEvents } from 'beautiful-react-hooks'
import DotsIcon from '~/components/Dots'
import './Splitter.css'

const classes = cn('Splitter')

const Splitter = ({ onDrag }) => {
  const root = useRef()
  const [resize, setResize] = useState(false)
  const { onMouseUp, onMouseMove } = useMouseEvents()

  const handleMouseDown = () => setResize(true)

  onMouseUp(() => setResize(false))

  onMouseMove((event) => {
    if (resize) {
      onDrag(event.x)
    }
  })

  return (
    <div
      ref={root}
      onMouseDown={handleMouseDown}
      className={classes({ resize })}
    >
      <DotsIcon />
    </div>
  )
}

Splitter.propTypes = {
  onDrag: PropTypes.func,
}

export default Splitter
