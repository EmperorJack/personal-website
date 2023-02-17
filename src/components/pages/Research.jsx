import React from 'react';
import Page from '../Page.jsx';
import Link from '../shared/Link.jsx';

/* eslint-disable quote-props */

const sections = {
  'Publications': (<div className="research">
    <p>
      Purvis, J. Anslow, C. Noble J.
      {' '}
      <strong>Visor in Practice: Live Performance and Evaluation.</strong>
      {' '}
      In Proceedings of the International Conference on Live Coding (ICLC), Limerick, Ireland. 2020
      {' '}
      <Link url={'https://zenodo.org/record/3939275'}>(paper)</Link>
      {' '}
      <Link url={'https://drive.google.com/open?id=1GlF175VTpV0aDxW7wZkxCA5_Wj1707OE'}>(poster)</Link>
      {' '}
      <Link url={'https://youtu.be/RtqWFEEZ6_s?t=1305'}>(presentation)</Link>
    </p>

    <br />

    <p>
      Purvis, J. Anslow, C. Noble J.
      {' '}
      <strong>CJing Practice: Combining Live Coding and VJing.</strong>
      {' '}
      In Proceedings of the International Conference on Live Coding (ICLC), Madrid, Spain. 2019
      {' '}
      <Link url={'https://iclc.toplap.org/2019/papers/paper64.pdf'}>(paper)</Link>
      {' '}
      <Link url={'https://youtu.be/1kQwrnjToxw?t=3039'}>(presentation)</Link>
    </p>
  </div>),
  'Theses': (<div className="research">
    <p>
      Master's thesis (MSc):
      {' '}
      <strong>CJing: Combining Live Coding and VJing for Live Visual Performance.</strong>
      {' '}
      Victoria University of Wellington, 2019
      {' '}
      <Link url={'https://researcharchive.vuw.ac.nz/bitstream/handle/10063/8287/thesis_access.pdf?sequence=1'}>(thesis)</Link>
    </p>

    <br />

    <p>
      Bachelor's with Honours thesis (BSc):
      {' '}
      <strong>Smoke Simulation for Real-time Music Visualisation.</strong>
      {' '}
      Victoria University of Wellington, 2017
      {' '}
      <Link url={'https://drive.google.com/open?id=0B5YqYt0mLzblQmliUDZ6Q0I5dzg'}>(thesis)</Link>
    </p>
  </div>),
};

const Research = () => (
  <Page sections={sections} />
);

export default Research;
