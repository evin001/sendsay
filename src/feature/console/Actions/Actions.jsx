import React from 'react'
import PropTypes from 'prop-types'
import { cn } from '@bem-react/classname'
import Button from '~/components/Button'
import Repo from '~/components/Repo'
import FormatButton from './FormatButton'
import './Actions.css'

const classes = cn('Actions')

const Actions = ({ disabled, onFormat }) => (
  <div className={classes('root')}>
    <Button className={classes('send-button')} disabled={disabled}>
      Отправить
    </Button>
    <Repo />
    <FormatButton onClick={onFormat} disabled={disabled} />
  </div>
)

Actions.propTypes = {
  onFormat: PropTypes.func,
  disabled: PropTypes.bool,
}

Actions.defaultProps = {
  disabled: false,
}

export default Actions
