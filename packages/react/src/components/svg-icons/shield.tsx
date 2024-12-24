import { forwardRef, memo } from 'react';
import type { SVGProps } from 'react';
const SvgShield = memo(
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
        d="M12 22c-2.317-.583-4.23-1.913-5.737-3.988C4.754 15.938 4 13.633 4 11.1V5l8-3 8 3v6.1c0 2.533-.754 4.838-2.262 6.912C16.229 20.087 14.317 21.418 12 22Z"
      />
    </svg>
  )),
);
SvgShield.displayName = 'SvgShield';
export default SvgShield;
