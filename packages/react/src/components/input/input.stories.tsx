import { Stack } from '@tamagui/core';
import { BankCard, Cross, DataTable, Plus } from '@xsolla-zk-ui/icons';
import { getComponentsConfig } from '@xsolla-zk-ui/react/utils/components-config';
import { RichIcon } from '../rich-icon/rich-icon';
import { Input } from './input';
import type { InputSizes } from './input.types';
import type { Meta, StoryObj } from '@storybook/react';

const sizes = Object.keys(getComponentsConfig().input) as InputSizes[];

const meta = {
  component: Input,
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
} as Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: (args) => <Input {...args} />,
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
        <Input key={size} {...args} size={size} />
      ))}
    </Stack>
  ),
};

// export const Readonly: Story = {
//   args: {
//     readOnly: true,
//   },
// };

export const WithError: Story = {
  args: {
    error: true,
  },
};

export const WithStartAdornment: Story = {
  args: {},
  render: (args) => (
    <Input {...args}>
      <Input.StartAdornment>
        <RichIcon shape="squircle" size="$200">
          <RichIcon.Icon icon={DataTable} />
        </RichIcon>
      </Input.StartAdornment>
    </Input>
  ),
};

export const WithEndAdornment: Story = {
  args: {},
  render: (args) => (
    <Input {...args}>
      <Input.EndAdornment>
        <RichIcon shape="squircle" size="$200">
          <RichIcon.Icon icon={BankCard} />
        </RichIcon>
      </Input.EndAdornment>
    </Input>
  ),
};

export const WithAllAdornments: Story = {
  args: {},
  render: (args) => (
    <Input {...args}>
      <Input.StartAdornment>
        <RichIcon shape="squircle" size="$200">
          <RichIcon.Icon icon={DataTable} />
        </RichIcon>
      </Input.StartAdornment>
      <Input.EndAdornment>
        <RichIcon shape="squircle" size="$200">
          <RichIcon.Icon icon={BankCard} />
        </RichIcon>
      </Input.EndAdornment>
    </Input>
  ),
};

export const WithRichAdornment: Story = {
  args: {},
  render: (args) => (
    <Input {...args}>
      <Input.EndAdornment>
        <RichIcon shape="squircle" size="$200">
          <RichIcon.Icon icon={Plus} />
        </RichIcon>
        <RichIcon shape="squircle" size="$200">
          <RichIcon.Icon icon={Cross} />
        </RichIcon>
      </Input.EndAdornment>
    </Input>
  ),
};

// export const Textarea: Story = {
//   args: {
//     multiline: true,
//   },
// };

// export const TextareaMaxRows: Story = {
//   args: {
//     placeholder: 'Max Rows 5',
//     multiline: true,
//     maxRows: 5,
//   },
// };
// export const TextareaMinRows: Story = {
//   args: {
//     placeholder: 'Min Rows 3',
//     multiline: true,
//     minRows: 3,
//   },
// };

// export const TextareaRowsFixedWithEndAdornment: Story = {
//   args: {
//     placeholder: 'Min Rows 3',
//     endAdornment: (
//       <XZKUIRichIcon size={200} bg={({ theme }) => theme.overlay.neutral}>
//         <XZKUISvgIcon icon={SvgBankCard} />
//       </XZKUIRichIcon>
//     ),
//     multiline: true,
//     rows: 3,
//   },
// };

/*
export const ExperimentalFeatureStory: Story = {
  //👇 For this particular story, remove the inherited `stable` tag and apply the `experimental` tag
  tags: ['!stable', 'experimental'],
};
*/
