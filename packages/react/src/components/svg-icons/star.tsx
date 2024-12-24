import { forwardRef, memo } from 'react';
import type { SVGProps } from 'react';
const SvgStar = memo(
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
        d="m5.825 21 1.625-7.025L2 9.25l7.2-.625L12 2l2.8 6.625 7.2.625-5.45 4.725L18.175 21 12 17.275 5.825 21Z"
      />
    </svg>
  )),
);
SvgStar.displayName = 'SvgStar';
export default SvgStar;
