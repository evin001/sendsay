import React from 'react'
import { cn } from '@bem-react/classname'
import './SingInButton.css'

const classes = cn('SingInButton')

const SingInButton = () => <button className={classes()}>Войти</button>

export default SingInButton
