import React from 'react'
import PropTypes from 'prop-types'
import { cn } from '@bem-react/classname'
import classNames from 'classnames'
import './Button.css'

const classes = cn('Button')

const Button = ({ children, disabled, className, onClick }) => (
  <button
    className={classNames(classes({ disabled, active: !disabled }), className)}
    onClick={onClick}
  >
    {children}
  </button>
)

Button.propTypes = {
  disabled: PropTypes.bool,
  className: PropTypes.string,
  onClick: PropTypes.func,
}

Button.defaultProps = {
  disabled: false,
}

export default Button
