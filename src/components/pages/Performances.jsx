import React, { Fragment } from 'react';
import Page from '../Page.jsx';
import Link from '../shared/Link.jsx';

/* eslint-disable quote-props */

const sections = {
  'VISOR': (<Fragment>
    <div className="list">
      <div className="title">2019</div>

      <div className="list-item">
        [18/10/2019] <strong>The Housing Project Laundry Takeover</strong>,
        Laundry, Wellington, New Zealand
      </div>
      <div className="list-item">
        [20/09/2019] <strong>Vertigo IV</strong>,
        Valhalla, Wellington, New Zealand
      </div>
      <div className="list-item">
        [07/09/2019] <strong>Limbic Resonance 2</strong>,
        Valhalla, Wellington, New Zealand
      </div>
      <div className="list-item">
        [24/08/2019] <strong>Unruly Family</strong>,
        Laundry, Wellington, New Zealand
      </div>
      <div className="list-item">
        [19/07/2019] <strong>Star Sailing</strong>,
        Wellington, New Zealand
      </div>
      <div className="list-item">
        [13/07/2019] <strong>Limbic Resonance</strong>,
        Valhalla, Wellington, New Zealand <Link url={'https://tinyurl.com/visor-limbic-resonance-01'}>(recording)</Link>
      </div>
      <div className="list-item">
        [07/06/2019] <strong>Optimal Workshop Party</strong>,
        Wellington, New Zealand
      </div>
      <div className="list-item">
        [06/03/2019] <strong>Eyegum Wednesdays</strong>,
        San Fran, Wellington, New Zealand <Link url={'https://tinyurl.com/visor-eyegum-2019'}>(recording)</Link>
      </div>
      <div className="list-item">
        [17/02/2019] <strong>TOPLAP 15th Birthday Livestream</strong>,
        Worldwide. Streamed from Wellington, New Zealand <Link url={'https://tinyurl.com/visor-toplap15'}>(recording)</Link>
      </div>
      <div className="list-item">
        [10/02/2019] <strong>Taniwha's Den 2019 Cliff</strong>,
        Hinakura, Martinborough, New Zealand
      </div>
      <div className="list-item">
        [09/02/2019] <strong>Taniwha's Den 2019 Mainstage</strong>,
        Hinakura, Martinborough, New Zealand <Link url={'https://tinyurl.com/visor-taniwhasden-2019'}>(recording)</Link>
      </div>
      <div className="list-item">
        [01/02/2019] <strong>Sound Night 09: Algorave</strong>,
        panke.gallery, Berlin, Germany
      </div>
      <div className="list-item">
        [28/01/2019] <strong>Sonic Pi meets Visor</strong>,
        Worldwide. Streamed from Cambridge, United Kingdom <Link url={'https://tinyurl.com/visor-meets-sonicpi'}>(recording)</Link>
      </div>
      <div className="list-item">
        [27/01/2019] <strong>livecodenyc Hosts In Exile</strong>,
        New River Studios, London, United Kingdom
      </div>
      <div className="list-item">
        [25/01/2019] <strong>VIU Algorave</strong>,
        Hangar.org, Barcelona, Spain
      </div>
      <div className="list-item">
        [16/01/2019] <strong>ICLC 2019 Algorave</strong>,
        Nave De Terneras, Madrid, Spain
      </div>

      <div className="title">2018</div>

      <div className="list-item">
        [01/12/2018] <strong>Vertigo</strong>,
        Valhalla, Wellington, New Zealand
      </div>
      <div className="list-item">
        [17/11/2018] <strong>Burrowing Pufferfish Private Party</strong>,
        Wellington, New Zealand <Link url={'https://tinyurl.com/visor-pufferfish-2018'}>(recording)</Link>
      </div>
      <div className="list-item">
        [14/11/2018] <strong>Computer Graphics meeting</strong>,
        Victoria University, Wellington, New Zealand
      </div>
      <div className="list-item">
        [13/10/2018] <strong>FREAKS 001</strong>,
        Wellington, New Zealand <Link url={'https://tinyurl.com/visor-freaks-2018'}>(recording)</Link>
      </div>
      <div className="list-item">
        [23/06/2018] <strong>Art~Hack Winter Expo</strong>,
        Newtown Community & Cultural Centre, Wellington, New Zealand
      </div>
    </div>
  </Fragment>),
};

const Performances = () => (
  <Page sections={sections} />
);

export default Performances;
