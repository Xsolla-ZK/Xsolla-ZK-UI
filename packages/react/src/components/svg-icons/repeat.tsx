import { forwardRef, memo } from 'react';
import type { SVGProps } from 'react';
const SvgRepeat = memo(
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
        d="M12 22c-1.25 0-2.42-.238-3.512-.712a9.149 9.149 0 0 1-2.85-1.925 9.147 9.147 0 0 1-1.925-2.85A8.707 8.707 0 0 1 3 13h2c0 1.95.68 3.604 2.037 4.962C8.396 19.322 10.05 20 12 20c1.95 0 3.604-.68 4.962-2.038C18.322 16.604 19 14.95 19 13c0-1.95-.68-3.604-2.038-4.963C15.604 6.68 13.95 6 12 6h-.15l1.55 1.55L12 9 8 5l4-4 1.4 1.45L11.85 4H12c1.25 0 2.42.237 3.512.713a9.147 9.147 0 0 1 2.85 1.925 9.149 9.149 0 0 1 1.926 2.85A8.707 8.707 0 0 1 21 13c0 1.25-.238 2.42-.712 3.512a9.148 9.148 0 0 1-1.925 2.85 9.148 9.148 0 0 1-2.85 1.926A8.707 8.707 0 0 1 12 22Z"
      />
    </svg>
  )),
);
SvgRepeat.displayName = 'SvgRepeat';
export default SvgRepeat;
