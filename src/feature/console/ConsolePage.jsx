import React, { useState } from 'react'
import { cn } from '@bem-react/classname'
import Header from './Header'
import History from './History'
import Request from './Request'
import Actions from './Actions'
import ConsoleForm from './ConsoleForm'
import './ConsolePage.css'

const classes = cn('ConsolePage')

const ConsolePage = () => {
  const [form, setForm] = useState(new ConsoleForm())

  const handleChangeForm = (event) => {
    const nextForm = form.clone()
    nextForm[event.target.id] = event.target.value
    setForm(nextForm)
  }

  const handleFormatRequest = () => {
    if (!form.error) {
      handleChangeForm({
        target: {
          id: 'request',
          value: JSON.stringify(JSON.parse(form.request), null, 2),
        },
      })
    }
  }

  return (
    <div className={classes('root')}>
      <Header />
      <History />
      <Request
        request={{
          value: form.request,
          error: form.error && Boolean(form.request),
        }}
        onChange={handleChangeForm}
      />
      <Actions onFormat={handleFormatRequest} disabled={form.error} />
    </div>
  )
}

export default ConsolePage
