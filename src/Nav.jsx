import React from 'react';
import {NavLink} from 'react-router-dom';

const Nav = () => {
  return (
    <div className="flex items-center justify-between gap-40" >
      <img className= "h-50 w-40 ml-20" src="https://www.freepnglogos.com/uploads/coffee-logo-png/coffee-logo-design-creative-idea-logo-elements-2.png" alt="" />
      <div className="flex gap-20 ml-80 mr-40 font-serif text-[15px] text-gray-800">
     <NavLink to= "/">Home</NavLink>        
     <NavLink to="/menu">Menu</NavLink>
     <NavLink to="/blog">Blog</NavLink>
     <NavLink to="/media">Media</NavLink>
     <NavLink to="/contact">Contact</NavLink>
     <i className="ri-search-line text-[20px]"></i>
    <i className="ri-user-fill text-[20px]"></i>

      </div>
    </div>
  )
}

export default Nav
