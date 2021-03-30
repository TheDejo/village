import React from 'react';
import { IoSunny } from 'react-icons/io5';
import { BsMoon } from 'react-icons/bs';




export const ThemeIcon = ({theme, toggleTheme}) => {
  

  return (
    <div onClick={toggleTheme}>
      {theme === 'light' ? 
      <BsMoon size="30px" 
      style={{
        color:"#2ecc71", 
        // position:"fixed",
        // top: "6rem",
        // right: "4rem",
        transition: "all .5s linear",
        // cursor: "pointer",
        // zIndex: "1"
     }} /> : 
      <IoSunny size="30px" style={{
        color:"#fed330", 
        // position:"fixed",
        // top: "6rem",
        // right: "4rem",
        transition: "all .5s linear",
        // cursor: "pointer",
        // zIndex: "1"
     }} />}
     
    </div>
  ); 
};

  