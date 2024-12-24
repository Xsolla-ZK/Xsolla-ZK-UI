import { forwardRef, memo } from 'react';
import type { SVGProps } from 'react';
const SvgShare = memo(
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
        d="M17 22a2.893 2.893 0 0 1-2.125-.875A2.893 2.893 0 0 1 14 19c0-.1.025-.333.075-.7L7.05 14.2A2.966 2.966 0 0 1 5 15a2.893 2.893 0 0 1-2.125-.875A2.893 2.893 0 0 1 2 12c0-.833.292-1.542.875-2.125A2.893 2.893 0 0 1 5 9a2.97 2.97 0 0 1 2.05.8l7.025-4.1a1.706 1.706 0 0 1-.063-.338A4.779 4.779 0 0 1 14 5c0-.833.292-1.542.875-2.125A2.893 2.893 0 0 1 17 2c.833 0 1.542.292 2.125.875S20 4.167 20 5s-.292 1.542-.875 2.125A2.893 2.893 0 0 1 17 8a2.97 2.97 0 0 1-2.05-.8l-7.025 4.1c.033.117.054.23.063.337.008.109.012.23.012.363 0 .133-.004.254-.013.363-.008.108-.029.22-.062.337l7.025 4.1A2.967 2.967 0 0 1 17 16c.833 0 1.542.292 2.125.875S20 18.167 20 19s-.292 1.542-.875 2.125A2.893 2.893 0 0 1 17 22Z"
      />
    </svg>
  )),
);
SvgShare.displayName = 'SvgShare';
export default SvgShare;
