import { NextPage } from 'next';

import { ImageGallery } from '@/components/ImageGallery';
import { Page } from '@/components/Page';

const sections = {
  Visor: <ImageGallery />,
};

const About: NextPage = () => {
  return <Page sections={sections} />;
};

export default About;
