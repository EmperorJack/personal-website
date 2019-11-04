import React, { Fragment } from 'react';
import Page from '../Page.jsx';
import Link from '../shared/Link.jsx';

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
  'Talks': (<Fragment>
    <div className="list">
      <div className="list-item">
        [01/11/2019] <strong>Visor: Creative Coding Live Visuals in Ruby</strong>,
        Kiwi Ruby 2019,
        Te Papa, Wellington, New Zealand
      </div>
      <div className="list-item">
        [23/01/2019] <strong>Live coding visuals with Visor</strong>,
        VIU,
        Hangar.org, Barcelona, Spain
      </div>
    </div>
  </Fragment>),
};

const Media = () => (
  <Page sections={sections} />
);

export default Media;
