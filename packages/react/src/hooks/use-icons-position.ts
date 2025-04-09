import { isValidElement } from 'react';
import useChildrenArray from './use-children-array';
import type { ReactNode } from 'react';

function useIconsPosition<T extends ReactNode, C>(children: T, componentTypeCondition: C) {
  const childrenArray = useChildrenArray(children);

  const firstElement = childrenArray[0];
  const hasIconLeft = Boolean(
    firstElement && isValidElement(firstElement) && firstElement.type === componentTypeCondition,
  );

  const lastElement = childrenArray[childrenArray.length - 1];
  const hasIconRight = Boolean(
    lastElement && isValidElement(lastElement) && lastElement.type === componentTypeCondition,
  );

  return {
    hasIconLeft,
    hasIconRight,
  };
}

export default useIconsPosition;
