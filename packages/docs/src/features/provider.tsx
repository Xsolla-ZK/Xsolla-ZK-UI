/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/ban-ts-comment */
'use client';

// import '@xsolla-zk/react/reset.css';
import '@tamagui/polyfill-dev';
// import '../../public/tamagui.css';
import { NextThemeProvider, useRootTheme } from '@tamagui/next-theme';
import { TamaguiProvider } from '@xsolla-zk/react';
import { useServerInsertedHTML } from 'next/navigation';
import { StyleSheet } from 'react-native';
import { config } from '../../tamagui.config';
import type { ColorScheme } from '@tamagui/next-theme';
import type { ReactNode } from 'react';
import 'nextra-theme-docs/style.css';

export function NextTamaguiProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useRootTheme();

  useServerInsertedHTML(() => {
    // @ts-ignore
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    const rnwStyle = StyleSheet.getSheet();
    return (
      <>
        {/* Link your CSS output for optimized themes */}
        {/* <link rel="stylesheet" href="/tamagui.css" /> */}
        <style dangerouslySetInnerHTML={{ __html: rnwStyle.textContent }} id={rnwStyle.id} />
        <style
          dangerouslySetInnerHTML={{
            __html: config.getCSS({
              exclude: process.env.NODE_ENV === 'production' ? 'design-system' : null,
            }),
          }}
        />
      </>
    );
  });

  return (
    <NextThemeProvider
      skipNextHead
      defaultTheme="dark"
      onChangeTheme={(next) => {
        setTheme(next as ColorScheme);
      }}
    >
      <TamaguiProvider config={config} defaultTheme={'dark'}>
        {children}
      </TamaguiProvider>
    </NextThemeProvider>
  );
}
