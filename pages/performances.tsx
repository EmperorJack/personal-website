import { NextPage } from 'next';
import { Fragment } from 'react';

import { Page } from '@/src/components/Page';
import { Link } from '@/src/components/Link';
import { djPerformances } from '@/src/performances/djPerformances';
import { djvjPerformances } from '@/src/performances/djvjPerformances';
import { PerformancesByYear } from '@/src/performances/types';
import { vjPerformances } from '@/src/performances/vjPerformances';

interface UrlListProps {
  urls: Array<string>;
  urlLabels: Array<string>;
}

function UrlList(props: UrlListProps) {
  const { urls, urlLabels } = props;

  return (
    <>
      {urls.map((url, i) => (
        <Fragment key={url}>
          <Link href={url}>({urlLabels[i]})</Link>{' '}
        </Fragment>
      ))}
    </>
  );
}

interface PerformanceListProps {
  performances: PerformancesByYear;
}

function PerformanceList(props: PerformanceListProps) {
  const { performances } = props;

  return (
    <div className="list">
      {Object.keys(performances)
        .reverse()
        .map((year) => (
          <Fragment key={year}>
            <div className="title">{year}</div>

            {performances[year].map((performance) => {
              const {
                date,
                name,
                location,
                url,
                url_label: urlLabel,
              } = performance;

              return (
                <div className="list-item" key={name}>
                  [{date}] <strong>{name}</strong>, {location}{' '}
                  {url != null && urlLabel != null && (
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
}

const sections = {
  'DJing & VJing - INNERBOUND x VISOR': (
    <PerformanceList performances={djvjPerformances} />
  ),
  'DJing - INNERBOUND': <PerformanceList performances={djPerformances} />,
  'Live coding & VJing - VISOR': (
    <PerformanceList performances={vjPerformances} />
  ),
};

const Performances: NextPage = () => {
  return <Page sections={sections} />;
};

export default Performances;
