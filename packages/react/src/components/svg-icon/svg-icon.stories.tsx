import { expect, within } from '@storybook/test';
import * as Svg from '@xsolla-zk-ui/react/components/svg-icons';
import XZKUISvgIcon from '../svg-icon/svg-icon';
import SvgPlus from '../svg-icons/plus';
import type { XZKUISvgIconProps } from './svg-icon.types';
import type { Meta, StoryObj } from '@storybook/react';
import type { ComponentType } from 'react';

const meta = {
  component: XZKUISvgIcon,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    color: { control: 'color' },
  },
  args: {
    icon: SvgPlus,
    // color: ({ theme }) => theme.content.neutralPrimary,
    size: 24,
  },
  play: async ({ canvasElement }) => {},
} satisfies Meta<typeof XZKUISvgIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const CustomColor: Story = {
  parameters: {
    docs: {
      source: {
        code: `
          <XZKUISvgIcon
            color="#b2da40"
            icon={SvgPlus}
            size={24}
          />
        `,
        language: 'tsx',
        format: true,
        type: 'auto',
      },
    },
  },
  args: {
    color: '#b2da40',
  },
};

export const CustomColorThemeBased: Story = {
  parameters: {
    docs: {
      source: {
        code: `
          <XZKUISvgIcon
            color={({ theme }) => theme.content.warningPrimary}
            icon={SvgPlus}
            size={24}
          />
        `,
        language: 'tsx',
        format: true,
        type: 'auto',
      },
    },
  },
  args: {
    color: ({ theme }) => theme.content.warningPrimary,
  },
};

export const All: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
      {Object.keys(Svg).map((name) => {
        const SvgComponent = (Svg as Record<string, ComponentType>)[name];
        return (
          <XZKUISvgIcon
            key={name}
            {...args}
            data-testid={`icon-${name}`}
            icon={SvgComponent as XZKUISvgIconProps['icon']}
          />
        );
      })}
    </div>
  ),
  // 👇 Test
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    for (const name of Object.keys(Svg)) {
      const element = canvas.queryByTestId(`icon-${name}`);
      await expect(element).toBeInTheDocument();
    }
  },
};
