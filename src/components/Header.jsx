import React from 'react';
import Social from './Social.jsx';

const Header = () => (
  <div className="header">
    <div className="header__title">
      Jack Purvis
    </div>

    <div className="header__social">
      <Social />
    </div>
  </div>
);

export default Header;
