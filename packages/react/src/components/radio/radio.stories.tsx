import XZKUIRadio from './radio';
import { radioThemeSizes } from './radio.theme';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  component: XZKUIRadio,
  parameters: {
    layout: 'centered',
  },
  tags: ['stable'],
  argTypes: {
    children: { control: 'text' },
    label: { control: 'text' },
    disabled: { control: 'boolean' },
  },
  args: {
    // onClick: fn(),
  },
  play: async ({ canvasElement }) => {},
} satisfies Meta<typeof XZKUIRadio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Checked: Story = {
  args: {
    defaultChecked: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const CustomCheckedColor: Story = {
  args: {
    defaultChecked: true,
    bg: '#8a6511',
    color: '#f5ff62',
  },
};

export const CustomCheckedColorThemeBased: Story = {
  parameters: {
    docs: {
      source: {
        code: `
          <XZKUIRadio
            bg={({ theme }) => theme.background.negativeHigh}
            color={({ theme }) => theme.content.staticLightPrimary}
            defaultChecked
          />
        `,
        language: 'tsx',
        format: true,
        type: 'auto',
      },
    },
  },
  args: {
    defaultChecked: true,
    bg: ({ theme }) => theme.background.negativeHigh,
    color: ({ theme }) => theme.content.staticLightPrimary,
  },
};

export const WithChildren: Story = {
  args: {
    children: 'Some children',
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Some label',
  },
};

export const AllSizes: Story = {
  args: {},
  render: (args) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
      {radioThemeSizes.map((size) => (
        <XZKUIRadio key={size} {...args} size={size} />
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
