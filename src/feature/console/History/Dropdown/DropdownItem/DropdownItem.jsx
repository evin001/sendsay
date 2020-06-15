import React from 'react'
import PropTypes from 'prop-types'
import { cn } from '@bem-react/classname'
import './DropdownItem.css'

const classes = cn('DropdownItem')

const DropdownItem = ({ style }) => (
  <div className={classes('menu')} style={style}>
    <div className={classes('menu-item', { positive: true })}>Выполнить</div>
    <div className={classes('menu-item', { positive: true })}>Скопировать</div>
    <div className={classes('menu-divider')} />
    <div className={classes('menu-item', { negative: true })}>Удалить</div>
  </div>
)

DropdownItem.propTypes = {
  style: PropTypes.object,
}

export default DropdownItem
