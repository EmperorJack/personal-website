import React from 'react';
import Gallery from 'react-grid-gallery';

const importAll = (r) => r.keys().map(r);
const filenames = importAll(require.context('../images/gallery', false, /\.(png)$/));

const images = filenames.reverse().map((filename) => (
  {
    src: filename,
    thumbnail: filename,
    thumbnailWidth: 320,
    thumbnailHeight: 180,
  }
));

const ImageGallery = () => (
  <div className="media__gallery">
    <Gallery
      images={images}
      enableImageSelection={false}
    />
  </div>
);

export default ImageGallery;
