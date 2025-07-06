import React from 'react';
import clsx from 'clsx';
import { motion } from 'framer-motion';

export interface ChartData {
  label: string;
  value: number;
  color?: string;
}

export interface ChartWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  data: ChartData[];
  type?: 'bar' | 'line';
  showLegend?: boolean;
  width?: number | string;
  height?: number | string;
  className?: string;
}

export const ChartWrapper = React.forwardRef<HTMLDivElement, ChartWrapperProps>(function ChartWrapper(
  {
    data,
    type = 'bar',
    showLegend = false,
    width = '100%',
    height = 200,
    className,
    ...rest
  },
  ref,
) {
  const max = Math.max(...data.map(d => d.value));
  const barWidth = 100 / data.length;

  const points = data
    .map((d, i) => `${(i / (data.length - 1)) * 100},${100 - (d.value / max) * 100}`)
    .join(' ');

  return (
    <motion.div ref={ref} style={{ width, height }} className={clsx('relative', className)} {...rest}>
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 w-full h-full">
        {type === 'bar'
          ? data.map((d, i) => {
              const h = (d.value / max) * 100;
              return (
                <rect
                  key={i}
                  x={`${i * barWidth + 1}%`}
                  y={`${100 - h}%`}
                  width={`${barWidth - 2}%`}
                  height={`${h}%`}
                  fill={d.color || '#3b82f6'}
                >
                  <title>{`${d.label}: ${d.value}`}</title>
                </rect>
              );
            })
          : (
            <polyline
              fill="none"
              stroke="#3b82f6"
              strokeWidth="2"
              points={points}
            >
              <title>Line chart</title>
            </polyline>
          )}
      </svg>
      {showLegend && (
        <ul className="absolute bottom-0 left-0 flex flex-wrap gap-2 bg-white bg-opacity-70 p-1 text-xs">
          {data.map((d, i) => (
            <li key={i} className="flex items-center gap-1">
              <span className="inline-block w-3 h-3" style={{ background: d.color || '#3b82f6' }} />
              <span>{d.label}</span>
            </li>
          ))}
        </ul>
      )}
    </motion.div>
  );
});
