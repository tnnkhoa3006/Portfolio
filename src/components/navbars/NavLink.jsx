import React from 'react';
import LabelLink from '../navlinks/LabelLink.jsx';

const NavLink = ({ onLinkClick }) => {
  return (
    <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
      <LabelLink label="Home" link="/" onClick={onLinkClick} />
      <LabelLink label="About" link="/about" onClick={onLinkClick} />
      <LabelLink label="Projects" link="/projects" onClick={onLinkClick} />
      <LabelLink label="Experience" link="/experience" onClick={onLinkClick} />
      <LabelLink label="Contact" link="/contacts" onClick={onLinkClick} />
    </div>
  );
};

export default NavLink;