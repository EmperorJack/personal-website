export type Performance = {
  date: string;
  name: string;
  location: string;
  links?: Array<{
    label: string;
    href: string;
  }>;
};

export type PerformancesByYear = Record<string, Array<Performance>>;
