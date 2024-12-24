import { forwardRef, memo } from 'react';
import type { SVGProps } from 'react';
const SvgMoreVertical = memo(
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
        d="M12 20c-.55 0-1.02-.196-1.412-.587A1.926 1.926 0 0 1 10 18c0-.55.196-1.02.588-1.413A1.926 1.926 0 0 1 12 16c.55 0 1.02.196 1.412.587.392.392.588.863.588 1.413s-.196 1.02-.588 1.413A1.926 1.926 0 0 1 12 20Zm0-6c-.55 0-1.02-.196-1.412-.588A1.926 1.926 0 0 1 10 12c0-.55.196-1.02.588-1.412A1.926 1.926 0 0 1 12 10c.55 0 1.02.196 1.412.588.392.391.588.862.588 1.412 0 .55-.196 1.02-.588 1.412A1.926 1.926 0 0 1 12 14Zm0-6c-.55 0-1.02-.196-1.412-.588A1.926 1.926 0 0 1 10 6c0-.55.196-1.02.588-1.412A1.926 1.926 0 0 1 12 4c.55 0 1.02.196 1.412.588.392.391.588.862.588 1.412 0 .55-.196 1.02-.588 1.412A1.926 1.926 0 0 1 12 8Z"
      />
    </svg>
  )),
);
SvgMoreVertical.displayName = 'SvgMoreVertical';
export default SvgMoreVertical;
