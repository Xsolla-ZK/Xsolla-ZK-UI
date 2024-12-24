import { forwardRef, memo } from 'react';
import type { SVGProps } from 'react';
const SvgKey = memo(
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
        d="M7 15c.833 0 1.542-.292 2.125-.875A2.893 2.893 0 0 0 10 12c0-.833-.292-1.542-.875-2.125A2.893 2.893 0 0 0 7 9c-.833 0-1.542.292-2.125.875A2.893 2.893 0 0 0 4 12c0 .833.292 1.542.875 2.125A2.893 2.893 0 0 0 7 15Zm0 3c-1.667 0-3.083-.583-4.25-1.75C1.583 15.083 1 13.667 1 12c0-1.667.583-3.083 1.75-4.25C3.917 6.583 5.333 6 7 6c1.35 0 2.53.383 3.537 1.15 1.009.767 1.713 1.717 2.113 2.85h8.375L23 11.975l-3.5 4L17 14l-2 2-2-2h-.35a5.81 5.81 0 0 1-2.175 2.9A5.863 5.863 0 0 1 7 18Z"
      />
    </svg>
  )),
);
SvgKey.displayName = 'SvgKey';
export default SvgKey;
