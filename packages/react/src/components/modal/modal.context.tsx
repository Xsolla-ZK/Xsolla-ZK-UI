import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import type { XZKUIModalContextValues, XZKUIModalSharedProps } from './modal.types';
import type { PropsWithChildren } from 'react';

const XZKUIModalContext = createContext<XZKUIModalContextValues | null>(null);

const Provider = XZKUIModalContext.Provider;
// const Consumer = XZKUIModalContext.Consumer;

export function useXZKUIModalContext() {
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

  const handleNext = useCallback(() => {
    setStep((value) => {
      history.current.push(value);
      return value + 1;
    });
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
      next: handleNext,
      close: handleClose,
      onTransitionExited,
    }),
    [changeStep, step, handleBack, handleNext, handleClose, onTransitionExited],
  );

  return <Provider value={contextValue}>{children}</Provider>;
}

export default XZKUIModalProvider;
