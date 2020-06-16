import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { cn } from '@bem-react/classname'
import Button from '~/components/Button'
import Repo from '~/components/Repo'
import FormatButton from './FormatButton'
import './Actions.css'

const classes = cn('Actions')

const Actions = ({ disabled, onRequest, onFormat }) => {
  const { loading } = useSelector((store) => ({
    loading: store.console.loading,
  }))

  const handleClick = (onClick) => () => {
    if (!disabled) {
      onClick()
    }
  }

  return (
    <div className={classes('root')}>
      <Button
        loading={loading}
        disabled={disabled}
        onClick={handleClick(onRequest)}
        className={classes('send-button')}
      >
        Отправить
      </Button>
      <Repo />
      <FormatButton onClick={handleClick(onFormat)} disabled={disabled} />
    </div>
  )
}

Actions.propTypes = {
  onRequest: PropTypes.func,
  onFormat: PropTypes.func,
  disabled: PropTypes.bool,
}

Actions.defaultProps = {
  disabled: false,
}

export default Actions
