import Image, { StaticImageData } from 'next/image';

import { Link } from './shared/Link';

interface ProjectProps {
  title: string;
  description: string;
  links: Array<{
    label: string;
    href: string;
  }>;
  imagePath: StaticImageData;
}

export function Project(props: ProjectProps) {
  const { title, description, links, imagePath } = props;

  return (
    <div className="project">
      <div className="title">{title}</div>

      <div className="project__description">
        <p>{description}</p>
      </div>

      <div className="project__links">
        {links.map(({ label, href }) => (
          <Link key={label} href={href}>
            {label}
          </Link>
        ))}
      </div>

      <Image src={imagePath} alt="" className="project__image" />
    </div>
  );
}
