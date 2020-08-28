import React from 'react';
import Logo from './Logo';
import SearchIcon from '@material-ui/icons/Search';
import './Header.css';
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Avatar } from '@material-ui/core';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="header">
      <div className="header__logo">
        <Link to="/">
          <Logo />
        </Link>
      </div>
      <div className="header__center">
        <input type="text" />
        <SearchIcon />
      </div>
      <div className="header__right">
        <p>Become a host</p>
        <LanguageIcon />
        <ExpandMoreIcon />
        <Avatar />
      </div>
    </div>
  );
}

export default Header;
