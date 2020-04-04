import About from 'components/pages/About';
import Projects from 'components/pages/Projects';
import Performances from 'components/pages/Performances';
import Research from 'components/pages/Research';
import Media from 'components/pages/Media';
import Gallery from 'components/pages/Gallery';

export const pages = {
  about: About,
  projects: Projects,
  performances: Performances,
  research: Research,
  media: Media,
  gallery: Gallery,
};

export const defaultPage = Object.keys(pages)[0];
export const DefaultPageComponent = pages[defaultPage];
