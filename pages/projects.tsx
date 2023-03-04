import { NextPage } from 'next';

import { Page } from '@/components/Page';
import { Project } from '@/components/Project';
import maltopiDesignerImagePath from '@/images/maltopi-designer.png';
import performanceArtistImagePath from '@/images/performance-artist.jpg';
import refineryUiImagePath from '@/images/refinery-ui.png';
import smokeSimulationImagePath from '@/images/smoke-simulation.jpg';
import unvanquishedImagePath from '@/images/unvanquished.jpg';
import visorImagePath from '@/images/visor.png';

const sections = {
  'Current Projects': (
    <>
      <Project
        title="Visor"
        description="
        Live coding environment for real-time visual performance that bridges the gap between
        creative coding and VJing. Offers user interfaces to easily interact with Processing
        sketches live coded in Ruby and a simple API for mapping visuals to audio or MIDI
        controllers. Implemented using Electron, React, JRuby, and Processing."
        links={[
          { label: 'Visor Website', href: 'https://visor-live.github.io/' },
          {
            label: 'Demonstration Video',
            href: 'https://www.youtube.com/watch?v=oqSGJKDKigs',
          },
        ]}
        imageProps={{ src: visorImagePath, alt: '', priority: true }}
      />

      <Project
        title="Refinery UI"
        description="
          Industrial themed component library for developing user interfaces with TypeScript,
          React, and Sass. Currently in development with a plan to release as open source."
        links={[
          {
            label: 'Storybook Website',
            href: 'https://storybook.refinery-ui.com/',
          },
        ]}
        imageProps={{ src: refineryUiImagePath, alt: '' }}
      />

      <Project
        title="Live Performance Art"
        description="
        Outside of daylight hours, I perform as a DJ and VJ under the artist names Innerbound
        and VISOR respectively. My VJ practice involves using my custom Visor software to bring
        together the art of VJing with live code and perform live visuals that flow smoothly and
        synchronously with music. My DJ practice involves using a custom Raspberry Pi setup to
        present a melodic, progressive, and driving sound that explores the inner world by journeying
        through varieties of house and techno music. More recently, I have been experimenting with
        integrating my DJ and VJ setups to create a unified audiovisual performance act."
        links={[
          { label: 'Innerbound Website', href: 'https://www.innerbound.nz/' },
          { label: 'Previous Performances', href: '/#/performances' },
        ]}
        imageProps={{ src: performanceArtistImagePath, alt: '' }}
      />
    </>
  ),
  'Past Projects': (
    <>
      <Project
        title="Maltopi Designer"
        description="
        Web-based clothing customiser for the sports team wear brand, Maltopi. Allows users
        to design football kits with a variety of customisations including colours, patterns,
        and logos. A quote can be requested from Maltopi to produce the custom kit.
        Implemented with p5.js, React, and Firebase."
        links={[
          {
            label: 'Maltopi Designer Website',
            href: 'https://designer.maltopi.com/',
          },
        ]}
        imageProps={{ src: maltopiDesignerImagePath, alt: '' }}
      />

      <Project
        title="Smoke Simulation for Real-time Music Visualisation"
        description="
          This project investigates how the analysis of live audio can be used to drive a real-time
          smoke simulation, producing a music visualisation. To maximize performance the simulation is
          implemented on the GPU. Vorticity confinement and buoyancy forces are implemented to improve
          the smoke quality. Logarithmic frequency scaling and windowing are implemented to improve the
          quality of the audio analysis. Multiple music visualisations are implemented to illustrate the
          kind of effects that are possible when integrating audio analysis and a smoke simulation.
          This project is implemented using C++, OpenGL, and GLSL shaders."
        links={[
          {
            label: 'Github Website',
            href: 'https://github.com/EmperorJack/smokey-bbq',
          },
          {
            label: 'Demonstration Video',
            href: 'https://www.youtube.com/watch?v=Tsm45GY3AT4',
          },
        ]}
        imageProps={{ src: smokeSimulationImagePath, alt: '' }}
      />

      <Project
        title="Unvanquished, Open Source Game Project"
        description="
        Level designer and environment artist for a real-time strategy game played as a first-person shooter.
        Working with NetRadiant, Blender, Adobe Photoshop, and Audacity."
        links={[{ label: 'Game Website', href: 'https://unvanquished.net/' }]}
        imageProps={{ src: unvanquishedImagePath, alt: '' }}
      />
    </>
  ),
};

const Projects: NextPage = () => {
  return <Page sections={sections} />;
};

export default Projects;
