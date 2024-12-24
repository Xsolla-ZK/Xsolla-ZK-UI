import { forwardRef, memo } from 'react';
import type { SVGProps } from 'react';
const SvgExpandVertical = memo(
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
        d="m12 21-4.5-4.5 1.45-1.45L12 18.1l3.05-3.05 1.45 1.45L12 21ZM8.95 9.05 7.5 7.6 12 3.1l4.5 4.5-1.45 1.45L12 6 8.95 9.05Z"
      />
    </svg>
  )),
);
SvgExpandVertical.displayName = 'SvgExpandVertical';
export default SvgExpandVertical;
