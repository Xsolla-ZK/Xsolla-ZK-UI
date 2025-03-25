import { Stack } from '@tamagui/core';
import { getComponentsConfig } from '@xsolla-zk-ui/react/utils/components-config';
import Input from './input';
import type { InputSizes } from './input.types';
import type { Meta, StoryObj } from '@storybook/react';

const sizes = Object.keys(getComponentsConfig().input) as InputSizes[];

const meta = {
  component: Input,
  parameters: {
    layout: 'centered',
  },
  // tags: ['stable'],
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
    // onClick: fn(),
  },
  play: async ({ canvasElement }) => {},
} as Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
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

// export const WithError: Story = {
//   args: {
//     error: true,
//   },
// };

// export const WithStartAdornment: Story = {
//   args: {
//     startAdornment: (
//       <XZKUIRichIcon shape="squircle" size={200} bg={({ theme }) => theme.overlay.neutral}>
//         <XZKUISvgIcon icon={SvgDataTable} />
//       </XZKUIRichIcon>
//     ),
//   },
// };

// export const WithEndAdornment: Story = {
//   args: {
//     endAdornment: (
//       <XZKUIRichIcon size={200} bg={({ theme }) => theme.overlay.neutral}>
//         <XZKUISvgIcon icon={SvgBankCard} />
//       </XZKUIRichIcon>
//     ),
//   },
// };

// export const WithAllAdornments: Story = {
//   args: {
//     startAdornment: (
//       <XZKUIRichIcon shape="squircle" size={200} bg={({ theme }) => theme.background.warningHigh}>
//         <XZKUISvgIcon icon={SvgDataTable} />
//       </XZKUIRichIcon>
//     ),
//     endAdornment: (
//       <XZKUIRichIcon shape="squircle" size={200} bg={({ theme }) => theme.background.negativeHigh}>
//         <XZKUISvgIcon icon={SvgBag} />
//       </XZKUIRichIcon>
//     ),
//   },
// };

// export const WithRichAdornment: Story = {
//   args: {
//     endAdornment: (
//       <>
//         <XZKUIRichIcon shape="squircle" size={200} bg={({ theme }) => theme.overlay.neutral}>
//           <XZKUISvgIcon icon={SvgPlus} />
//         </XZKUIRichIcon>
//         <XZKUIRichIcon shape="squircle" size={200} bg={({ theme }) => theme.overlay.neutral}>
//           <XZKUISvgIcon icon={SvgCross} />
//         </XZKUIRichIcon>
//       </>
//     ),
//   },
// };

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
