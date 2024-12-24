import { forwardRef, memo } from 'react';
import type { SVGProps } from 'react';
const SvgArrowRight = memo(
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
        d="M16.175 13H4v-2h12.175l-5.6-5.6L12 4l8 8-8 8-1.425-1.4 5.6-5.6Z"
      />
    </svg>
  )),
);
SvgArrowRight.displayName = 'SvgArrowRight';
export default SvgArrowRight;
