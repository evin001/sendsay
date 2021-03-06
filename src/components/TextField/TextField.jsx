import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import { cn } from '@bem-react/classname'
import classNames from 'classnames'
import './TextField.css'

const classes = cn('TextField')

const TextField = ({
  value,
  label,
  name,
  type,
  optional,
  error,
  multiline,
  readOnly,
  tagClassName,
  labelClassName,
  labelContainerClassName,
  rootClassName,
  onChange,
  componentRef,
}) => {
  const Tag = multiline ? 'textarea' : 'input'
  return (
    <div className={rootClassName} ref={componentRef}>
      <div
        className={classNames(
          classes('label-container'),
          labelContainerClassName
        )}
      >
        <label
          className={classNames(classes('label', { error }), labelClassName)}
          htmlFor={name}
        >
          {label}
        </label>
        {optional && <small className={classes('optional')}>Опционально</small>}
      </div>
      <Tag
        className={classNames(
          classes('tag', { input: !multiline, multiline, error }),
          tagClassName
        )}
        id={name}
        type={type}
        value={value}
        onChange={onChange}
        autoComplete="off"
        readOnly={readOnly}
      />
    </div>
  )
}

TextField.propTypes = {
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  tagClassName: PropTypes.string,
  labelClassName: PropTypes.string,
  labelContainerClassName: PropTypes.string,
  rootClassName: PropTypes.string,
  optional: PropTypes.bool,
  error: PropTypes.bool,
  multiline: PropTypes.bool,
  readOnly: PropTypes.bool,
  onChange: PropTypes.func,
  componentRef: PropTypes.object,
}

TextField.defaultProps = {
  type: 'text',
  optional: false,
  error: false,
  multiline: false,
  readOnly: false,
}

export default forwardRef((props, ref) => (
  <TextField {...props} componentRef={ref} />
))
