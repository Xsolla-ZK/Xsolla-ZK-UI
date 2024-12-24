import { forwardRef, memo } from 'react';
import type { SVGProps } from 'react';
const SvgDoubleArrowUp = memo(
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
        d="M7.4 18.4 6 17l6-6 6 6-1.4 1.4-4.6-4.575L7.4 18.4Zm0-6L6 11l6-6 6 6-1.4 1.4L12 7.825 7.4 12.4Z"
      />
    </svg>
  )),
);
SvgDoubleArrowUp.displayName = 'SvgDoubleArrowUp';
export default SvgDoubleArrowUp;
