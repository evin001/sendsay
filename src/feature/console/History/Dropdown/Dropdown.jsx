import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { cn } from '@bem-react/classname'
import DotsIcon from '../icons/DotsIcon'
import './Dropdown.css'

const classes = cn('Dropdown')

const Dropdown = ({ title, type }) => {
  const [open, setOpen] = useState(false)
  const handleToggle = () => setOpen(!open)
  return (
    <div className={classes('root')}>
      <div className={classes('status', { type })} />
      <div className={classes('title')}>{title}</div>
      <div className={classes('dots-container')} onClick={handleToggle}>
        <DotsIcon />
      </div>
      {open && (
        <div className={classes('menu')}>
          <div className={classes('menu-item', { positive: true })}>
            Выполнить
          </div>
          <div className={classes('menu-item', { positive: true })}>
            Скопировать
          </div>
          <div className={classes('menu-divider')} />
          <div className={classes('menu-item', { negative: true })}>
            Удалить
          </div>
        </div>
      )}
    </div>
  )
}

Dropdown.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['success', 'error']).isRequired,
}

export default Dropdown
