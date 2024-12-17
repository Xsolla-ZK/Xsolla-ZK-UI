import { useCallback, createContext, useContext, useMemo, useState } from 'react';
import type { XZKUIThemesUnion } from '@xsolla-zk-ui/tokens/js/themes';
import type { PropsWithChildren } from 'react';

interface XZKUIThemeSwitchContextValues {
  theme: XZKUIThemesUnion;
  changeTheme: (value: XZKUIThemesUnion) => void;
}

const XZKUIThemeSwitchContext = createContext<XZKUIThemeSwitchContextValues | null>(null);

const Provider = XZKUIThemeSwitchContext.Provider;
// const Consumer = XZKUIThemeSwitchContext.Consumer;

export function useSwitchTheme() {
  const ctx = useContext(XZKUIThemeSwitchContext);

  if (!ctx) {
    throw new Error('useSwitchTheme must be used within a XZKUIThemeSwitchProvider');
  }

  return ctx;
}

interface TableWatchlistProviderProps {
  defaultTheme?: XZKUIThemeSwitchContextValues['theme'];
}

function XZKUIThemeSwitchProvider({
  defaultTheme = 'dark',
  children,
}: PropsWithChildren<TableWatchlistProviderProps>) {
  const [theme, setTheme] = useState(() => defaultTheme);

  const changeTheme = useCallback(
    (value: XZKUIThemeSwitchContextValues['theme']) => {
      if (theme === value) {
        return;
      }

      setTheme(value);
    },
    [theme],
  );

  const contextValue = useMemo(
    () => ({
      changeTheme,
      theme,
    }),
    [changeTheme, theme],
  );

  return <Provider value={contextValue}>{children}</Provider>;
}

export default XZKUIThemeSwitchProvider;
