import { forwardRef, memo } from 'react';
import type { SVGProps } from 'react';
const SvgVolumeUp = memo(
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
        d="M14 20.725v-2.05c1.5-.433 2.708-1.267 3.625-2.5.917-1.233 1.375-2.633 1.375-4.2 0-1.567-.458-2.967-1.375-4.2S15.5 5.708 14 5.275v-2.05c2.067.467 3.75 1.512 5.05 3.137C20.35 7.987 21 9.858 21 11.975c0 2.117-.65 3.988-1.95 5.612-1.3 1.625-2.983 2.671-5.05 3.138ZM3 15V9h4l5-5v16l-5-5H3Zm11 1V7.95a4.151 4.151 0 0 1 1.838 1.65c.441.733.662 1.533.662 2.4 0 .85-.22 1.637-.662 2.363A4.174 4.174 0 0 1 14 16Z"
      />
    </svg>
  )),
);
SvgVolumeUp.displayName = 'SvgVolumeUp';
export default SvgVolumeUp;
