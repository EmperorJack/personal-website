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
      Jack Purvis is a full-stack software developer, creative coder, and live visual artist
      based in Wellington, New Zealand. With a focus on front-end development, his interests
      and expertise include real-time computer graphics, creative coding, live coding, user
      experience, user interface design, and music visualisation. Jack studied in both computer
      science (BSc) and computer graphics (MSc) at Victoria University of Wellington. Jack's
      skills lie at the crossroads of programming, media design, and human-computer interaction,
      allowing him to design & build meaningful software that enables others to work more
      effectively and creatively.
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
