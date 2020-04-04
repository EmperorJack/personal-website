import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { capitalize, toRoute } from 'helpers';
import { pages, defaultPage } from 'pages';

const Nav = () => {
  const { pathname } = useLocation();

  const linkSelected = (page) => (
    pathname === toRoute(page) || (pathname === '/' && page === defaultPage)
  );

  return (
    <div className="nav">
      {Object.keys(pages).map((page) => (
        <Link
          key={page}
          to={toRoute(page)}
          className={`nav__link ${linkSelected(page) ? 'nav__link--selected' : ''}`}
        >
          {capitalize(page)}
        </Link>
      ))}
    </div>
  );
};

export default Nav;
