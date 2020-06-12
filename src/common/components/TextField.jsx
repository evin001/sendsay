import React from 'react'
import PropTypes from 'prop-types'
import { cn } from '@bem-react/classname'
import './TextField.css'

const classes = cn('TextField')

const TextField = ({ label, name, type }) => (
  <div className={classes()}>
    <label className={classes('label')} htmlFor={name}>
      {label}
    </label>
    <input className={classes('input')} id={name} type={type} />
  </div>
)

TextField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  optional: PropTypes.bool,
}

TextField.defaultProps = {
  type: 'text',
  optional: false,
}

export default TextField
