import { Stack } from '@tamagui/core';
import { BankCard, Cross, DataTable, Plus } from '@xsolla-zk/icons';
import { getComponentsConfig } from '../../utils';
import { RichIcon } from '../rich-icon/rich-icon';
import { TextArea } from './textarea';
import type { InputSizes } from '../input/input.types';
import type { Meta, StoryObj } from '@storybook/react';

const sizes = Object.keys(getComponentsConfig().input) as InputSizes[];

const meta = {
  component: TextArea,
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
  },
  args: {
    placeholder: 'Placeholder',
  },
  play: async ({ canvasElement }) => {},
} as Meta<typeof TextArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: (args) => <TextArea {...args} />,
};

export const AllSizes: Story = {
  argTypes: {
    size: {
      table: {
        disable: true,
      },
    },
  },
  args: {},
  render: (args) => (
    <Stack gap={12}>
      {sizes.map((size) => (
        <TextArea key={size} {...args} size={size} />
      ))}
    </Stack>
  ),
};

export const Readonly: Story = {
  args: {
    readOnly: true,
    value: 'Some text',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const WithError: Story = {
  args: {
    error: true,
  },
};

export const WithStartSlot: Story = {
  args: {},
  render: (args) => (
    <TextArea {...args}>
      <TextArea.StartSlot>
        <RichIcon shape="squircle" size="$200">
          <RichIcon.Icon icon={DataTable} />
        </RichIcon>
      </TextArea.StartSlot>
    </TextArea>
  ),
};

export const WithEndSlot: Story = {
  args: {},
  render: (args) => (
    <TextArea {...args}>
      <TextArea.EndSlot>
        <RichIcon shape="squircle" size="$200">
          <RichIcon.Icon icon={BankCard} />
        </RichIcon>
      </TextArea.EndSlot>
    </TextArea>
  ),
};

export const WithAllSlots: Story = {
  args: {},
  render: (args) => (
    <TextArea {...args}>
      <TextArea.StartSlot>
        <RichIcon shape="squircle" size="$200">
          <RichIcon.Icon icon={DataTable} />
        </RichIcon>
      </TextArea.StartSlot>
      <TextArea.EndSlot>
        <RichIcon shape="squircle" size="$200">
          <RichIcon.Icon icon={BankCard} />
        </RichIcon>
      </TextArea.EndSlot>
    </TextArea>
  ),
};

export const WithRichSlot: Story = {
  args: {},
  render: (args) => (
    <TextArea {...args}>
      <TextArea.EndSlot>
        <RichIcon shape="squircle" size="$200">
          <RichIcon.Icon icon={Plus} />
        </RichIcon>
        <RichIcon shape="squircle" size="$200">
          <RichIcon.Icon icon={Cross} />
        </RichIcon>
      </TextArea.EndSlot>
    </TextArea>
  ),
};

export const TextareaMaxRows: Story = {
  args: {
    placeholder: 'Max Rows 5',
    maxRows: 5,
  },
};
export const TextareaMinRows: Story = {
  args: {
    placeholder: 'Min Rows 3',
    minRows: 3,
  },
};

export const TextareaRowsFixedWithEndSlot: Story = {
  args: {
    placeholder: 'Rows 3',
    rows: 3,
  },
  render: (args) => (
    <TextArea {...args}>
      <TextArea.EndSlot>
        <RichIcon shape="squircle" size="$200">
          <RichIcon.Icon icon={BankCard} />
        </RichIcon>
      </TextArea.EndSlot>
    </TextArea>
  ),
};
