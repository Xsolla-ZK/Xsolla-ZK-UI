import { AnimatePresence } from '@tamagui/animate-presence';
import { Stack } from '@tamagui/core';
import { ArrowLeft, Cross } from '@xsolla-zk/icons';
import { useState } from 'react';
import { getComponentsConfig } from '../../utils';
import { Button } from '../button/button';
import { RichIcon } from '../rich-icon';
import { NavBar } from './nav-bar';
import { NavBarStateContext } from './nav-bar.context';
import type { NavBarPresets, NavBarProps, NavBarSizes } from './nav-bar.types';
import type { Meta, StoryObj } from '@storybook/react';

const sizes = Object.keys(getComponentsConfig().navBar.size) as NavBarSizes[];
const presets = Object.keys(getComponentsConfig().navBar.center) as NavBarPresets[];

const meta = {
  component: NavBar,
  parameters: {
    layout: 'fullscreen',
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
    preset: {
      control: 'select',
      options: presets,
      table: {
        defaultValue: { summary: 'default' },
        type: { summary: presets.join('|') },
      },
    },
  },
  args: {},
  play: async ({ canvasElement }) => {},
} as Meta<typeof NavBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: (args) => <NavBarStory {...args} />,
};

export const PresetProminent: Story = {
  args: {
    preset: 'prominent',
  },
  render: (args) => <NavBarStory {...args} />,
};

function StepBackButton({ step, back }: { step: number; back: () => void }) {
  const { slotMaxWidth } = NavBarStateContext.useStyledContext();

  return (
    <AnimatePresence>
      {Boolean(step > 0) && (
        <Stack
          key={`step-back-button-${step}`}
          animation="bounceReturn"
          enterStyle={{
            opacity: 1,
            x: 0,
          }}
          exitStyle={{
            opacity: 0,
            x: -20,
          }}
        >
          <RichIcon size="$300" pressable onPress={() => back()}>
            <RichIcon.Icon icon={ArrowLeft} />
          </RichIcon>
        </Stack>
      )}
    </AnimatePresence>
  );
}

function NavBarStory(props: NavBarProps) {
  const [step, setStep] = useState(0);
  return (
    <Stack paddingVertical="$100" maxWidth="90%" marginHorizontal="auto">
      <NavBar {...props}>
        {/*
          Кнопка "Назад" используется в многошаговых сценариях.
          Когда она появляется, блок заголовка слегка сдвигается вправо.

          Параметры spring анимации:
          - Stiffness: 400.1
          - Damping: 30
          - Mass: 1
          - Duration: 400ms
        */}
        <AnimatePresence>
          {Boolean(step > 0) && (
            <NavBar.StartSlot
              animation="state"
              enterStyle={{
                opacity: 1,
              }}
              exitStyle={{
                opacity: 0,
                width: 0,
              }}
            >
              <RichIcon size="$300" pressable onPress={() => setStep((prev) => prev - 1)}>
                <RichIcon.Icon icon={ArrowLeft} />
              </RichIcon>
            </NavBar.StartSlot>
          )}
        </AnimatePresence>
        <NavBar.Center>
          <NavBar.Title>Title</NavBar.Title>
          <NavBar.Subtitle>Subtitle step {step}</NavBar.Subtitle>
        </NavBar.Center>
        <NavBar.EndSlot>
          <RichIcon size="$300" pressable onPress={() => setStep(0)}>
            <RichIcon.Icon icon={Cross} />
          </RichIcon>
        </NavBar.EndSlot>
      </NavBar>
      <Stack padding="$100" alignItems="center">
        <Button onPress={() => setStep((prev) => prev + 1)} fullWidth={false}>
          <Button.Text>Next</Button.Text>
        </Button>
      </Stack>
    </Stack>
  );
}
