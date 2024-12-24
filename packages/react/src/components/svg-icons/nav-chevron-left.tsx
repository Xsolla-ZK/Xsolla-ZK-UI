import { forwardRef, memo } from 'react';
import type { SVGProps } from 'react';
const SvgNavChevronLeft = memo(
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
      <g clipPath="url(#a)">
        <path fill="currentColor" d="M10 22 0 12 10 2l1.775 1.775L3.55 12l8.225 8.225L10 22Z" />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="currentColor" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  )),
);
SvgNavChevronLeft.displayName = 'SvgNavChevronLeft';
export default SvgNavChevronLeft;
