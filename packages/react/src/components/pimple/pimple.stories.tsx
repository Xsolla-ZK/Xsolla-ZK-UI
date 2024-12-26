import XZKUISvgIcon from '../svg-icon/svg-icon';
import SvgPlus from '../svg-icons/plus';
import XZKUIPimple from './pimple';
import { pimpleThemeSizes } from './pimple.theme';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  component: XZKUIPimple,
  parameters: {
    layout: 'centered',
  },
  tags: ['stable'],
  argTypes: {
    children: { control: 'text' },
    size: {
      control: 'select',
      options: pimpleThemeSizes,
      table: {
        defaultValue: { summary: '500' },
        type: { summary: pimpleThemeSizes.join('|') },
      },
    },
  },
  args: {
    children: '5',
    // onClick: fn(),
  },
  play: async ({ canvasElement }) => {},
} satisfies Meta<typeof XZKUIPimple>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const AllSizes: Story = {
  argTypes: {
    size: {
      table: { disable: true },
    },
  },
  args: {},
  render: ({ size, ...args }) => (
    <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
      {pimpleThemeSizes.map((size) => (
        <XZKUIPimple key={size} size={size} {...args} />
      ))}
    </div>
  ),
};

export const AllSizesWithIcon: Story = {
  argTypes: {
    children: {
      table: { disable: true },
    },
    size: {
      table: { disable: true },
    },
  },
  args: {
    children: <XZKUISvgIcon icon={SvgPlus} />,
  },
  render: ({ size, ...args }) => (
    <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
      {pimpleThemeSizes.map((size) => (
        <XZKUIPimple key={size} size={size} {...args} />
      ))}
    </div>
  ),
};

/*
export const ExperimentalFeatureStory: Story = {
  //👇 For this particular story, remove the inherited `stable` tag and apply the `experimental` tag
  tags: ['!stable', 'experimental'],
};
*/
