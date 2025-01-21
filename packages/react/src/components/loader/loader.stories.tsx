import styled from '@emotion/styled';
import XZKUILoader from './loader';
import loaderTheme from './loader.theme';
import type { Meta, StoryObj } from '@storybook/react';

const theme = loaderTheme('dark');

const meta = {
  component: XZKUILoader,
  parameters: {
    layout: 'centered',
  },
  tags: ['stable'],
  argTypes: {
    children: { control: 'text' },
    mainColor: { control: 'color', type: 'string' },
    spinColor: { control: 'color', type: 'string' },
    size: { control: 'number', type: 'number' },
    variant: {
      control: 'select',
      options: Object.keys(theme.variants),
      table: {
        type: { summary: Object.keys(theme.variants).join('|') },
      },
    },
    vertical: {
      control: 'boolean',
      type: 'boolean',
    },
  },
  args: {},
  play: async ({ canvasElement }) => {},
} satisfies Meta<typeof XZKUILoader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const OnLight: Story = {
  args: {
    variant: 'onLight',
  },
};

export const OnDark: Story = {
  args: {
    variant: 'onDark',
  },
};

export const Brand: Story = {
  args: {
    variant: 'brand',
  },
};

export const AllVariants: Story = {
  args: {},
  render: (args) => (
    <div style={{ display: 'flex', gap: '12px' }}>
      {(Object.keys(theme.variants) as Array<keyof typeof theme.variants>).map((variant) => (
        <XZKUILoader key={variant} {...args} variant={variant} />
      ))}
    </div>
  ),
};

export const WithChildren: Story = {
  args: {
    children: 'Loading',
  },
};

export const WithChildrenVertical: Story = {
  args: {
    children: 'Loading',
    vertical: true,
  },
};

export const CustomColorsProps: Story = {
  args: {
    mainColor: '#E8523B',
    spinColor: '#111014',
  },
};

export const CustomColorsStyled: Story = {
  args: {},
  parameters: {
    docs: {
      source: {
        code: `
          const Loader = styled(XZKUILoader)'
            color: #e8523b;
            .spin {
              stroke: #111014;
            }
          ';
          <Loader />;
        `,
        language: 'tsx',
        format: true,
        type: 'auto',
      },
    },
  },
  render: (args) => {
    const Loader = styled(XZKUILoader)`
      color: #e8523b;
      .spin {
        stroke: #111014;
      }
    `;
    return <Loader {...args} />;
  },
};

/*
export const ExperimentalFeatureStory: Story = {
  //👇 For this particular story, remove the inherited `stable` tag and apply the `experimental` tag
  tags: ['!stable', 'experimental'],
};
*/
