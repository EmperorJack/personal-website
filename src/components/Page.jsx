import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Page = ({ sections }) => (
  <div className="page">
    {Object.entries(sections).map(([header, content], i) => (
      <Fragment key={i}>
        {header && (
          <div className="page__header">
            {header}
          </div>
        )}

        <div className="page__content">
          {content}
        </div>
      </Fragment>
    ))}
  </div>
);

Page.propTypes = {
  sections: PropTypes.objectOf(PropTypes.object.isRequired).isRequired,
};

export default Page;
