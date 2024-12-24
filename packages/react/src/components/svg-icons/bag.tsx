import { forwardRef, memo } from 'react';
import type { SVGProps } from 'react';
const SvgBag = memo(
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
        d="M6 22c-.55 0-1.02-.196-1.412-.587A1.926 1.926 0 0 1 4 20V8c0-.55.196-1.02.588-1.412A1.926 1.926 0 0 1 6 6h2c0-1.1.392-2.042 1.175-2.825C9.958 2.392 10.9 2 12 2s2.042.392 2.825 1.175C15.608 3.958 16 4.9 16 6h2c.55 0 1.02.196 1.413.588.391.391.587.862.587 1.412v12c0 .55-.196 1.02-.587 1.413A1.926 1.926 0 0 1 18 22H6Zm4-16h4c0-.55-.196-1.02-.588-1.412A1.926 1.926 0 0 0 12 4c-.55 0-1.02.196-1.412.588A1.926 1.926 0 0 0 10 6Zm5 5c.283 0 .52-.096.713-.287A.968.968 0 0 0 16 10V8h-2v2c0 .283.096.52.287.713.192.191.43.287.713.287Zm-6 0c.283 0 .52-.096.713-.287A.968.968 0 0 0 10 10V8H8v2c0 .283.096.52.287.713.192.191.43.287.713.287Z"
      />
    </svg>
  )),
);
SvgBag.displayName = 'SvgBag';
export default SvgBag;
