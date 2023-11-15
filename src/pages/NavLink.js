// NavLink.js

import React from 'react';
import '../style/SideBar.css';

const NavLink = ({ target, icon, isActive, onClick }) => {
  const linkClassName = `nav-link ${isActive ? 'active' : ''}`;

  return (
    <div  className={linkClassName} onClick={onClick}>
      {icon}
    </div>
  );
};

export default NavLink;
