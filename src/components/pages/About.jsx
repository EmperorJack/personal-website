import React, { Fragment } from 'react';
import Page from '../Page.jsx';
import Link from '../shared/Link.jsx';
import profile from '../../images/profile.png';

const sections = {
  '': (<Fragment>
    <img
      src={profile}
      alt=""
      className="about__profile-image"
    />

    <p>
      Jack is a full-stack software developer, creative coder, and live visual artist based
      in Wellington, New Zealand. With a focus on front-end development, his interests and
      expertise include real-time computer graphics, creative coding, live coding, user
      interface design, user experience, music visualisation, DJing, and VJing.
    </p>

    <br />

    <p>
      Jack studied computer graphics (MSc) at Victoria University of Wellington, publishing
      research in the 2019 and 2020 International Conferences on Live Coding. He is the author
      of Visor, a tool for live visual performance that combines live coding and VJing practices.
      Previously, he worked at Optimal Workshop building tools to help customers conduct user
      research and improve the user experience of their products.
    </p>

    <div className="about__contact">
      <Link url="mailto:jack.v.purvis@gmail.com"><i className="fa fa-envelope fa-sm" />jack.v.purvis@gmail.com</Link>
      <Link url="https://goo.gl/maps/gfbi1gVWzSNv2ebR7"><i className="fa fa-map-marker fa-sm" />Wellington, New Zealand</Link>
    </div>
  </Fragment>),
};

const About = () => (
  <Page sections={sections} />
);

export default About;
