import Link from 'next/link';
import { useRouter } from 'next/router';

interface Page {
  label: string;
  href: string;
  isExternal?: boolean;
}

const pages: Array<Page> = [
  { label: 'About', href: '/' },
  { label: 'Projects', href: '/projects' },
  { label: 'Performances', href: '/performances' },
  { label: 'Research', href: '/research' },
  { label: 'Media', href: '/media' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'CV', href: '/jack-purvis-resume-2023.pdf', isExternal: true },
];

export function Nav() {
  const { pathname } = useRouter();

  return (
    <div className="nav">
      {pages.map((page) => {
        const { label, href, isExternal } = page;

        return (
          <Link
            key={label}
            href={href}
            className={`nav__link ${
              page.href === pathname ? 'nav__link--selected' : ''
            }`}
            target={isExternal ? '_blank' : undefined}
            rel={isExternal ? 'noopener noreferrer' : undefined}
          >
            {label}
          </Link>
        );
      })}
    </div>
  );
}
