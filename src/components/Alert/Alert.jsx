import React from 'react'
import PropTypes from 'prop-types'
import { cn } from '@bem-react/classname'
import Icon from './Icon'
import './Alert.css'

const classes = cn('Alert')

const Alert = ({ title, description }) => (
  <div className={classes('root')}>
    <div className={classes('icon')}>
      <Icon />
    </div>
    <div className={classes('container')}>
      <div className={classes('title')}>{title}</div>
      <div className={classes('description')}>{description}</div>
    </div>
  </div>
)

Alert.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default Alert
