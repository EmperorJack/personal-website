import React, { Fragment } from 'react';
import Page from '../Page.jsx';
import Link from '../shared/Link.jsx';
import visor from '../../images/visor.png';
import smokeSimulation from '../../images/smoke-simulation.jpg';

const sections = {
  'Current Projects': (<Fragment>
    <div className="title">Visor</div>

    <p>
      Visor is a live coding environment for real-time visual performance. Visor bridges the gap
      between creative coding and VJing by offering user interfaces to easily interact with live
      coded Processing sketches. Visor offers a simple API for mapping visuals to audio or MIDI
      controllers, all in the expressive Ruby programming language.
    </p>

    <div className="projects__link-container">
      <Link url="https://visor-live.github.io/">Project Website</Link>
      <Link url="https://www.youtube.com/watch?v=oqSGJKDKigs">Demonstration Video</Link>
    </div>

    <img
      src={visor}
      alt=""
      className="projects__project-image"
    />
  </Fragment>),
  'Past Projects': (<Fragment>
    <div className="title">Smoke Simulation for Real-time Music Visualisation</div>

    <p>
      Simulating smoke and other fluids for computer graphics is a challenging task. How can
      such an effect be influenced by a dynamic input such as music to create an appealing
      visualisation? This project investigates how the analysis of live audio can be used to
      drive a real-time smoke simulation, producing a music visualisation. To maximize performance
      the simulation is implemented on the GPU and the results are compared against a CPU
      implementation. Vorticity confinement and buoyancy forces are implemented to improve
      the smoke quality. Logarithmic frequency scaling and windowing are implemented and evaluated
      to improve the quality of the audio analysis. Multiple music visualisations are implemented
      to illustrate the kind of effects that are possible when integrating audio analysis and
      a smoke simulation.
    </p>

    <div className="projects__link-container">
      <Link url="https://github.com/EmperorJack/smokey-bbq">Github Website</Link>
      <Link url="https://www.youtube.com/watch?v=Tsm45GY3AT4">Demonstration Video</Link>
    </div>

    <img
      src={smokeSimulation}
      alt=""
      className="projects__project-image"
    />
  </Fragment>),
};

const Projects = () => (
  <Page sections={sections} />
);

export default Projects;
