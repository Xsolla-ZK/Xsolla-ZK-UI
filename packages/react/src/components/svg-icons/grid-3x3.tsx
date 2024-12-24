import { forwardRef, memo } from 'react';
import type { SVGProps } from 'react';
const SvgGrid3X3 = memo(
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
        d="M5 21h2.675v-4.675H3V19c0 .55.196 1.02.587 1.413C3.98 20.803 4.45 21 5 21Zm4.675 0h4.65v-4.675h-4.65V21Zm6.65 0H19c.55 0 1.02-.196 1.413-.587.391-.392.587-.863.587-1.413v-2.675h-4.675V21ZM3 14.325h4.675v-4.65H3v4.65Zm6.675 0h4.65v-4.65h-4.65v4.65Zm6.65 0H21v-4.65h-4.675v4.65ZM3 7.675h4.675V3H5c-.55 0-1.02.196-1.413.587A1.926 1.926 0 0 0 3 5v2.675Zm6.675 0h4.65V3h-4.65v4.675Zm6.65 0H21V5c0-.55-.196-1.02-.587-1.413A1.926 1.926 0 0 0 19 3h-2.675v4.675Z"
      />
    </svg>
  )),
);
SvgGrid3X3.displayName = 'SvgGrid3X3';
export default SvgGrid3X3;
