import React, { useState, useRef } from 'react'
import PropTypes from 'prop-types'
import { cn } from '@bem-react/classname'
import DotsIcon from '../icons/DotsIcon'
import ItemPortal from './ItemPortal'
import './Dropdown.css'

const classes = cn('Dropdown')

const Dropdown = ({ title, type }) => {
  const [open, setOpen] = useState(false)
  const root = useRef()

  const handleToggle = () => setOpen(!open)

  return (
    <div className={classes('root', { shadow: open })} ref={root}>
      <div className={classes('status', { type })} />
      <div className={classes('title')}>{title}</div>
      <div className={classes('dots-container')} onClick={handleToggle}>
        <DotsIcon />
      </div>
      {open && (
        <ItemPortal parent={root.current} onClickOutside={handleToggle} />
      )}
    </div>
  )
}

Dropdown.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['success', 'error']).isRequired,
}

export default Dropdown
