import React, { Component } from 'react'
import { InView } from 'react-intersection-observer'
import {
  Container,
  Image,
  Menu,
} from 'semantic-ui-react'
import logo from '../logo.svg';
const menuStyle = {
    border: 'none',
    borderRadius: 0,
    boxShadow: 'none',
    marginBottom: '1em',
    marginTop: '4em',
    transition: 'box-shadow 0.5s ease, padding 0.5s ease',
  }
  
  const fixedMenuStyle = {
    backgroundColor: '#fff',
    border: '1px solid #ddd',
    boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.2)',
  }

export default class PageHeader extends Component {
    state = {
        menuFixed: false,
        overlayFixed: false,
      }
    
      toggleTopMenu = (inView) => this.setState({ menuFixed: !inView })
    
    render() {
        const { menuFixed} = this.state
    return (
      <div>
         <InView onChange={this.toggleTopMenu}>
          <Menu
            borderless
            fixed={menuFixed ? 'top' : undefined}
            style={menuFixed ? fixedMenuStyle : menuStyle}
          >
            <Container text>
              <Menu.Item>
                <Image size='mini' src={logo} />
              </Menu.Item>
              <Menu.Item header>Movie App</Menu.Item>
              <Menu.Item as='a'>Add</Menu.Item>
              <Menu.Item as='a'>List</Menu.Item>
            </Container>
          </Menu>
        </InView>
      </div>
    )
  }
}
