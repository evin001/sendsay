import React, { PureComponent } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import DropdownItem from '../DropdownItem'

const app = document.getElementById('app')

class ItemPortal extends PureComponent {
  static propTypes = {
    parent: PropTypes.object,
  }

  render() {
    const { left, bottom } = this.props.parent.getBoundingClientRect()
    return ReactDOM.createPortal(
      <DropdownItem
        {...this.props}
        style={{ top: `${bottom}px`, left: `${left}px` }}
      />,
      app
    )
  }
}

export default ItemPortal
