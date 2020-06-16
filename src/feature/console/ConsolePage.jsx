import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { cn } from '@bem-react/classname'
import { makeRequest, getHistorySelected } from './consoleSlice'
import Header from './Header'
import History from './History'
import Request from './Request'
import Actions from './Actions'
import ConsoleForm from './ConsoleForm'
import { formatRequest } from './utils'
import './ConsolePage.css'

const classes = cn('ConsolePage')

const ConsolePage = () => {
  const dispatch = useDispatch()
  const { historySelected } = useSelector(
    (store) => ({
      historySelected: getHistorySelected(store.console),
    }),
    shallowEqual
  )
  const [form, setForm] = useState(new ConsoleForm())

  useEffect(() => {
    if (historySelected) {
      const nextForm = form.clone()
      nextForm.request.value = historySelected.request
      nextForm.response.value =
        historySelected.response || historySelected.error
      nextForm.response.error = historySelected.error
      setForm(nextForm)
    } else {
      setForm(new ConsoleForm())
    }
  }, [historySelected])

  const handleChangeRequest = (event) => {
    const nextForm = form.clone()
    nextForm.request.value = event.target.value
    setForm(nextForm)
  }

  const handleFormat = () => {
    handleChangeRequest({
      target: { value: formatRequest(form.request.value) },
    })
  }

  const handleRequest = () => {
    dispatch(makeRequest(formatRequest(form.request.value)))
  }

  return (
    <div className={classes('root')}>
      <Header />
      <History />
      <Request
        request={form.request.toObject()}
        response={form.response.toObject()}
        onChange={handleChangeRequest}
      />
      <Actions
        onRequest={handleRequest}
        onFormat={handleFormat}
        disabled={form.request.error}
      />
    </div>
  )
}

export default ConsolePage
