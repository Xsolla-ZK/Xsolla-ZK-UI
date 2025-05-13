import { Stack } from '@tamagui/core';
import { getComponentsConfig } from '@xsolla-zk/react/utils/components-config';
import { useId, useState } from 'react';
import { Field } from '../field/field';
import { Slider } from './slider';
import type { SliderProps, SliderSizes } from './slider.types';
import type { Meta, StoryObj } from '@storybook/react';

const sizes = Object.keys(getComponentsConfig().slider) as SliderSizes[];

const meta = {
  component: Slider,
  parameters: {
    layout: 'centered',
  },
  tags: ['stable'],
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
    size: {
      control: 'select',
      options: sizes,
      table: {
        defaultValue: { summary: '$500' },
        type: { summary: sizes.join('|') },
      },
    },
  },
  args: {},
  play: async ({ canvasElement }) => {},
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

function SliderBase(props: SliderProps) {
  return (
    <Slider defaultValue={[50]} max={100} step={1} {...props}>
      <Slider.Track>
        <Slider.TrackActive />
      </Slider.Track>
      <Slider.Knob index={0} />
    </Slider>
  );
}

export const Default: Story = {
  args: {},
  render: (args) => <SliderBase width={300} {...args} />,
};

export const Vertical: Story = {
  args: {
    orientation: 'vertical',
  },
  render: (args) => <SliderBase height={300} {...args} />,
};

export const Range: Story = {
  args: {
    defaultValue: [50, 75],
  },
  render: (args) => (
    <Slider width={300} max={100} step={1} {...args}>
      <Slider.Track>
        <Slider.TrackActive />
      </Slider.Track>
      <Slider.Knob index={0} />
      <Slider.Knob index={1} />
    </Slider>
  ),
};

export const CustomStep: Story = {
  args: {
    step: 25,
  },
  render: (args) => <SliderBase width={300} {...args} />,
};

export const CustomColors: Story = {
  args: {},
  render: (args) => (
    <Slider width={300} defaultValue={[50]} max={100} step={1} {...args}>
      <Slider.Track>
        <Slider.TrackActive backgroundColor="$background.info-high" />
      </Slider.Track>
      <Slider.Knob
        index={0}
        backgroundColor="$background.info-high"
        borderColor="$border.info-primary"
      />
    </Slider>
  ),
};

function ControlledField({ defaultValue, ...props }: SliderProps) {
  const [value, setValue] = useState(() => defaultValue);
  const uniqId = useId();

  return (
    <Field width={300}>
      <Field.Row>
        <Field.Label>Current value</Field.Label>
        <Field.LabelValue>{value?.join(', ')}</Field.LabelValue>
      </Field.Row>
      <Field.Control>
        <Slider value={value} onValueChange={setValue} {...props}>
          <Slider.Track>
            <Slider.TrackActive />
          </Slider.Track>
          {defaultValue?.map((_, index) => (
            <Slider.Knob key={`slider-knob-${uniqId}${index}`} index={index} />
          ))}
        </Slider>
      </Field.Control>
    </Field>
  );
}

export const WithControlledValue: Story = {
  args: {},
  render: (args) => (
    <Stack gap={12}>
      <ControlledField defaultValue={[25]} {...args} />
      <ControlledField defaultValue={[25, 75]} {...args} />
    </Stack>
  ),
};
