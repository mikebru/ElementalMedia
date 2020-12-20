import React from 'react';
 
import { NavLink } from 'react-router-dom';
 
const Navigation = () => {
    return (
       <div>
          <NavLink to="/PixelGarden">Home</NavLink>
          <NavLink to="/PixelGarden/about">About</NavLink>
          <NavLink to="/PixelGarden/contact">Contact</NavLink>
       </div>
    );
}
 
export default Navigation;