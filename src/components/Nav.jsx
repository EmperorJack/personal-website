import React from 'react';
import PropTypes from 'prop-types';
import { capitalize } from 'helpers';

const Nav = ({ currentPage, pages, setPage }) => (
  <div className="nav">
    {pages.map((page) => (
      <div
        key={page}
        onClick={() => setPage(page)}
        className={`nav__link ${currentPage === page ? 'nav__link--selected' : ''}`}
      >
        {capitalize(page)}
      </div>
    ))}
  </div>
);

Nav.propTypes = {
  currentPage: PropTypes.string.isRequired,
  pages: PropTypes.arrayOf(PropTypes.string),
  setPage: PropTypes.func.isRequired,
};

export default Nav;
