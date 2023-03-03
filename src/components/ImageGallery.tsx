import Gallery from 'react-grid-gallery';

const importAll = (r: any) => r.keys().map(r);
const filenames = importAll(
  // @ts-ignore
  require.context('../images/gallery', false, /\.(png)$/),
);

const images = filenames.reverse().map((filename: string) => ({
  src: filename,
  thumbnail: filename,
  thumbnailWidth: 320,
  thumbnailHeight: 180,
}));

// TODO: get this component working in next.js
export function ImageGallery() {
  return (
    <div className="media__gallery">
      <Gallery images={images} enableImageSelection={false} />
    </div>
  );
}
