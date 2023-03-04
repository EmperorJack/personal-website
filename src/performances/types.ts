type PerformanceBase = {
  date: { start: string; end?: string };
  name: string;
  location: string;
  links?: Array<{
    label: string;
    href: string;
  }>;
  hidden?: boolean;
};

export type Performance = PerformanceBase & {
  _type: 'performance';
};

type Genre =
  | 'melodic'
  | 'progressive'
  | 'deep'
  | 'driving'
  | 'tech'
  | 'breaks'
  | 'trance';

export type InnerboundPerformance = PerformanceBase & {
  _type: 'innerbound-performance';
  googleDriveId: string;
  shortName?: string;
  performanceDate?: string;
  tags: Array<Genre>;
  thumbnailSrc: string;
};

export type PerformancesByYear = Record<
  string,
  Array<Performance | InnerboundPerformance>
>;
