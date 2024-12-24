import { forwardRef, memo } from 'react';
import type { SVGProps } from 'react';
const SvgEyes = memo(
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
        fillRule="evenodd"
        d="M8 17a4.992 4.992 0 0 0 4-2A5 5 0 1 0 12 9a5 5 0 1 0-4 8Zm0-2a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm8 0a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z"
        clipRule="evenodd"
      />
    </svg>
  )),
);
SvgEyes.displayName = 'SvgEyes';
export default SvgEyes;
