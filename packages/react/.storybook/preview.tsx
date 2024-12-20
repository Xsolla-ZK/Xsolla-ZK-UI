import React from 'react';
import type { Preview } from '@storybook/react';
import XZKUIThemeProvider from '../src/components/theme-provider/theme-provider';

const preview: Preview = {
  tags: ['autodocs'],
  parameters: {
    // docs: {
    //   components: {
    //     code: CodeBlock,
    //   },
    // },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <XZKUIThemeProvider themeMode="light">
        <Story />
      </XZKUIThemeProvider>
    ),
  ],
  // decorators: [
  //   (Story, { parameters }) => {
  //     const { pageLayout } = parameters;

  //     switch (pageLayout) {
  //       case 'page':
  //         return (
  //           <div className="page-layout">
  //               <XZKUIThemeProvider themes={{}}>
  //               <Story />
  //           </XZKUIThemeProvider>
  //             </div>
  //         );
  //       case 'page-mobile':
  //         return (
  //           <div className="page-mobile-layout">
  //               <XZKUIThemeProvider themes={{}}>
  //               <Story />
  //           </XZKUIThemeProvider>
  //             </div>
  //         );
  //       default:
  //         return
  //         <XZKUIThemeProvider themes={{}}>

  //           <Story />
  //         </XZKUIThemeProvider>
  //     }
  //   },
  // ],
};

export default preview;
