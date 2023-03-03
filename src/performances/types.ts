export type Performance = {
  date: string;
  name: string;
  location: string;
  url?: string | Array<string>;
  url_label?: string | Array<string>;
};

export type PerformancesByYear = Record<string, Array<Performance>>;
