import React from 'react';
import Page from '../Page.jsx';
import ImageGallery from '../ImageGallery.jsx';

/* eslint-disable quote-props */

const sections = {
  'Visor': (<ImageGallery />),
};

const Gallery = () => (
  <Page sections={sections} />
);

export default Gallery;
