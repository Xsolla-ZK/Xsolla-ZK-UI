import { forwardRef, memo } from 'react';
import type { SVGProps } from 'react';
const SvgContentCopy = memo(
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
        d="M9 18c-.55 0-1.02-.196-1.412-.587A1.926 1.926 0 0 1 7 16V4c0-.55.196-1.02.588-1.413A1.926 1.926 0 0 1 9 2h9c.55 0 1.02.196 1.413.587C19.803 2.98 20 3.45 20 4v12c0 .55-.196 1.02-.587 1.413A1.926 1.926 0 0 1 18 18H9Zm-4 4c-.55 0-1.02-.196-1.413-.587A1.926 1.926 0 0 1 3 20V6h2v14h11v2H5Z"
      />
    </svg>
  )),
);
SvgContentCopy.displayName = 'SvgContentCopy';
export default SvgContentCopy;
