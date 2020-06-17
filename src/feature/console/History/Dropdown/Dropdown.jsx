import React, { useState, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import { cn } from '@bem-react/classname'
import DotsIcon from '~/components/Dots'
import ItemPortal from './ItemPortal'
import './Dropdown.css'

const classes = cn('Dropdown')

const Dropdown = ({ title, type, onSelect, onDelete, onMake, onCopy }) => {
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
    <div ref={root} className={classes('root', { shadow: open })}>
      <div className={classes('status', { type })} />
      <div onClick={onSelect} className={classes('title')}>
        {title}
      </div>
      <div className={classes('dots-container')} onClick={handleToggle}>
        <DotsIcon />
      </div>
      {open && (
        <ItemPortal
          parent={root.current}
          onClickOutside={handleToggle}
          onDelete={onDelete}
          onMake={onMake}
          onCopy={onSelect}
        />
      )}
    </div>
  )
}

Dropdown.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['success', 'error']).isRequired,
  onSelect: PropTypes.func,
  onDelete: PropTypes.func,
  onMake: PropTypes.func,
  onCopy: PropTypes.func,
}

export default Dropdown
