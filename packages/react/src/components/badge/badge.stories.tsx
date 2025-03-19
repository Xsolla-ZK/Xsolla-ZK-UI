import { expect, within } from '@storybook/test';
import { View } from '@tamagui/core';
import { ChevronRight, Plus } from '@xsolla-zk-ui/icons';
import { getComponentsConfig } from '@xsolla-zk-ui/react/utils/components-config';
import Badge from './badge';
import type { BadgeProps } from './badge.types';
import type { Meta, StoryObj } from '@storybook/react';
const sizes = Object.keys(getComponentsConfig().badge) as Array<BadgeProps['size']>;
const tones = [
  'brand',
  'neutral',
  'positive',
  'warning',
  'info',
  'negative',
  'brand-extra',
] as const;

const meta = {
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['stable'],
  argTypes: {
    size: {
      control: 'select',
      options: sizes,
      table: {
        defaultValue: { summary: '$500' },
        type: { summary: sizes.join('|') },
      },
    },
    tone: {
      control: 'inline-radio',
      options: tones,
      table: {
        defaultValue: { summary: 'brand' },
        type: { summary: tones.join('|') },
      },
    },
    onPress: { table: { disable: true } },
    children: { control: 'text', table: { disable: true } },
  },
  args: {
    children: <Badge.Text>Badge</Badge.Text>,
  },
  play: async ({ canvasElement }) => {},
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('Badge')).toBeInTheDocument();
  },
};

export const AllTones: Story = {
  argTypes: {
    tone: { table: { disable: true } },
  },
  args: {},
  render: (args) => (
    <View display="flex" flexDirection="row" alignItems="center" gap={12}>
      {tones.map((tone) => (
        <Badge key={tone} {...args} tone={tone as BadgeProps['tone']} />
      ))}
    </View>
  ),
};

export const Pressable: Story = {
  argTypes: {
    pressable: { table: { disable: true } },
  },
  args: {
    pressable: true,
  },
};

export const IconLeft: Story = {
  args: {
    children: (
      <>
        <Badge.Icon>
          <Plus />
        </Badge.Icon>
        <Badge.Text>Badge</Badge.Text>
      </>
    ),
  },
};
export const IconRight: Story = {
  args: {
    children: (
      <>
        <Badge.Text>Badge</Badge.Text>
        <Badge.Icon icon={ChevronRight} />
      </>
    ),
  },
};
export const IconLeftAndRight: Story = {
  args: {
    children: (
      <>
        <Badge.Icon icon={Plus} />
        <Badge.Text>Badge</Badge.Text>
        <Badge.Icon icon={ChevronRight} />
      </>
    ),
  },
};
