import React from 'react'
import PropTypes from 'prop-types'
import { cn } from '@bem-react/classname'
import './Button.css'

const classes = cn('Button')

const Button = ({ children, disabled, onClick }) => (
  <button
    className={classes({ disabled, active: !disabled })}
    onClick={onClick}
  >
    {children}
  </button>
)

Button.propTypes = {
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
}

Button.defaultProps = {
  disabled: false,
}

export default Button
