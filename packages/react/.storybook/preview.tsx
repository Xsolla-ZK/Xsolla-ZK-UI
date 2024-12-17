import React from 'react';
import type { Preview } from "@storybook/react";

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
    (Story, { parameters }) => {
      const { pageLayout } = parameters;
      switch (pageLayout) {
        case 'page':
          return (
            <div className="page-layout">
              <Story />
            </div>
          );
        case 'page-mobile':
          return (
            <div className="page-mobile-layout">
              <Story />
            </div>
          );
        default:
          return <Story />;
      }
    },
  ],
};

export default preview;
