import { forwardRef, memo } from 'react';
import type { SVGProps } from 'react';
const SvgTrash = memo(
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
        d="M7 21c-.55 0-1.02-.196-1.412-.587A1.926 1.926 0 0 1 5 19V6H4V4h5V3h6v1h5v2h-1v13c0 .55-.196 1.02-.587 1.413A1.926 1.926 0 0 1 17 21H7Zm2-4h2V8H9v9Zm4 0h2V8h-2v9Z"
      />
    </svg>
  )),
);
SvgTrash.displayName = 'SvgTrash';
export default SvgTrash;
