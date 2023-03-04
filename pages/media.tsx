import { NextPage } from 'next';

import { Page } from '@/components/Page';
import { Link } from '@/components/Link';

const sections = {
  Interviews: (
    <>
      <div className="list">
        <div className="list-item">
          [17/03/2019] <strong>Writing live code can be a spectacle</strong>,
          The future is exciting - Vodafone, Barcelona, Spain{' '}
          <Link href={'https://www.youtube.com/watch?v=c2I_v44ndUc'}>
            (mini documentary)
          </Link>
        </div>
      </div>
    </>
  ),
  Talks: (
    <>
      <div className="list">
        <div className="list-item">
          [12/05/2022]{' '}
          <strong>
            SWEN 303 Guest Lecture - Usability Testing Tools in Practice
          </strong>
          , Victoria University, Wellington, New Zealand
        </div>
        <div className="list-item">
          [27/11/2019]{' '}
          <strong>Visor: Creative Coding for Live Visual Performance</strong>,
          Springload, Wellington, New Zealand
        </div>
        <div className="list-item">
          [01/11/2019]{' '}
          <strong>Visor: Creative Coding Live Visuals in Ruby</strong>, Kiwi
          Ruby 2019, Te Papa, Wellington, New Zealand
        </div>
        <div className="list-item">
          [23/01/2019] <strong>Live coding visuals with Visor</strong>, VIU,
          Hangar.org, Barcelona, Spain
        </div>
      </div>
    </>
  ),
};

const Media: NextPage = () => {
  return <Page sections={sections} />;
};

export default Media;
