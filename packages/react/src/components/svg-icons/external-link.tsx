import { forwardRef, memo } from 'react';
import type { SVGProps } from 'react';
const SvgExternalLink = memo(
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
        d="M5 3c-.55 0-1.02.196-1.413.587A1.926 1.926 0 0 0 3 5v14c0 .55.196 1.02.587 1.413C3.98 20.803 4.45 21 5 21h14c.55 0 1.02-.196 1.413-.587.391-.392.587-.863.587-1.413v-7h-2v7H5V5h7V3H5Zm9 0v2h3.6l-9.3 9.3 1.4 1.4L19 6.425V10h2V3h-7Z"
      />
    </svg>
  )),
);
SvgExternalLink.displayName = 'SvgExternalLink';
export default SvgExternalLink;
