import { Children, Fragment, isValidElement, useMemo } from 'react';
import type { PropsWithChildren, ReactElement, ReactNode } from 'react';

function useIconsPosition<T extends ReactNode, C>(children: T, componentTypeCondition: C) {
  const childrenArray = useMemo(
    () =>
      Children.toArray(children).flatMap((child) =>
        isValidElement(child) && child.type === Fragment
          ? Children.toArray((child as ReactElement<PropsWithChildren>).props.children)
          : child,
      ),
    [children],
  );

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
