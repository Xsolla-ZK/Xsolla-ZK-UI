import isPropValid from '@emotion/is-prop-valid';
import type { StyledOptions } from '@emotion/styled';

const shouldForwardProp: StyledOptions['shouldForwardProp'] = (prop) =>
  isPropValid(prop) && !prop.startsWith('xzkui');

export default shouldForwardProp;
