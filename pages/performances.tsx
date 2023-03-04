import { NextPage } from 'next';
import { Fragment } from 'react';

import { Link } from '@/components/Link';
import { Page } from '@/components/Page';
import { djPerformances } from '@/src/performances/djPerformances';
import { djvjPerformances } from '@/src/performances/djvjPerformances';
import { PerformancesByYear } from '@/src/performances/types';
import { vjPerformances } from '@/src/performances/vjPerformances';

interface LinksListProps {
  links: Array<{
    label: string;
    href: string;
  }>;
}

function LinksList(props: LinksListProps) {
  const { links } = props;

  return (
    <>
      {links.map(({ label, href }) => (
        <Fragment key={href}>
          <Link href={href}>({label})</Link>{' '}
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
              const { date, name, location, links } = performance;

              return (
                <div className="list-item" key={name}>
                  [{date}] <strong>{name}</strong>, {location}{' '}
                  {links != null && <LinksList links={links} />}
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
