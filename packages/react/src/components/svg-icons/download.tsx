import { forwardRef, memo } from 'react';
import type { SVGProps } from 'react';
const SvgDownload = memo(
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
        d="m12 16-5-5 1.4-1.45 2.6 2.6V4h2v8.15l2.6-2.6L17 11l-5 5Zm-6 4c-.55 0-1.02-.196-1.412-.587A1.926 1.926 0 0 1 4 18v-3h2v3h12v-3h2v3c0 .55-.196 1.02-.587 1.413A1.926 1.926 0 0 1 18 20H6Z"
      />
    </svg>
  )),
);
SvgDownload.displayName = 'SvgDownload';
export default SvgDownload;
