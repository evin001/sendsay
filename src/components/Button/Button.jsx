import React from 'react'
import PropTypes from 'prop-types'
import { cn } from '@bem-react/classname'
import './Button.css'

const classes = cn('Button')

const Button = ({ label, disabled }) => (
  <button className={classes({ disabled, active: !disabled })}>{label}</button>
)

Button.propTypes = {
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
}

Button.defaultProps = {
  disabled: false,
}

export default Button
