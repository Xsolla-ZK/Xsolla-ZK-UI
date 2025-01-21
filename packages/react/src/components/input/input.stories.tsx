import XZKUIRichIcon from '../rich-icon/rich-icon';
import XZKUISvgIcon from '../svg-icon/svg-icon';
import SvgBag from '../svg-icons/bag';
import SvgBankCard from '../svg-icons/bank-card';
import SvgCross from '../svg-icons/cross';
import SvgDataTable from '../svg-icons/data-table';
import SvgPlus from '../svg-icons/plus';
import XZKUIInput from './input';
import { inputThemeSizes } from './input.theme';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  component: XZKUIInput,
  parameters: {
    layout: 'centered',
  },
  // tags: ['stable'],
  // argTypes: {},
  args: {
    placeholder: 'Placeholder',
    // onClick: fn(),
  },
  play: async ({ canvasElement }) => {},
} satisfies Meta<typeof XZKUIInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const AllSizes: Story = {
  args: {},
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      {inputThemeSizes.map((size) => (
        <XZKUIInput key={size} {...args} size={size} />
      ))}
    </div>
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
  args: {
    startAdornment: (
      <XZKUIRichIcon shape="squircle" size={200} bg={({ theme }) => theme.overlay.neutral}>
        <XZKUISvgIcon icon={SvgDataTable} />
      </XZKUIRichIcon>
    ),
  },
};

export const WithEndAdornment: Story = {
  args: {
    endAdornment: (
      <XZKUIRichIcon size={200} bg={({ theme }) => theme.overlay.neutral}>
        <XZKUISvgIcon icon={SvgBankCard} />
      </XZKUIRichIcon>
    ),
  },
};

export const WithAllAdornments: Story = {
  args: {
    startAdornment: (
      <XZKUIRichIcon shape="squircle" size={200} bg={({ theme }) => theme.background.warningHigh}>
        <XZKUISvgIcon icon={SvgDataTable} />
      </XZKUIRichIcon>
    ),
    endAdornment: (
      <XZKUIRichIcon shape="squircle" size={200} bg={({ theme }) => theme.background.negativeHigh}>
        <XZKUISvgIcon icon={SvgBag} />
      </XZKUIRichIcon>
    ),
  },
};

export const WithRichAdornment: Story = {
  args: {
    endAdornment: (
      <>
        <XZKUIRichIcon shape="squircle" size={200} bg={({ theme }) => theme.overlay.neutral}>
          <XZKUISvgIcon icon={SvgPlus} />
        </XZKUIRichIcon>
        <XZKUIRichIcon shape="squircle" size={200} bg={({ theme }) => theme.overlay.neutral}>
          <XZKUISvgIcon icon={SvgCross} />
        </XZKUIRichIcon>
      </>
    ),
  },
};

export const Textarea: Story = {
  args: {
    multiline: true,
  },
};

export const TextareaMaxRows: Story = {
  args: {
    placeholder: 'Max Rows 5',
    multiline: true,
    maxRows: 5,
  },
};
export const TextareaMinRows: Story = {
  args: {
    placeholder: 'Min Rows 3',
    multiline: true,
    minRows: 3,
  },
};

export const TextareaRowsFixedWithEndAdornment: Story = {
  args: {
    placeholder: 'Min Rows 3',
    endAdornment: (
      <XZKUIRichIcon size={200} bg={({ theme }) => theme.overlay.neutral}>
        <XZKUISvgIcon icon={SvgBankCard} />
      </XZKUIRichIcon>
    ),
    multiline: true,
    rows: 3,
  },
};

/*
export const ExperimentalFeatureStory: Story = {
  //👇 For this particular story, remove the inherited `stable` tag and apply the `experimental` tag
  tags: ['!stable', 'experimental'],
};
*/
