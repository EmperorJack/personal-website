import React, { Fragment } from 'react';
import Page from '../Page.jsx';
import Link from '../shared/Link.jsx';
import ImageGallery from '../ImageGallery.jsx';

/* eslint-disable quote-props */

const sections = {
  'Interviews': (<Fragment>
    <div className="list">
      <div className="list-item">
        [17/03/2019] <strong>Writing live code can be a spectacle</strong>,
        The future is exciting - Vodafone,
        Barcelona, Spain <Link url={'https://www.youtube.com/watch?v=c2I_v44ndUc'}>(mini documentary)</Link>
      </div>
    </div>
  </Fragment>),
  'Gallery': (<ImageGallery />),
};

const Media = () => (
  <Page sections={sections} />
);

export default Media;
