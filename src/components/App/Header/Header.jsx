import React, { Component } from 'react';
import { Menu, Icon } from 'semantic-ui-react'

class Header extends Component {
    state = {}

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  
    render() {
      const { activeItem } = this.state
  
      return (
        <Menu stackable>
          <Menu.Item
            name='home'
            active={activeItem === 'home'}
            onClick={this.handleItemClick}
            >
            <Icon name='home' size='big' />
          </Menu.Item>
  
          <Menu.Item
            name='config'
            active={activeItem === 'config'}
            onClick={this.handleItemClick}
          >
            <Icon name='settings' size='big' />
          </Menu.Item>
        </Menu>
      )
    }
}

export default Header;