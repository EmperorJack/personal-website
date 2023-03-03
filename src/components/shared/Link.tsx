interface LinkProps {
  href: string;
  className?: string;
  children: React.ReactNode;
}

export function Link(props: LinkProps) {
  const { href, className, children } = props;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`link ${className}`}
    >
      {children}
    </a>
  );
}
