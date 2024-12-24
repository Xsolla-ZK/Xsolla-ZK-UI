import { forwardRef, memo } from 'react';
import type { SVGProps } from 'react';
const SvgTag = memo(
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
        d="m21.4 14.25-7.15 7.15c-.2.2-.425.35-.675.45-.25.1-.5.15-.75.15s-.5-.05-.75-.15c-.25-.1-.475-.25-.675-.45l-8.825-8.825a1.975 1.975 0 0 1-.575-1.4V4c0-.55.196-1.02.587-1.413A1.926 1.926 0 0 1 4 2h7.175c.267 0 .525.054.775.163.25.108.467.254.65.437l8.8 8.825c.2.2.346.425.438.675.091.25.137.5.137.75s-.046.496-.138.738a1.874 1.874 0 0 1-.437.662ZM6.5 8c.417 0 .77-.146 1.063-.438C7.854 7.271 8 6.918 8 6.5c0-.417-.146-.77-.438-1.063A1.447 1.447 0 0 0 6.5 5c-.417 0-.77.146-1.063.438A1.447 1.447 0 0 0 5 6.5c0 .417.146.77.438 1.063.291.291.645.437 1.062.437Z"
      />
    </svg>
  )),
);
SvgTag.displayName = 'SvgTag';
export default SvgTag;
