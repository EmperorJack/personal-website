import React from 'react';
import PropTypes from 'prop-types';
import Link from './shared/Link.jsx';

const Project = ({
  title,
  description,
  links,
  imagePath,
}) => (
  <div className="project">
    <div className="title">{title}</div>

    <div className="project__description">
      <p>{description}</p>
    </div>

    <div className="project__links">
      {links.map(({ label, url }) => (
        <Link key={label} url={url}>
          {label}
        </Link>
      ))}
    </div>

    <img
      src={imagePath}
      alt=""
      className="project__image"
    />
  </div>
);

Project.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  })).isRequired,
  imagePath: PropTypes.string.isRequired,
};

export default Project;
