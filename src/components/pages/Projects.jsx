import React, { Fragment } from 'react';
import Page from '../Page.jsx';
import visorImagePath from '../../images/visor.png';
import maltopiDesignerImagePath from '../../images/maltopi-designer.png';
import smokeSimulationImagePath from '../../images/smoke-simulation.jpg';
import Project from '../Project';

const sections = {
  'Current Projects': (
    <Fragment>
      <Project
        title="Visor"
        description="
          Visor is a live coding environment for real-time visual performance. Visor bridges the gap
          between creative coding and VJing by offering user interfaces to easily interact with live
          coded Processing sketches. Visor offers a simple API for mapping visuals to audio or MIDI
          controllers, all in the expressive Ruby programming language."
        links={[
          { label: 'Visor Website', url: 'https://visor-live.github.io/' },
          { label: 'Demonstration Video', url: 'https://www.youtube.com/watch?v=oqSGJKDKigs' },
        ]}
        imagePath={visorImagePath}
      />

      <Project
        title="Maltopi Designer"
        description="
          Maltopi Designer is a web-based clothing customiser for the sports team wear brand, Maltopi.
          Maltopi Designer allows users to design football kits with a variety of customisations including
          colours, patterns, and logo images. Once a kit is created, a quote can be requested from Maltopi
          to produce the custom kit. Maltopi Designer is implemented using p5.js, React, and Firebase."
        links={[
          { label: 'Maltopi Designer Website', url: 'https://designer.maltopi.com/' },
        ]}
        imagePath={maltopiDesignerImagePath}
      />
    </Fragment>
  ),
  'Past Projects': (
    <Project
      title="Smoke Simulation for Real-time Music Visualisation"
      description="
        This project investigates how the analysis of live audio can be used to drive a real-time
        smoke simulation, producing a music visualisation. To maximize performance the simulation is
        implemented on the GPU. Vorticity confinement and buoyancy forces are implemented to improve
        the smoke quality. Logarithmic frequency scaling and windowing are implemented to improve the
        quality of the audio analysis. Multiple music visualisations are implemented to illustrate the
        kind of effects that are possible when integrating audio analysis and a smoke simulation."
      links={[
        { label: 'Github Website', url: 'https://github.com/EmperorJack/smokey-bbq' },
        { label: 'Demonstration Video', url: 'https://www.youtube.com/watch?v=Tsm45GY3AT4' },
      ]}
      imagePath={smokeSimulationImagePath}
    />
  ),
};

const Projects = () => (
  <Page sections={sections} />
);

export default Projects;
