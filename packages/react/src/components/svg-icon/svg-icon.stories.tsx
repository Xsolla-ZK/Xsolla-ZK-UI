import * as Svg from '@xsolla-zk-ui/react/components/svg-icons';
import tokensDark from '@xsolla-zk-ui/react/tokens/dark';
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
    iconColor: { control: 'select', options: Object.keys(tokensDark.theme.content) },
  },
  args: {
    icon: SvgPlus,
    iconColor: 'neutral-primary',
    iconSize: 24,
  },
} satisfies Meta<typeof XZKUISvgIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const All: Story = {
  render: (props) => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
      {Object.keys(Svg).map((name) => {
        const SvgComponent = (Svg as Record<string, ComponentType>)[name];
        return (
          <XZKUISvgIcon key={name} {...props} icon={SvgComponent as XZKUISvgIconProps['icon']} />
        );
      })}
    </div>
  ),
};
