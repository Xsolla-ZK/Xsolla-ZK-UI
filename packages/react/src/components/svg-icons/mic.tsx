import { forwardRef, memo } from 'react';
import type { SVGProps } from 'react';
const SvgMic = memo(
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
        d="M12 14a2.893 2.893 0 0 1-2.125-.875A2.893 2.893 0 0 1 9 11V5c0-.833.292-1.542.875-2.125A2.893 2.893 0 0 1 12 2c.833 0 1.542.292 2.125.875S15 4.167 15 5v6c0 .833-.292 1.542-.875 2.125A2.893 2.893 0 0 1 12 14Zm-1 7v-3.075c-1.733-.233-3.167-1.008-4.3-2.325C5.567 14.283 5 12.75 5 11h2c0 1.383.487 2.563 1.463 3.537C9.438 15.512 10.617 16 12 16s2.563-.488 3.537-1.463C16.512 13.563 17 12.383 17 11h2c0 1.75-.567 3.283-1.7 4.6-1.133 1.317-2.567 2.092-4.3 2.325V21h-2Z"
      />
    </svg>
  )),
);
SvgMic.displayName = 'SvgMic';
export default SvgMic;
