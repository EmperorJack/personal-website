import React from 'react';
import PropTypes from 'prop-types';

const Link = ({ url, customClassName, children }) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className={`link ${customClassName}`}
  >
    {children}
  </a>
);

Link.propTypes = {
  url: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Link;
