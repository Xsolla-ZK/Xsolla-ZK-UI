import { forwardRef, memo } from 'react';
import type { SVGProps } from 'react';
const SvgVolumeSlash = memo(
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
        d="m19.8 22.6-3.025-3.025a8.302 8.302 0 0 1-1.325.688c-.467.191-.95.345-1.45.462v-2.05c.233-.083.463-.167.688-.25.224-.083.437-.183.637-.3L12 14.8V20l-5-5H3V9h3.2L1.4 4.2l1.4-1.4 18.4 18.4-1.4 1.4Zm-.2-5.8-1.45-1.45a6.787 6.787 0 0 0 .638-1.625c.141-.567.212-1.15.212-1.75 0-1.567-.458-2.967-1.375-4.2S15.5 5.708 14 5.275v-2.05c2.067.467 3.75 1.512 5.05 3.137C20.35 7.987 21 9.858 21 11.975c0 .883-.12 1.733-.363 2.55A8.8 8.8 0 0 1 19.6 16.8Zm-3.35-3.35L14 11.2V7.95a4.15 4.15 0 0 1 1.838 1.65c.441.733.662 1.533.662 2.4a4.33 4.33 0 0 1-.25 1.45ZM12 9.2 9.4 6.6 12 4v5.2Z"
      />
    </svg>
  )),
);
SvgVolumeSlash.displayName = 'SvgVolumeSlash';
export default SvgVolumeSlash;
