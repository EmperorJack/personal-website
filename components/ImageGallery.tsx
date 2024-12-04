import 'yet-another-react-lightbox/styles.css';

import { uniq } from 'lodash';
import Image, { StaticImageData } from 'next/image';
import { useState } from 'react';
import {
  Gallery,
  Image as GalleryItem,
  ThumbnailImageProps,
} from 'react-grid-gallery';
import Lightbox, {
  Slide,
  SlideImage as SlideImageType,
} from 'yet-another-react-lightbox';

function importAll<T>(r: __WebpackModuleApi.RequireContext): Array<T> {
  return r.keys().map(r) as Array<T>;
}

const staticImages = importAll<{ default: StaticImageData }>(
  require.context('../images/gallery', false, /\.(png)$/),
);

const images: Array<GalleryItem> = uniq(staticImages)
  .reverse()
  .map((filename) => ({
    src: filename.default.src,
    width: 320,
    height: 180,
  }));

const slides: Array<SlideImageType> = images.map(({ src }) => ({
  src,
}));

function ThumbnailImage(props: ThumbnailImageProps) {
  const {
    imageProps,
    item: { width, height },
  } = props;
  const { key, src, alt, title, style } = imageProps;

  return (
    <Image
      key={key}
      src={src}
      alt={alt}
      title={title || undefined}
      style={style}
      width={width}
      height={height}
      sizes="320px"
    />
  );
}

function SlideImage(props: Slide) {
  const { src } = props;

  return (
    <Image
      src={src}
      alt=""
      fill
      className="media__gallery-slide-image"
      sizes="1280px"
    />
  );
}

export function ImageGallery() {
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  const handleClick = (index: number) => setLightboxIndex(index);

  return (
    <div className="media__gallery">
      <Gallery
        images={images}
        onClick={handleClick}
        enableImageSelection={false}
        thumbnailImageComponent={ThumbnailImage}
      />
      <Lightbox
        open={lightboxIndex >= 0}
        close={() => setLightboxIndex(-1)}
        slides={slides}
        index={lightboxIndex}
        animation={{ swipe: 0 }}
        render={{ slide: SlideImage }}
      />
    </div>
  );
}
