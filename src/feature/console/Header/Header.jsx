import React from 'react'
import { cn } from '@bem-react/classname'
import Logo from '~/components/Logo'
import FullscreenIcon from './Icons/FullscreenIcon'
import LogoutButton from './LogoutButton'
import Toolbar from './Toolbar'
import './Header.css'

const classes = cn('Header')

const Header = () => (
  <div className={classes('root')}>
    <div className={classes('container')}>
      <Logo />
      <div className={classes('label')}>API-консолька</div>
    </div>
    <div className={classes('container')}>
      <Toolbar />
      <LogoutButton />
      <FullscreenIcon />
    </div>
  </div>
)

export default Header
