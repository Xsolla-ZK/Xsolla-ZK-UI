import { forwardRef, memo } from 'react';
import type { SVGProps } from 'react';
const SvgPencil = memo(
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
        d="M3 21v-4.25L16.2 3.575c.2-.183.42-.325.663-.425.241-.1.495-.15.762-.15s.525.05.775.15c.25.1.467.25.65.45L20.425 5c.2.183.346.4.438.65a2.165 2.165 0 0 1 0 1.512 1.874 1.874 0 0 1-.438.663L7.25 21H3ZM17.6 7.8 19 6.4 17.6 5l-1.4 1.4 1.4 1.4Z"
      />
    </svg>
  )),
);
SvgPencil.displayName = 'SvgPencil';
export default SvgPencil;
