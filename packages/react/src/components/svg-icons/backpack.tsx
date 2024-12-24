import { forwardRef, memo } from 'react';
import type { SVGProps } from 'react';
const SvgBackpack = memo(
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
        d="M7 22c-.55 0-1.02-.196-1.412-.587A1.926 1.926 0 0 1 5 20v-8c0-1.417.37-2.683 1.112-3.8A6.911 6.911 0 0 1 9 5.7V5c0-.833.292-1.542.875-2.125A2.893 2.893 0 0 1 12 2c.833 0 1.542.292 2.125.875S15 4.167 15 5v.7a6.912 6.912 0 0 1 2.887 2.5C18.63 9.317 19 10.583 19 12v8c0 .55-.196 1.02-.587 1.413A1.926 1.926 0 0 1 17 22H7Zm8-6c.283 0 .52-.096.713-.287A.968.968 0 0 0 16 15v-3H8v2h6v1c0 .283.096.52.287.713.192.191.43.287.713.287ZM11 5.1c.183-.033.35-.058.5-.075.15-.017.317-.025.5-.025s.35.008.5.025c.15.017.317.042.5.075V5a.967.967 0 0 0-.287-.713A.968.968 0 0 0 12 4a.968.968 0 0 0-.713.287A.967.967 0 0 0 11 5v.1Z"
      />
    </svg>
  )),
);
SvgBackpack.displayName = 'SvgBackpack';
export default SvgBackpack;
