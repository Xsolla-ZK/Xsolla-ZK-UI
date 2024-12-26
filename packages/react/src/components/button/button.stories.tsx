import { within, expect } from '@storybook/test';
import XZKUISvgIcon from '../svg-icon/svg-icon';
import SvgPlus from '../svg-icons/plus';
import XZKUIButton from './button';
import buttonTheme, { buttonThemeSizes } from './button.theme';
import type { Meta, StoryObj } from '@storybook/react';

const theme = buttonTheme('dark');

const meta = {
  component: XZKUIButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['stable'],
  argTypes: {
    as: { control: false },
    size: {
      control: 'select',
      options: buttonThemeSizes,
      table: {
        defaultValue: { summary: 'md' },
        type: { summary: buttonThemeSizes.join('|') },
      },
    },
    variant: {
      control: 'select',
      options: Object.keys(theme.variants),
      table: {
        defaultValue: { summary: 'primary' },
        type: { summary: Object.keys(theme.variants).join('|') },
      },
    },
    isLoading: { type: 'boolean' },
    children: { control: 'text' },
    startAdornment: {
      control: false,
    },
    endAdornment: {
      control: false,
    },
  },
  args: {
    children: 'Button',
  },
  play: async ({ canvasElement }) => {},
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

export const AllVariants: Story = {
  args: {},
  render: (args) => (
    <div style={{ display: 'flex', gap: '12px' }}>
      {(Object.keys(theme.variants) as Array<keyof typeof theme.variants>).map((variant) => (
        <XZKUIButton key={variant} {...args} variant={variant} />
      ))}
    </div>
  ),
};

export const AllSizes: Story = {
  args: {},
  render: (args) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
      {buttonThemeSizes.map((size) => (
        <XZKUIButton key={size} {...args} size={size} />
      ))}
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const Loading: Story = {
  args: {
    isLoading: true,
  },
};

export const IconLeft: Story = {
  args: {
    startAdornment: <XZKUISvgIcon icon={SvgPlus} />,
  },
};

export const IconRight: Story = {
  args: {
    endAdornment: <XZKUISvgIcon icon={SvgPlus} />,
  },
};

export const IconLeftAndRight: Story = {
  args: {
    startAdornment: <XZKUISvgIcon icon={SvgPlus} />,
    endAdornment: <XZKUISvgIcon icon={SvgPlus} />,
  },
};

export const TruncatedText: Story = {
  args: {
    children:
      'A very long label with a character limit because it is important to show all the text and there is no cell navigation to view in more detail',
  },
  render: (args) => (
    <div style={{ width: 200 }}>
      <XZKUIButton {...args} />
    </div>
  ),
};

export const FullWidth: Story = {
  args: {
    full: true,
  },
  render: (args) => (
    <div style={{ width: 200 }}>
      <XZKUIButton {...args} />
    </div>
  ),
};

/*
export const ExperimentalFeatureStory: Story = {
  //👇 For this particular story, remove the inherited `stable` tag and apply the `experimental` tag
  tags: ['!stable', 'experimental'],
};
*/
