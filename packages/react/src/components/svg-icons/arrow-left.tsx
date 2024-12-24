import { forwardRef, memo } from 'react';
import type { SVGProps } from 'react';
const SvgArrowLeft = memo(
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
        d="m7.825 13 5.6 5.6L12 20l-8-8 8-8 1.425 1.4-5.6 5.6H20v2H7.825Z"
      />
    </svg>
  )),
);
SvgArrowLeft.displayName = 'SvgArrowLeft';
export default SvgArrowLeft;
