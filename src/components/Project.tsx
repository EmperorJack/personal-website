import Image, { ImageProps } from 'next/image';

import { Link } from './Link';

interface ProjectProps {
  title: string;
  description: string;
  links: Array<{
    label: string;
    href: string;
  }>;
  imageProps: ImageProps;
}

export function Project(props: ProjectProps) {
  const { title, description, links, imageProps } = props;
  const { alt: imageAlt } = imageProps;

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

      <Image
        {...imageProps}
        alt={imageAlt}
        className="project__image"
        sizes="920px"
      />
    </div>
  );
}
