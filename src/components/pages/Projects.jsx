import React, { Fragment } from 'react';
import Page from '../Page.jsx';
import visorImagePath from '../../images/visor.png';
import refineryUiImagePath from '../../images/refinery-ui.png';
import maltopiDesignerImagePath from '../../images/maltopi-designer.png';
import smokeSimulationImagePath from '../../images/smoke-simulation.jpg';
import unvanquishedImagePath from '../../images/unvanquished.jpg';
import Project from '../Project';

const sections = {
  'Current Projects': (
    <Fragment>
      <Project
        title="Visor"
        description="
        Live coding environment for real-time visual performance that bridges the gap between
        creative coding and VJing. Offers user interfaces to easily interact with Processing
        sketches live coded in Ruby and a simple API for mapping visuals to audio or MIDI
        controllers. Implemented using Electron, React, JRuby, and Processing."
        links={[
          { label: 'Visor Website', url: 'https://visor-live.github.io/' },
          { label: 'Demonstration Video', url: 'https://www.youtube.com/watch?v=oqSGJKDKigs' },
        ]}
        imagePath={visorImagePath}
      />

      <Project
        title="Refinery UI"
        description="
          Industrial themed component library for developing user interfaces with TypeScript,
          React, & Sass. Currently in development with a plan to release as open source."
        links={[
          { label: 'Storybook Website', url: 'https://storybook.refinery-ui.com/' },
        ]}
        imagePath={refineryUiImagePath}
      />
    </Fragment>
  ),
  'Past Projects': (
    <Fragment>
      <Project
        title="Maltopi Designer"
        description="
        Web-based clothing customiser for the sports team wear brand, Maltopi. Allows users
        to design football kits with a variety of customisations including colours, patterns,
        and logos. A quote can be requested from Maltopi to produce the custom kit.
        Implemented with p5.js, React, and Firebase."
        links={[
          { label: 'Maltopi Designer Website', url: 'https://designer.maltopi.com/' },
        ]}
        imagePath={maltopiDesignerImagePath}
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
          { label: 'Github Website', url: 'https://github.com/EmperorJack/smokey-bbq' },
          { label: 'Demonstration Video', url: 'https://www.youtube.com/watch?v=Tsm45GY3AT4' },
        ]}
        imagePath={smokeSimulationImagePath}
      />

      <Project
        title="Unvanquished, Open Source Game Project"
        description="
        Level designer and environment artist for a real-time strategy game played as a first-person shooter.
        Working with NetRadiant, Blender, Adobe Photoshop, and Audacity."
        links={[
          { label: 'Game Website', url: 'https://unvanquished.net/' },
        ]}
        imagePath={unvanquishedImagePath}
      />
    </Fragment>
  ),
};

const Projects = () => (
  <Page sections={sections} />
);

export default Projects;
