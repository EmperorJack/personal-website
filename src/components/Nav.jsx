import React from 'react';
import { Link as NavLink, useLocation } from 'react-router-dom';
import { pages, defaultPage } from 'pages';
import Link from './shared/Link.jsx';

const Nav = () => {
  const { pathname } = useLocation();

  const linkSelected = (page) => (
    pathname === page.url || (pathname === '/' && page === defaultPage)
  );

  return (
    <div className="nav">
      {pages.map((page) => {
        const { label, PageComponent, url } = page;

        if (PageComponent == null) {
          return (
            <Link key={label} url={url} customClassName="nav__link">
              {label}
            </Link>
          );
        }

        return (
          <NavLink
            key={label}
            to={url}
            className={`nav__link ${linkSelected(page) ? 'nav__link--selected' : ''}`}

          >
            {label}
          </NavLink>
        );
      })}
    </div>
  );
};

export default Nav;
