import type { NextPage } from 'next';
import Image from 'next/image';

import { Link } from '@/components/Link';
import { Page } from '@/components/Page';
import profile from '@/images/profile.png';

const sections = {
  '': (
    <>
      <Image
        src={profile}
        className="about__profile-image"
        alt="Jack Purvis headshot"
        sizes="250px"
        quality={100}
        priority
      />

      <p>
        I'm an industrious full-stack developer, creative coder, and audiovisual
        performance artist. I love designing and developing software that
        enables meaningful experiences for people. With a focus on front-end
        development, I primarily make use of web technologies for developing
        both web and desktop applications. I'm a firm advocate of user-centered
        design and apply best practice UI and UX design principles in my work.
        With a background in computer graphics and media design, my experience
        also includes visualisation, simulation, and real-time applications.
      </p>

      <br />

      <p>More about me:</p>

      <ul>
        <li>
          I am the author of Visor, a tool for live visual performance that
          combines live coding and VJing practices.
        </li>

        <li>
          I studied computer graphics (MSc) at Victoria University of
          Wellington, publishing research in the 2019 and 2020 International
          Conferences on Live Coding.
        </li>

        <li>
          I currently work at Village Kit, improving the website for their
          product Grid Kit - a modular construction system for furniture and
          more.
        </li>

        <li>
          I previously worked at Optimal Workshop, developing tools to help
          customers conduct user research and improve the user experience of
          their products.
        </li>

        <li>I am a core member and host of the Wellington Art~Hack meetup.</li>

        <li>
          Outside of daylight hours, I perform as a DJ and VJ under the artist
          names Innerbound and VISOR respectively.
        </li>
      </ul>

      <div className="about__contact">
        <Link href="mailto:jack.v.purvis@gmail.com">
          <i className="fa fa-envelope fa-sm" />
          jack.v.purvis@gmail.com
        </Link>
        <Link href="https://goo.gl/maps/gfbi1gVWzSNv2ebR7">
          <i className="fa fa-map-marker fa-sm" />
          Wellington, New Zealand
        </Link>
      </div>
    </>
  ),
};

const About: NextPage = () => {
  return <Page sections={sections} />;
};

export default About;
