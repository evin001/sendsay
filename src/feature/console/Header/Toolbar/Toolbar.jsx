import React, { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useDidMount } from 'beautiful-react-hooks'
import { cn } from '@bem-react/classname'
import { pingPong } from '~/feature/auth/authSlice'
import './Toolbar.css'

const classes = cn('Toolbar')

const Toolbar = () => {
  const dispatch = useDispatch()
  const { account, sublogin } = useSelector((store) => ({
    account: store.auth.account,
    sublogin: store.auth.sublogin,
  }))

  useDidMount(() => {
    dispatch(pingPong())
  })

  return (
    <div className={classes('root')}>
      <span>{account || '...'}</span>
      {sublogin && account !== sublogin && (
        <Fragment>
          <span className={classes('divider')}>:</span>
          <span>{sublogin}</span>
        </Fragment>
      )}
    </div>
  )
}

export default Toolbar
