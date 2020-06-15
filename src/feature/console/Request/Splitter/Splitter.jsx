import React from 'react'
import { cn } from '@bem-react/classname'
import DotsIcon from '~/components/Dots'
import './Splitter.css'

const classes = cn('Splitter')

const Splitter = () => (
  <div className={classes()}>
    <DotsIcon />
  </div>
)

export default Splitter
