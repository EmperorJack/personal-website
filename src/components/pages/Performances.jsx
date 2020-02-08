import React, { Fragment } from 'react';
import Page from '../Page.jsx';
import Link from '../shared/Link.jsx';
import performances from '../../performances.json';

/* eslint-disable quote-props */

const urlList = (urls, urlLabels) => (
  <Fragment>
    {urls.map((url, i) => (
      <Fragment key={url}>
        <Link url={url}>({urlLabels[i]})</Link>
        {' '}
      </Fragment>
    ))}
  </Fragment>
);

const sections = {
  'VISOR': (<Fragment>
    <div className="list">
      {Object.keys(performances).reverse().map((year) => (
        <Fragment key={year}>
          <div className="title">{year}</div>

          {performances[year].map((performance) => {
            const {
              date, name, location, url, url_label: urlLabel,
            } = performance;

            return (
              <div className="list-item" key={name}>
                [{date}]
                {' '}
                <strong>{name}</strong>,
                {' '}
                {location}
                {' '}
                {url && urlList(Array.of(url).flat(), Array.of(urlLabel).flat())}
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
