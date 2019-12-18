import React, { Fragment } from 'react';
import Page from '../Page.jsx';
import Link from '../shared/Link.jsx';
import performances from '../../performances.json';

/* eslint-disable quote-props */

const sections = {
  'VISOR': (<Fragment>
    <div className="list">
      {Object.keys(performances).reverse().map((year) => (
        <Fragment>
          <div className="title">{year}</div>

          {performances[year].map((performance) => {
            const {
              date, name, location, url, url_label: urlLabel,
            } = performance;

            return (
              <div className="list-item">
                [{date}]
                {' '}
                <strong>{name}</strong>,
                {' '}
                {location}
                {' '}
                {url && (<Link url={url}>({urlLabel})</Link>)}
              </div>
            );
          })}
        </Fragment>
      ))}
    </div>
  </Fragment>),
};

const Performances = () => (
  <Page sections={sections} />
);

export default Performances;
