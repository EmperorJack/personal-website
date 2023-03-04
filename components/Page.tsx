import { Fragment } from 'react';

interface PageProps {
  sections: Record<string, React.ReactNode>;
}

export function Page(props: PageProps) {
  const { sections } = props;

  return (
    <div className="page">
      {Object.entries(sections).map(([header, content], i) => (
        <Fragment key={i}>
          {header && <div className="page__header">{header}</div>}

          <div className="page__content">{content}</div>
        </Fragment>
      ))}
    </div>
  );
}
