import React from 'react'
import PropTypes from 'prop-types'
import { cn } from '@bem-react/classname'
import ResetIcon from '../icons/ResetIcon'
import './ResetButton.css'

const classes = cn('ResetButton')

const ResetButton = ({ onClick }) => (
  <div className={classes('root')} onClick={onClick}>
    <div className={classes('container')}>
      <ResetIcon />
    </div>
  </div>
)

ResetButton.propTypes = {
  onClick: PropTypes.func,
}

export default ResetButton
