import { Stack, View } from '@tamagui/core';
import { Plus } from '@xsolla-zk-ui/icons';
import { getComponentsConfig } from '@xsolla-zk-ui/react/utils/components-config';
import Pimple from '../pimple/pimple';
import FlexButton from './flex-button';
import type { FlexButtonProps } from './flex-button.types';
import type { Meta, StoryObj } from '@storybook/react';

const sizes = Object.keys(getComponentsConfig().flexButton) as Array<FlexButtonProps['size']>;
const tones = ['brand', 'neutral'] as Array<NonNullable<FlexButtonProps['tone']>>;

const meta = {
  component: FlexButton,
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
      control: 'select',
      options: tones,
      table: {
        defaultValue: { summary: 'brand' },
        type: { summary: tones.join('|') },
      },
    },
  },
  play: async ({ canvasElement }) => {},
} satisfies Meta<typeof FlexButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: (args) => (
    <FlexButton {...args}>
      <FlexButton.Text>Flex Button</FlexButton.Text>
    </FlexButton>
  ),
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: (args) => (
    <FlexButton {...args}>
      <FlexButton.Text>Flex Button</FlexButton.Text>
    </FlexButton>
  ),
};

export const AllSizes: Story = {
  argTypes: {
    size: { table: { disable: true } },
  },
  args: {},
  render: (args) => (
    <View display="flex" flexDirection="row" alignItems="center" gap={12}>
      {sizes.map((size) => (
        <FlexButton key={size} {...args} size={size}>
          <FlexButton.Text>Flex Button {size}</FlexButton.Text>
        </FlexButton>
      ))}
    </View>
  ),
};

export const AllTones: Story = {
  argTypes: {
    tone: { table: { disable: true } },
  },
  args: {},
  render: (args) => (
    <View display="flex" flexDirection="column" alignItems="center" gap={12}>
      {tones.map((tone) => (
        <FlexButton key={tone} {...args} tone={tone}>
          <FlexButton.Text>Flex Button {tone}</FlexButton.Text>
        </FlexButton>
      ))}
    </View>
  ),
};

export const Loading: Story = {
  argTypes: {
    isLoading: { table: { disable: true } },
  },
  args: {
    isLoading: true,
  },
};

export const IconLeft: Story = {
  args: {},
  render: (args) => (
    <FlexButton {...args}>
      <FlexButton.Icon icon={Plus} />
      <FlexButton.Text>Flex Button</FlexButton.Text>
    </FlexButton>
  ),
};

export const IconRight: Story = {
  args: {},
  render: (args) => (
    <FlexButton {...args}>
      <FlexButton.Text>Flex Button</FlexButton.Text>
      <FlexButton.Icon icon={Plus} />
    </FlexButton>
  ),
};

export const IconLeftAndRight: Story = {
  args: {},
  render: (args) => (
    <FlexButton {...args}>
      <FlexButton.Icon icon={Plus} />
      <FlexButton.Text>Flex Button</FlexButton.Text>
      <FlexButton.Icon icon={Plus} />
    </FlexButton>
  ),
};

export const IconOnly: Story = {
  args: {},
  render: (args) => (
    <FlexButton {...args}>
      <FlexButton.Icon icon={Plus} />
    </FlexButton>
  ),
};

export const WithPimpleSlot: Story = {
  args: {},
  render: (args) => (
    <FlexButton {...args}>
      <FlexButton.Icon icon={Plus} />
      <FlexButton.Text>Flex Button</FlexButton.Text>
      <Stack paddingLeft="$space.100">
        <Pimple>
          <Pimple.Text>2</Pimple.Text>
        </Pimple>
      </Stack>
    </FlexButton>
  ),
};

export const ContentAlignSelf: Story = {
  args: {},
  render: (args) => (
    <Stack flexDirection="row" alignItems="center" height={100} gap={12}>
      {Array.from({ length: 5 }).map((_, index) => (
        <FlexButton key={index} {...args}>
          <FlexButton.Icon icon={Plus} />
          <FlexButton.Text>Flex Button</FlexButton.Text>
          <Stack paddingLeft="$space.100">
            <Pimple>
              <Pimple.Text>{index}</Pimple.Text>
            </Pimple>
          </Stack>
        </FlexButton>
      ))}
    </Stack>
  ),
};
