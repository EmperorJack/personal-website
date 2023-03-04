import type { NextApiRequest, NextApiResponse } from 'next';

import { djPerformances } from '@/src/performances/djPerformances';
import { djvjPerformances } from '@/src/performances/djvjPerformances';
import { InnerboundPerformance } from '@/src/performances/types';

interface InnerboundPerformancesResponse {
  performances: Array<InnerboundPerformance>;
}

function timeOfInnerboundPerformance(
  performance: InnerboundPerformance,
): number {
  const dateString = performance.performanceDate || performance.date.start;
  const tokens = dateString.split('/').reverse().join('-');
  return Date.parse(tokens);
}

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<InnerboundPerformancesResponse>,
) {
  const performances = [
    Object.values(djPerformances).flat(),
    Object.values(djvjPerformances).flat(),
  ]
    .flat()
    .filter(
      (performance): performance is InnerboundPerformance =>
        performance._type === 'innerbound-performance',
    )
    .sort(
      (a, b) => timeOfInnerboundPerformance(b) - timeOfInnerboundPerformance(a),
    );

  res.status(200).json({ performances });
}
