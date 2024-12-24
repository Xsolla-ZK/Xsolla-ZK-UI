import { forwardRef, memo } from 'react';
import type { SVGProps } from 'react';
const SvgBarChart = memo(
  forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>((props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 24 24"
      ref={ref}
      {...props}
    >
      <path fill="currentColor" d="M16 20v-7h4v7h-4Zm-6 0V4h4v16h-4Zm-6 0V9h4v11H4Z" />
    </svg>
  )),
);
SvgBarChart.displayName = 'SvgBarChart';
export default SvgBarChart;
