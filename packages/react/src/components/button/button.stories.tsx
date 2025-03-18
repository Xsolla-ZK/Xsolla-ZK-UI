import { expect, within } from '@storybook/test';
import { View } from '@tamagui/core';
import { Plus } from '@xsolla-zk-ui/icons';
import { getComponentsConfig } from '@xsolla-zk-ui/react/utils/components-config';
import { Fragment, useState } from 'react';
import { Image } from '../image/image';
import Separator from '../separator/separator';
import Button from './button';
import type { ButtonProps } from './button.types';
import type { Meta, StoryObj } from '@storybook/react';

const sizes = Object.keys(getComponentsConfig().button) as Array<ButtonProps['size']>;
const variants = ['primary', 'secondary', 'tertiary'] as const;
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
  component: Button,
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
    variant: {
      control: 'select',
      options: variants,
      table: {
        defaultValue: { summary: 'primary' },
        type: { summary: variants.join('|') },
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
    isLoading: { type: 'boolean' },
    children: { control: 'text' },
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

export const AllVariants: Story = {
  argTypes: {
    variant: { table: { disable: true } },
  },
  args: {},
  render: (args) => (
    <View display="flex" flexDirection="row" alignItems="center" gap={12}>
      {variants.map((variant, idx) => (
        <Fragment key={variant}>
          <View display="flex" flexDirection="column" alignItems="center" gap={12}>
            <Button {...args} variant={variant} />
            <Button {...args} variant={variant} disabled />
            <Button {...args} variant={variant} isLoading />
          </View>
          {idx < variants.length - 1 && <Separator vertical />}
        </Fragment>
      ))}
    </View>
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
        <Button key={size} {...args} size={size} />
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
    <View display="flex" flexDirection="row" alignItems="center" gap={12}>
      {tones.map((tone) => (
        <Button key={tone} {...args} tone={tone as ButtonProps['tone']} />
      ))}
    </View>
  ),
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const BluredOnImage: Story = {
  args: {
    blured: true,
  },
  parameters: {
    layout: 'fullscreen',
  },
  render: (args) => (
    <View width="100vw" height="100vh" alignItems="center" justifyContent="center">
      <Image
        source={{ uri: 'https://picsum.photos/id/28/4928/3264', width: 2464, height: 1632 }}
        width="100%"
        height="100%"
        objectFit="cover"
        position="absolute"
      />
      <View flexDirection="column" gap={12}>
        <Button {...args} variant="secondary" />
        <Button {...args} disabled />
      </View>
    </View>
  ),
};

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

export const Loading: Story = {
  args: {
    isLoading: true,
  },
};

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
export const IconRight: Story = {
  args: {
    children: (
      <>
        <Button.Text>Button</Button.Text>
        <Button.Icon icon={Plus} />
      </>
    ),
  },
};
export const IconLeftAndRight: Story = {
  args: {
    children: (
      <>
        <Button.Icon icon={Plus} />
        <Button.Text>Button</Button.Text>
        <Button.Icon>
          <Plus />
        </Button.Icon>
      </>
    ),
  },
};

export const TruncatedText: Story = {
  args: {
    children: (
      <Button.Text>
        A very long label with a character limit because it is important to show all the text and
        there is no cell navigation to view in more detail
      </Button.Text>
    ),
  },
  render: (args) => (
    <View width={200}>
      <Button {...args} />
    </View>
  ),
};

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
