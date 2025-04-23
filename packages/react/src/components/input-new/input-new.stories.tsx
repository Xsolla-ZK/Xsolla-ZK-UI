import { Stack } from '@tamagui/core';
import { BankCard, Cross, DataTable, Plus } from '@xsolla-zk-ui/icons';
import { getComponentsConfig } from '@xsolla-zk-ui/react/utils/components-config';
import RichIcon from '../rich-icon/rich-icon';
import { InputNew } from './input-new';
import { TextArea } from './textarea';
import type { InputNewSizes } from './input-new.types';
import type { Meta, StoryObj } from '@storybook/react';

const sizes = Object.keys(getComponentsConfig().input) as InputNewSizes[];

const meta = {
  component: InputNew,
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
} as Meta<typeof InputNew>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: (args) => <InputNew {...args} />,
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
        <InputNew key={size} {...args} size={size} />
      ))}
    </Stack>
  ),
};

export const Readonly: Story = {
  args: {
    readOnly: true,
  },
};

export const WithError: Story = {
  args: {
    error: true,
  },
};

export const WithStartAdornment: Story = {
  args: {},
  render: (args) => (
    <InputNew {...args}>
      <InputNew.StartAdornment>
        <RichIcon shape="squircle" size="$200">
          <RichIcon.Icon icon={DataTable} />
        </RichIcon>
      </InputNew.StartAdornment>
    </InputNew>
  ),
};

export const WithEndAdornment: Story = {
  args: {},
  render: (args) => (
    <InputNew {...args}>
      <InputNew.EndAdornment>
        <RichIcon shape="squircle" size="$200">
          <RichIcon.Icon icon={BankCard} />
        </RichIcon>
      </InputNew.EndAdornment>
    </InputNew>
  ),
};

export const WithAllAdornments: Story = {
  args: {},
  render: (args) => (
    <InputNew {...args}>
      <InputNew.StartAdornment>
        <RichIcon shape="squircle" size="$200">
          <RichIcon.Icon icon={DataTable} />
        </RichIcon>
      </InputNew.StartAdornment>
      <InputNew.EndAdornment>
        <RichIcon shape="squircle" size="$200">
          <RichIcon.Icon icon={BankCard} />
        </RichIcon>
      </InputNew.EndAdornment>
    </InputNew>
  ),
};

export const WithRichAdornment: Story = {
  args: {},
  render: (args) => (
    <InputNew {...args}>
      <InputNew.EndAdornment>
        <RichIcon shape="squircle" size="$200">
          <RichIcon.Icon icon={Plus} />
        </RichIcon>
        <RichIcon shape="squircle" size="$200">
          <RichIcon.Icon icon={Cross} />
        </RichIcon>
      </InputNew.EndAdornment>
    </InputNew>
  ),
};

export const Textarea: Story = {
  args: {
    rows: 3,
  },
  render: (args) => <TextArea {...args} />,
};

export const TextareaMaxRows: Story = {
  args: {
    tag: 'textarea',
    placeholder: 'Max Rows 5',
    maxRows: 5,
  },
};
export const TextareaMinRows: Story = {
  args: {
    tag: 'textarea',
    placeholder: 'Min Rows 3',
    minRows: 3,
  },
};

export const TextareaRowsFixedWithEndAdornment: Story = {
  args: {
    placeholder: 'Min Rows 3',
    tag: 'textarea',
    rows: 3,
  },
  render: (args) => (
    <InputNew {...args}>
      <InputNew.EndAdornment>
        <RichIcon shape="squircle" size="$200">
          <RichIcon.Icon icon={BankCard} />
        </RichIcon>
      </InputNew.EndAdornment>
    </InputNew>
  ),
};
