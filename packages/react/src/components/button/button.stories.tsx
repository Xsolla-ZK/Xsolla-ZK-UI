import { within, expect } from '@storybook/test';
import { Plus } from '@xsolla-zk-ui/icons';
import { useState } from 'react';
import Button from './button';
import type { ButtonProps } from './button.types';
import type { Meta, StoryObj } from '@storybook/react';

const variants = Object.keys(Button.staticConfig?.variants?.variant ?? {}) as Array<
  ButtonProps['variant']
>;
const sizes = Object.keys(Button.staticConfig?.variants?.size ?? {}) as Array<ButtonProps['size']>;

const meta = {
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['stable'],
  argTypes: {
    // as: { control: false },
    size: {
      control: 'select',
      options: sizes,
      // table: {
      //   defaultValue: { summary: '$500' },
      //   type: { summary: sizes.join('|') },
      // },
    },
    variant: {
      control: 'select',
      options: variants,
      // table: {
      //   defaultValue: { summary: 'primary' },
      //   type: { summary: variants.join('|') },
      // },
    },
    hasBackground: { type: 'boolean' },
    isLoading: { type: 'boolean' },
    children: { control: 'text' },
    // startAdornment: {
    //   control: false,
    // },
    // endAdornment: {
    //   control: false,
    // },
  },
  args: {
    children: <Button.Text>Button</Button.Text>,
  },
  play: async ({ canvasElement }) => {},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('Button')).toBeInTheDocument();
  },
};

// export const AllVariants: Story = {
//   argTypes: {
//     bgOff: { table: { disable: true } },
//     variant: { table: { disable: true } },
//   },
//   args: {},
//   render: (args) => (
//     <div style={{ display: 'flex', gap: '12px' }}>
//       {(Object.keys(theme.variants) as Array<keyof typeof theme.variants>).map((variant) => (
//         <div key={variant} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
//           <XZKUIButton {...args} variant={variant} />
//           <XZKUIButton {...args} bgOff variant={variant} />
//         </div>
//       ))}
//       <XZKUISeparator />
//     </div>
//   ),
// };

// export const AllSizes: Story = {
//   args: {},
//   render: (args) => (
//     <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
//       {buttonThemeSizes.map((size) => (
//         <XZKUIButton key={size} {...args} size={size} />
//       ))}
//     </div>
//   ),
// };

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

// export const Test: Story = {
//   args: {},
//   render: (args) => <Plus />,
// };

export const SimulateRequest: Story = {
  args: {
    children: <Button.Text>Send Request</Button.Text>,
  },
  render: (args) => {
    const ButtonWithState = () => {
      const [isLoading, setIsLoading] = useState(false);
      return (
        <Button
          {...args}
          isLoading={isLoading}
          onPress={() => {
            setIsLoading(true);
            setTimeout(() => setIsLoading(false), 2000);
          }}
        />
      );
    };

    return <ButtonWithState />;
  },
};

// export const Loading: Story = {
//   args: {
//     isLoading: true,
//   },
// };

export const IconLeft: Story = {
  args: {
    children: (
      <>
        <Button.Icon>
          <Plus />
        </Button.Icon>
        <Button.Text>Button</Button.Text>
      </>
    ),
  },
};

// export const IconRight: Story = {
//   args: {
//     endAdornment: <XZKUISvgIcon icon={SvgPlus} />,
//   },
// };

// export const IconLeftAndRight: Story = {
//   args: {
//     startAdornment: <XZKUISvgIcon icon={SvgPlus} />,
//     endAdornment: <XZKUISvgIcon icon={SvgPlus} />,
//   },
// };

// export const TruncatedText: Story = {
//   args: {
//     children:
//       'A very long label with a character limit because it is important to show all the text and there is no cell navigation to view in more detail',
//   },
//   render: (args) => (
//     <div style={{ width: 200 }}>
//       <XZKUIButton {...args} />
//     </div>
//   ),
// };

// export const FullWidth: Story = {
//   args: {
//     fullWidth: true,
//   },
//   render: (args) => (
//     <div style={{ width: 200 }}>
//       <XZKUIButton {...args} />
//     </div>
//   ),
// };

/*
export const ExperimentalFeatureStory: Story = {
  //👇 For this particular story, remove the inherited `stable` tag and apply the `experimental` tag
  tags: ['!stable', 'experimental'],
};
*/
