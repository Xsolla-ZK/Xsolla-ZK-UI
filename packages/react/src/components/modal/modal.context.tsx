import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import type { XZKUIModalSharedProps } from './modal.types';
import type { PropsWithChildren } from 'react';

interface XZKUIModalContextValues {
  // open: boolean;
  step: number;
  changeStep: (value: number) => void;
  back: () => void;
  close: XZKUIModalSharedProps['handleClose'];
}

const XZKUIModalContext = createContext<XZKUIModalContextValues | null>(null);

const Provider = XZKUIModalContext.Provider;
// const Consumer = XZKUIModalContext.Consumer;

export function useXZKUIModalCtx() {
  const ctx = useContext(XZKUIModalContext);

  if (!ctx) {
    throw new Error('useXZKUIModalCtx must be used within a XZKUIModalProvider');
  }

  return ctx;
}

type XZKUIModalProviderProps = Pick<XZKUIModalSharedProps, 'handleClose' | 'onTransitionExited'> & {
  initialStep?: number;
};

function XZKUIModalProvider({
  initialStep = 0,
  handleClose,
  onTransitionExited,
  children,
}: PropsWithChildren<XZKUIModalProviderProps>) {
  const [step, setStep] = useState(() => initialStep);
  const history = useRef<Array<XZKUIModalContextValues['step']>>([]);

  const handleBack = useCallback(() => {
    const prev = history.current.pop();
    if (prev) {
      setStep(prev);
    } else {
      setStep(0);
    }
  }, []);

  const changeStep = useCallback(
    (value: XZKUIModalContextValues['step']) => {
      history.current.push(step);
      setStep(value);
    },
    [step],
  );

  useEffect(() => {
    onTransitionExited(() => {
      setStep(initialStep);
    });
  }, []);

  const contextValue = useMemo(
    () => ({
      changeStep,
      step,
      back: handleBack,
      close: handleClose,
    }),
    [changeStep, step, handleBack, handleClose],
  );

  return <Provider value={contextValue}>{children}</Provider>;
}

export default XZKUIModalProvider;
