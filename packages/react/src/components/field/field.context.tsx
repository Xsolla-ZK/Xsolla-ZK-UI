import { createContext, useContext } from 'react';
import type { XZKUIFieldContextValues } from './field.types';

export const XZKUIFieldContext = createContext<XZKUIFieldContextValues>({
  error: false,
  id: undefined,
});

export const useXZKUIFieldContext = () => {
  const ctx = useContext(XZKUIFieldContext);

  if (!ctx) {
    throw new Error(
      'Xsolla-ZK UI: XZKUIFieldContext is missing. Field parts must be placed within <XZKUIField>.',
    );
  }

  return ctx;
};
