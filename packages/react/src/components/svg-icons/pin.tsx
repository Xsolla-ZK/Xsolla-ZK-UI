import { forwardRef, memo } from 'react';
import type { SVGProps } from 'react';
const SvgPin = memo(
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
        d="M12 12c.55 0 1.02-.196 1.412-.588.392-.391.588-.862.588-1.412 0-.55-.196-1.02-.588-1.412A1.926 1.926 0 0 0 12 8c-.55 0-1.02.196-1.412.588A1.926 1.926 0 0 0 10 10c0 .55.196 1.02.588 1.412.391.392.862.588 1.412.588Zm0 10c-2.683-2.283-4.688-4.404-6.013-6.363C4.662 13.68 4 11.867 4 10.2c0-2.5.804-4.492 2.412-5.975C8.021 2.742 9.883 2 12 2s3.98.742 5.587 2.225C19.197 5.708 20 7.7 20 10.2c0 1.667-.663 3.48-1.988 5.438C16.688 17.595 14.683 19.716 12 22Z"
      />
    </svg>
  )),
);
SvgPin.displayName = 'SvgPin';
export default SvgPin;
