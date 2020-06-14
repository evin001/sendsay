import React from 'react'
import PropTypes from 'prop-types'
import { cn } from '@bem-react/classname'
import './TextField.css'

const classes = cn('TextField')

const TextField = ({ value, label, name, type, optional, error, onChange }) => (
  <div className={classes()}>
    <div className={classes('label-container')}>
      <label className={classes('label', { error })} htmlFor={name}>
        {label}
      </label>
      {optional && <small className={classes('optional')}>Опционально</small>}
    </div>
    <input
      className={classes('input', { error })}
      id={name}
      type={type}
      value={value}
      onChange={onChange}
      autoComplete="off"
    />
  </div>
)

TextField.propTypes = {
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  helperText: PropTypes.string,
  optional: PropTypes.bool,
  error: PropTypes.bool,
  onChange: PropTypes.func,
}

TextField.defaultProps = {
  type: 'text',
  optional: false,
  error: false,
}

export default TextField
