import React, { useState } from 'react';
import LogoDark from '../../assets/logos/UnionDark.png';
import NavLink from './NavLink';
import Icon from '../icons/Icon.jsx';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="w-full fixed top-0 h-16 dark:bg-zinc-900 flex items-center z-50">
      <div className="flex w-full px-4 sm:px-8 md:px-16 items-center justify-between h-full">
        <div className="flex items-center space-x-2">
          <img
            onClick={() => {
              navigate('/');
              setIsMenuOpen(false);
            }}
            src={LogoDark}
            alt="Logo"
            className="h-6 w-6 sm:h-8 sm:w-8 cursor-pointer"
            loading="lazy"
          />
          <h1 className="text-base sm:text-lg md:text-xl font-bold font-mono">Khoa</h1>
        </div>
        <div className="hidden sm:flex items-center justify-center">
          <NavLink />
        </div>
        <div className="sm:hidden">
          <Icon
            name={isMenuOpen ? 'FaTimes' : 'FaBars'}
            className="w-6 h-6 cursor-pointer hover:text-rose-500 transition-colors"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
        </div>
        <div className="hidden sm:flex">
          <Icon
            name="FaCog"
            className="w-6 h-6 sm:w-8 sm:h-8 cursor-pointer hover:text-rose-500 transition-colors"
            aria-label="Settings"
          />
        </div>
        <div
          className={`${isMenuOpen ? 'flex' : 'hidden'
            } flex-col absolute top-16 left-0 w-full bg-[rgb(209,226,239)] dark:bg-zinc-900 p-4 sm:hidden`}
        >
          <NavLink onLinkClick={() => setIsMenuOpen(false)} />
        </div>
      </div>
    </div>
  );
};

export default Header;