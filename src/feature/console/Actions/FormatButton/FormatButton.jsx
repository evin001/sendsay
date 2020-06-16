import React from 'react'
import PropTypes from 'prop-types'
import { cn } from '@bem-react/classname'
import FormatIcon from '../icons/FormatIcon'
import './FormatButton.css'

const classes = cn('FormatButton')

const FormatButton = ({ disabled, onClick }) => (
  <button
    className={classes({ disabled, active: !disabled })}
    onClick={onClick}
  >
    <FormatIcon />
    <span className={classes('label')}>Форматировать</span>
  </button>
)

FormatButton.propTypes = {
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
}

export default FormatButton
