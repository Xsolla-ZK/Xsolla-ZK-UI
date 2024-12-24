import { forwardRef, memo } from 'react';
import type { SVGProps } from 'react';
const SvgBookmark = memo(
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
        d="M5 21V5c0-.55.196-1.02.588-1.413A1.926 1.926 0 0 1 7 3h10c.55 0 1.02.196 1.413.587C18.803 3.98 19 4.45 19 5v16l-7-3-7 3Z"
      />
    </svg>
  )),
);
SvgBookmark.displayName = 'SvgBookmark';
export default SvgBookmark;
