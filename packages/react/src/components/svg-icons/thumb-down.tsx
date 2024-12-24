import { forwardRef, memo } from 'react';
import type { SVGProps } from 'react';
const SvgThumbDown = memo(
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
        d="M6 3h10v13l-7 7-1.25-1.25a1.313 1.313 0 0 1-.287-.475 1.636 1.636 0 0 1-.113-.575v-.35L8.45 16H3c-.533 0-1-.2-1.4-.6-.4-.4-.6-.867-.6-1.4v-2a2.04 2.04 0 0 1 .15-.75l3-7.05c.15-.333.4-.617.75-.85C5.25 3.117 5.617 3 6 3Zm12 13V3h4v13h-4Z"
      />
    </svg>
  )),
);
SvgThumbDown.displayName = 'SvgThumbDown';
export default SvgThumbDown;
