import React from 'react';
import styled from 'styled-components';
import {Link} from "react-scroll";
import { ThemeIcon } from '../ThemeIcon';

const Ul = styled.ul`
    align-items: center;
    justify-content: center;
    list-style: none;
    display: flex; 
    flex-flow: column nowrap;
    /* background: #000; */
    position: fixed;
    transform: ${({open}) => (open ? 'translateX(0)' : 'translateX(100%)' )};
    /* opacity: ${({open}) => (open ? '100%' : '0')};
    top: ${({open}) => (open ? '0' : '-100%')}; */
    opacity: 0.9;
    top: 0;
    right: 0;
    height: 100%;
    width: 40%;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
  
    li{
    /* color:#2ecc71; */
    padding: 12px 10px;
    font-size: 20px;
    font-weight: 400;
    cursor: pointer;
  }

  li:hover{
      /* background: #fed330; */
      /* color: #fff; */
    }
  }
`;



const Content = ({open, toggle}) => {
  return (
    <Ul open={open} >
        <Link to="bio-box" smooth={true} duration={1000} style={{color:"inherit"}}><li onClick={toggle}>
          About</li></Link>
          <a href="https://github.com/TheDejo" target="_blank" rel="noopener noreferrer"><li onClick={toggle}>
          Projects</li></a>
          <Link to="wave" activeClass="active" smooth={true} duration={1000} style={{color:"inherit"}}><li onClick={toggle}>
          Say Hi</li></Link>
          <Link><ThemeIcon /></Link>
    </Ul>

  );
};

export default Content;