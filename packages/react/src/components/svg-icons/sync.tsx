import { forwardRef, memo } from 'react';
import type { SVGProps } from 'react';
const SvgSync = memo(
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
        d="M4 20v-2h2.75l-.4-.35c-.817-.817-1.412-1.704-1.787-2.662A7.997 7.997 0 0 1 4 12.05c0-1.85.554-3.496 1.662-4.938C6.771 5.671 8.217 4.717 10 4.25v2.1a5.928 5.928 0 0 0-2.9 2.213A5.918 5.918 0 0 0 6 12.05c0 .75.142 1.48.425 2.188.283.708.725 1.362 1.325 1.962l.25.25V14h2v6H4Zm10-.25v-2.1a5.928 5.928 0 0 0 2.9-2.212A5.919 5.919 0 0 0 18 11.95c0-.75-.142-1.48-.425-2.188-.283-.708-.725-1.362-1.325-1.962L16 7.55V10h-2V4h6v2h-2.75l.4.35c.817.817 1.413 1.704 1.788 2.662.375.959.562 1.938.562 2.938 0 1.85-.554 3.496-1.663 4.938-1.108 1.441-2.554 2.395-4.337 2.862Z"
      />
    </svg>
  )),
);
SvgSync.displayName = 'SvgSync';
export default SvgSync;
