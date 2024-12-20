import { within, expect } from '@storybook/test';
import XZKUIButton from './button';
import buttonTheme, { buttonThemeSizes } from './button.theme';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  component: XZKUIButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['stable'],
  argTypes: {
    as: { type: 'string' },
    size: { control: 'select', options: buttonThemeSizes },
    variant: { control: 'select', options: Object.keys(buttonTheme('dark').variants) },
    children: { control: 'text' },
  },
  args: {
    children: 'Button',
    // onClick: fn(),
  },
} satisfies Meta<typeof XZKUIButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  // 👇 Test
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // 👇 Assert DOM structure
    await expect(canvas.getByText('Button')).toBeInTheDocument();
  },
};

/*
export const ExperimentalFeatureStory: Story = {
  //👇 For this particular story, remove the inherited `stable` tag and apply the `experimental` tag
  tags: ['!stable', 'experimental'],
};
*/

export const ExtraSmall: Story = {
  args: {
    children: 'Button',
    size: 'xs',
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await expect(canvas.getByText('Button')).toBeInTheDocument();
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
  },
};

export const Medium: Story = {
  args: {
    children: 'Button',
    size: 'md',
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await expect(canvas.getByText('Button')).toBeInTheDocument();
  },
};

export const Large: Story = {
  args: {
    children: 'Button',
    size: 'lg',
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await expect(canvas.getByText('Button')).toBeInTheDocument();
  },
};

export const ExtraLarge: Story = {
  args: {
    children: 'Button',
    size: 'xl',
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await expect(canvas.getByText('Button')).toBeInTheDocument();
  },
};
