import type { XZKUIBreadcrumbsProps } from './breadcrumbs.types';
import Styled from './breadcrumbs.styled';

function XZKUIBreadcrumbs({ children }: XZKUIBreadcrumbsProps) {
  return (
    <Styled.Root>{children}</Styled.Root>
  );
}

export default XZKUIBreadcrumbs;
