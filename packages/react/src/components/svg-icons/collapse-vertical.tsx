import { forwardRef, memo } from 'react';
import type { SVGProps } from 'react';
const SvgCollapseVertical = memo(
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
        d="M7.4 22 6 20.6l6-6 6 6-1.4 1.4-4.6-4.6L7.4 22ZM12 9.4l-6-6L7.4 2 12 6.6 16.6 2 18 3.4l-6 6Z"
      />
    </svg>
  )),
);
SvgCollapseVertical.displayName = 'SvgCollapseVertical';
export default SvgCollapseVertical;
