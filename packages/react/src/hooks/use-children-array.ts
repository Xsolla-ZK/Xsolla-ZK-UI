import { Fragment, isValidElement } from 'react';
import { useMemo } from 'react';
import { Children } from 'react';
import type { PropsWithChildren, ReactElement, ReactNode } from 'react';

function useChildrenArray<T extends ReactNode>(children: T) {
  return useMemo(
    () =>
      Children.toArray(children).flatMap((child) =>
        isValidElement(child) && child.type === Fragment
          ? Children.toArray((child as ReactElement<PropsWithChildren>).props.children)
          : child,
      ),
    [children],
  );
}

export default useChildrenArray;
