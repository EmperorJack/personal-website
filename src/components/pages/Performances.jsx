import React, { Fragment } from 'react';
import Page from '../Page.jsx';
import Link from '../shared/Link.jsx';
import djvjPerformances from '../../djvjPerformances.json';
import vjPerformances from '../../vjPerformances.json';
import djPerformances from '../../djPerformances.json';

/* eslint-disable quote-props */

const UrlList = ({ urls, urlLabels }) => (
  <Fragment>
    {urls.map((url, i) => (
      <Fragment key={url}>
        <Link url={url}>({urlLabels[i]})</Link>
        {' '}
      </Fragment>
    ))}
  </Fragment>
);

const PerformanceList = ({ performances }) => (
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
              {url && (
                <UrlList
                  urls={Array.of(url).flat()}
                  urlLabels={Array.of(urlLabel).flat()}
                />
              )}
            </div>
          );
        })}
      </Fragment>
    ))}
  </div>
);

const sections = {
  'DJing & VJing - INNERBOUND x VISOR': <PerformanceList performances={djvjPerformances} />,
  'Live coding & VJing - VISOR': <PerformanceList performances={vjPerformances} />,
  'DJing - INNERBOUND': <PerformanceList performances={djPerformances} />,
};

const Performances = () => (
  <Page sections={sections} />
);

export default Performances;
