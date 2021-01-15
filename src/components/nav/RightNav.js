import React from 'react';
import styled from 'styled-components';
import Button1 from '../Button1';
import Button2 from '../Button2'

import '../../style/Navbar.css';
import {Link} from "react-router-dom";

const Ul = styled.ul`
  
  align-items: center;
  list-style: none;
  display: flex; 
  flex-flow: column nowrap;
  background-color: #fff;
  box-shadow: 5px 5px 15px rgba(0,0,0,0.6);
  position: fixed;
  transform: ${({open}) => open ? 'translateX(0)' : 'translateX(100%)' };
  top: 0;
  right: 0;
  height: 100vh;
  width: 300px;
  padding-top: 3.5rem;
  transition: transform 0.3s ease-in-out;

 li {
    text-decoration: none;
    list-style: none;
    padding: 18px 10px;
    color: #000;
    font-size: 20px;
    font-weight: 400
  }

  


`;

const RightNav = ({open}) => {
  return (
    <Ul open={open}>
      <ul>
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/politics">POLITICS</Link></li>
        <li><Link to="/sports">SPORTS</Link></li>
        <li>Dark Icon</li>
        <li className="signup"><Button1 /></li>
        <li className="signin"><Button2 /></li>
     </ul>
    </Ul>

  );
};

export default RightNav;