const template = (variables, { tpl }) => tpl`

${variables.interfaces};
import { forwardRef, memo } from 'react';
import type { SVGProps } from 'react';

const ${variables.componentName} = memo(
  forwardRef<
    SVGSVGElement,
    SVGProps<SVGSVGElement>
  >((props, ref) => (
  ${variables.jsx}
)));

${variables.componentName}.displayName = '${variables.componentName}';
export default ${variables.componentName};
`;

module.exports = template;
