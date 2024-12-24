import { forwardRef, memo } from 'react';
import type { SVGProps } from 'react';
const SvgWarning = memo(
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
        d="M1 21 12 2l11 19H1Zm11-3c.283 0 .52-.096.713-.288A.968.968 0 0 0 13 17a.968.968 0 0 0-.287-.712A.968.968 0 0 0 12 16a.968.968 0 0 0-.713.288A.968.968 0 0 0 11 17c0 .283.096.52.287.712.192.192.43.288.713.288Zm-1-3h2v-5h-2v5Z"
      />
    </svg>
  )),
);
SvgWarning.displayName = 'SvgWarning';
export default SvgWarning;
