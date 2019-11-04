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
      Jack Purvis is a creative coder, software developer, and live visual artist based in
      Wellington, New Zealand. Working as a software developer at Optimal Workshop, Jack
      maintains a keen focus on the user experience of the products he develops. Jack studied
      in both computer science (BSc) and computer graphics (MSc) at Victoria University of
      Wellington. He maintains research interests in the fields of real-time computer graphics,
      creative coding, live coding, and music visualisation. Jack is currently developing his own
      software for live visual performance that combines aspects of live coding and VJing practice.
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
