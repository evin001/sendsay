import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { cn } from '@bem-react/classname'
import useClickOutside from '~/hooks/useClickOutside'
import './DropdownItem.css'

const classes = cn('DropdownItem')

const DropdownItem = ({
  style,
  parent,
  onClickOutside,
  onDelete,
  onMake,
  onCopy,
}) => {
  const [root, setRoot] = useState()
  const handleRef = (node) => setRoot(node)

  useClickOutside(root, parent, onClickOutside)

  return (
    <div className={classes('menu')} style={style} ref={handleRef}>
      <div
        onClick={onMake}
        className={classes('menu-item', { positive: true })}
      >
        Выполнить
      </div>
      <div
        onClick={onCopy}
        className={classes('menu-item', { positive: true })}
      >
        Скопировать
      </div>
      <div className={classes('menu-divider')} />
      <div
        onClick={onDelete}
        className={classes('menu-item', { negative: true })}
      >
        Удалить
      </div>
    </div>
  )
}

DropdownItem.propTypes = {
  style: PropTypes.object,
  parent: PropTypes.object,
  onClickOutside: PropTypes.func,
  onDelete: PropTypes.func,
  onMake: PropTypes.func,
  onCopy: PropTypes.func,
}

export default DropdownItem
