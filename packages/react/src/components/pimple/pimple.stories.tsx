import { View } from '@tamagui/core';
import { Plus } from '@xsolla-zk-ui/icons';
import { getComponentsConfig } from '@xsolla-zk-ui/react/utils/components-config';
import Pimple from './pimple';
import type { PimpleProps } from './pimple.types';
import type { Meta, StoryObj } from '@storybook/react';

const sizes = Object.keys(getComponentsConfig().pimple) as Array<PimpleProps['size']>;

const meta = {
  component: Pimple,
  parameters: {
    layout: 'centered',
  },
  tags: ['stable'],
  argTypes: {
    onPress: { table: { disable: true } },
    children: { table: { disable: true } },
    size: {
      control: 'select',
      options: sizes,
      table: {
        defaultValue: { summary: '$500' },
        type: { summary: sizes.join('|') },
      },
    },
  },
  args: {
    children: <Pimple.Text>2</Pimple.Text>,
  },
  play: async ({ canvasElement }) => {},
} satisfies Meta<typeof Pimple>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const MoreContent: Story = {
  args: {
    children: <Pimple.Text>9+</Pimple.Text>,
  },
};

export const AllSizes: Story = {
  argTypes: {
    size: {
      table: { disable: true },
    },
  },
  args: {},
  render: ({ size, ...args }) => (
    <View display="flex" gap={6} alignItems="center">
      {sizes.map((size) => (
        <Pimple key={size} size={size} {...args} />
      ))}
    </View>
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
    children: <Pimple.Icon icon={Plus} />,
  },
  render: ({ size, ...args }) => (
    <View display="flex" gap={6} alignItems="center">
      {sizes.map((size) => (
        <Pimple key={size} size={size} {...args} />
      ))}
    </View>
  ),
};

/*
export const ExperimentalFeatureStory: Story = {
  //👇 For this particular story, remove the inherited `stable` tag and apply the `experimental` tag
  tags: ['!stable', 'experimental'],
};
*/
