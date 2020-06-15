import React, { useState, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import { cn } from '@bem-react/classname'
import DotsIcon from '~/components/Dots'
import ItemPortal from './ItemPortal'
import './Dropdown.css'

const classes = cn('Dropdown')

const Dropdown = ({ title, type }) => {
  const [open, setOpen] = useState(false)
  const root = useRef()

  const handleToggle = () => setOpen(!open)
  const handleScroll = () => {
    if (open) {
      setOpen(false)
    }
  }

  useEffect(() => {
    if (root.current) {
      root.current.parentNode.addEventListener('scroll', handleScroll)
    }
    return () => {
      if (root.current) {
        root.current.parentNode.removeEventListener('scroll', handleScroll)
      }
    }
  })

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
