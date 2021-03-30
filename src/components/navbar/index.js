import React, { Component } from 'react';
import {Link} from 'react-scroll';
import styled from 'styled-components';
import Burger from './burger';
import Vlogo from '../../images/village_logo.png';



const Nav = styled.nav`
  height: 60px;
  display: flex;
  /* background: #fff; */
  justify-content: space-between;
  padding: 1rem 2rem;
  z-index: 100;
  position: fixed;
  width: 100%;
`;

const Logo = styled(Link)`
  display: flex;
  cursor: pointer;
  
  

  h2{
    font-size: 20px;
    font-weight: 400;
    text-decoration: none;
    text-transform: uppercase;
    padding: 0.5rem;
  }

  img{
    height: 40px;
  }
  
`

class Navbar extends Component {
  render() {
    return (
      <Nav >
      <Logo to="text-box" >
          <h2>Village</h2>
          <img alt="logo" src={Vlogo} className="logo" />
      </Logo>
      <Burger />
    </Nav>
    );
  }
}

export default Navbar;