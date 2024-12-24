import { forwardRef, memo } from 'react';
import type { SVGProps } from 'react';
const SvgDocument = memo(
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
        d="M8 18h8v-2H8v2Zm0-4h8v-2H8v2Zm-2 8c-.55 0-1.02-.196-1.412-.587A1.926 1.926 0 0 1 4 20V4c0-.55.196-1.02.588-1.413A1.926 1.926 0 0 1 6 2h8l6 6v12c0 .55-.196 1.02-.587 1.413A1.926 1.926 0 0 1 18 22H6Zm7-13h5l-5-5v5Z"
      />
    </svg>
  )),
);
SvgDocument.displayName = 'SvgDocument';
export default SvgDocument;
