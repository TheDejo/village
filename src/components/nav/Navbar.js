import React from 'react';
import styled from 'styled-components';

import '../../style/Navbar.css';
import Burger from './Burger';

const Nav = styled.nav`
  width: 100%;
  height:55px;
  background: #fed330;
  border-bottom: 2px solid #fed330;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;

  .logo {
    padding: 15px 0 ;
    color: #fff;
    font-size: 30px;
    font-weight: 500;
  }


  
`;

 
const Navbar = () => {
  return (
    <Nav >
      <div className="logo">
        VILLAGE
      </div>
      <Burger />
    </Nav>
  );
};

export default Navbar; 