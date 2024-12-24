import { forwardRef, memo } from 'react';
import type { SVGProps } from 'react';
const SvgDoubleCheckmark = memo(
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
        d="m6.7 18-5.65-5.65 1.425-1.4 4.25 4.25 1.4 1.4L6.7 18Zm5.65 0L6.7 12.35l1.4-1.425 4.25 4.25 9.2-9.2 1.4 1.425L12.35 18Zm0-5.65-1.425-1.4L15.875 6 17.3 7.4l-4.95 4.95Z"
      />
    </svg>
  )),
);
SvgDoubleCheckmark.displayName = 'SvgDoubleCheckmark';
export default SvgDoubleCheckmark;
