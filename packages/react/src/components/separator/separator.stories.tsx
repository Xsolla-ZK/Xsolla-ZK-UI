import tokensThemes from '@xsolla-zk-ui/react/tokens/themes';
import XZKUISeparator from './separator';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  component: XZKUISeparator,
  parameters: {
    layout: 'centered',
  },
  tags: ['stable'],
  argTypes: {
    color: { control: 'select', options: Object.keys(tokensThemes['dark'].theme.border) },
    weight: { control: 'number' },
    mt: { control: 'number' },
    mb: { control: 'number' },
    ml: { control: 'number' },
    mr: { control: 'number' },
    mx: { control: 'number' },
    my: { control: 'number' },
  },
  args: {},
  play: async ({ canvasElement }) => {},
} satisfies Meta<typeof XZKUISeparator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: (args) => (
    <div style={{ display: 'flex', alignItems: 'center', width: 400, height: 200 }}>
      <XZKUISeparator {...args} />
    </div>
  ),
};

export const Vertical: Story = {
  args: {
    vertical: true,
  },
  render: (args) => (
    <div style={{ display: 'flex', alignItems: 'center', width: 400, height: 200 }}>
      <XZKUISeparator {...args} />
    </div>
  ),
};

/*
export const ExperimentalFeatureStory: Story = {
  //👇 For this particular story, remove the inherited `stable` tag and apply the `experimental` tag
  tags: ['!stable', 'experimental'],
};
*/
