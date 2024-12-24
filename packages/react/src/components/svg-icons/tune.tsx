import { forwardRef, memo } from 'react';
import type { SVGProps } from 'react';
const SvgTune = memo(
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
        d="M11 21v-6h2v2h8v2h-8v2h-2Zm-8-2v-2h6v2H3Zm4-4v-2H3v-2h4V9h2v6H7Zm4-2v-2h10v2H11Zm4-4V3h2v2h4v2h-4v2h-2ZM3 7V5h10v2H3Z"
      />
    </svg>
  )),
);
SvgTune.displayName = 'SvgTune';
export default SvgTune;
