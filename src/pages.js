import About from 'components/pages/About';
import Projects from 'components/pages/Projects';
import Performances from 'components/pages/Performances';
import Research from 'components/pages/Research';
import Media from 'components/pages/Media';
import Gallery from 'components/pages/Gallery';

export const pages = [
  { label: 'About', PageComponent: About, url: '/about' },
  { label: 'Projects', PageComponent: Projects, url: '/projects' },
  { label: 'Performances', PageComponent: Performances, url: '/performances' },
  { label: 'Research', PageComponent: Research, url: '/research' },
  { label: 'Media', PageComponent: Media, url: '/speaking' },
  { label: 'Gallery', PageComponent: Gallery, url: '/gallery' },
  { label: 'CV', url: '/jack-purvis-resume-2023.pdf' },
];

export const defaultPage = pages[0];
export const DefaultPageComponent = defaultPage.PageComponent;
