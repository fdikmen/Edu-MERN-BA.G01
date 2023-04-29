import React, { Component } from 'react'
import { InView } from 'react-intersection-observer'
import {
  Container,
  Image,
  Menu,
} from 'semantic-ui-react'
import logo from '../logo.svg';
import { Link } from 'react-router-dom';
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
              <Menu.Item  as={Link} to="/">
                <Image size='mini' src={logo} />
              </Menu.Item>
              <Menu.Item as={Link} to="/"header>Movie App</Menu.Item>
              <Menu.Item as={Link} to="/Add">Add</Menu.Item>
              <Menu.Item as={Link} to="/List">List</Menu.Item>
              {/* <Link to="/Test">Test</Link> */}
            </Container>
          </Menu>
        </InView>
      </div>
    )
  }
}
