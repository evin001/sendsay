import React from 'react'
import PropTypes from 'prop-types'
import { cn } from '@bem-react/classname'
import classNames from 'classnames'
import Loader from '../Loader'
import './Button.css'

const classes = cn('Button')

const Button = ({ children, disabled, loading, className, onClick }) => (
  <button
    className={classNames(classes({ disabled, active: !disabled }), className)}
    onClick={onClick}
  >
    {loading ? <Loader /> : children}
  </button>
)

Button.propTypes = {
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  className: PropTypes.string,
  onClick: PropTypes.func,
}

Button.defaultProps = {
  disabled: false,
  loading: false,
}

export default Button
