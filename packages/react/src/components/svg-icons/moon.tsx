import { forwardRef, memo } from 'react';
import type { SVGProps } from 'react';
const SvgMoon = memo(
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
        d="M12.1 22c-1.4 0-2.713-.267-3.938-.8a10.279 10.279 0 0 1-3.2-2.162 10.279 10.279 0 0 1-2.162-3.2A9.756 9.756 0 0 1 2 11.9c0-2.433.775-4.58 2.325-6.438C5.875 3.605 7.85 2.45 10.25 2a10.1 10.1 0 0 0 .275 4.838 9.867 9.867 0 0 0 2.5 4.137 9.867 9.867 0 0 0 4.138 2.5A10.1 10.1 0 0 0 22 13.75c-.433 2.4-1.583 4.375-3.45 5.925C16.683 21.225 14.533 22 12.1 22Z"
      />
    </svg>
  )),
);
SvgMoon.displayName = 'SvgMoon';
export default SvgMoon;
