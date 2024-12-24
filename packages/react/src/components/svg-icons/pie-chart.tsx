import { forwardRef, memo } from 'react';
import type { SVGProps } from 'react';
const SvgPieChart = memo(
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
      <path
        fill="currentColor"
        d="M13 11V2.1c2.383.25 4.396 1.2 6.038 2.85C20.679 6.6 21.633 8.617 21.9 11H13Zm-1.975 10.875c-2.533-.25-4.654-1.317-6.362-3.2C2.954 16.792 2.1 14.567 2.1 12c0-2.583.854-4.817 2.563-6.7 1.708-1.883 3.829-2.95 6.362-3.2v19.775Zm1.975 0v-8.9h8.9c-.233 2.383-1.18 4.404-2.837 6.063-1.659 1.658-3.68 2.604-6.063 2.837Z"
      />
    </svg>
  )),
);
SvgPieChart.displayName = 'SvgPieChart';
export default SvgPieChart;
