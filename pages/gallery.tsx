import { NextPage } from 'next';

import { ImageGallery } from '@/src/components/ImageGallery';
import { Page } from '@/src/components/Page';

const sections = {
  Visor: <ImageGallery />,
};

const About: NextPage = () => {
  return <Page sections={sections} />;
};

export default About;
