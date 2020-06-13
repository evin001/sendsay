import React from 'react'
import PropTypes from 'prop-types'
import { cn } from '@bem-react/classname'
import './Button.css'

const classes = cn('Button')

const Button = ({ children, disabled }) => (
  <button className={classes({ disabled, active: !disabled })}>
    {children}
  </button>
)

Button.propTypes = {
  disabled: PropTypes.bool,
}

Button.defaultProps = {
  disabled: false,
}

export default Button
