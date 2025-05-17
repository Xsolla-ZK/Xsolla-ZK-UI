import { AnimatePresence } from '@tamagui/animate-presence';
import { Stack, Text, View } from '@tamagui/core';
import { ArrowLeft, Cross } from '@xsolla-zk/icons';
import { useState } from 'react';
import { Button } from '../button/button';
import { NavBar } from '../nav-bar';
import { RichIcon } from '../rich-icon';
import { SemanticText } from '../semantic-text/semantic-text';
// import { Sheet } from './sheet';
import { Sheet } from './sheet';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  component: Sheet,
  parameters: {
    layout: 'centered',
  },
  tags: ['stable'],
  argTypes: {},
  args: {},
  play: async ({ canvasElement }) => {},
} as Meta<typeof Sheet>;

export default meta;
type Story = StoryObj<typeof meta>;

function StepBackButton({ step, back }: { step: number; back: () => void }) {
  return (
    <AnimatePresence>
      {Boolean(step > 0) && (
        <View
          key={`step-back-button-${step}`}
          onPress={() => back()}
          animation="tabSwitch"
          enterStyle={{
            width: 44,
            opacity: 1,
          }}
          exitStyle={{
            width: 0,
            opacity: 0,
          }}
        >
          <ArrowLeft />
        </View>
        // <RichIcon
        //   size="$300"
        //   pressable
        //   onPress={() => back()}
        //   animation="tabSwitch"
        //   enterStyle={{
        //     width: 44,
        //     opacity: 1,
        //   }}
        //   exitStyle={{
        //     width: 0,
        //     opacity: 0,
        //   }}
        // >
        //   <RichIcon.Icon icon={ArrowLeft} />
        // </RichIcon>
      )}
    </AnimatePresence>
  );
}

// Создаем компонент для исправления ошибки линтера
const SheetStory = () => {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(0);
  return (
    <Stack>
      <Button onPress={() => setOpen((prev) => !prev)}>
        <Button.Text>Open</Button.Text>
      </Button>
      <Sheet
        open={open}
        modal
        onOpenChange={setOpen}
        position={0}
        snapPointsMode="fit"
        snapPoints={['fit']}
      >
        <Sheet.Overlay animation="state" enterStyle={{ opacity: 0 }} exitStyle={{ opacity: 0 }} />
        {/* <Sheet.Handle /> */}
        <Sheet.Frame>
          {/* @ts-ignore */}
          <Sheet.Header>
            <NavBar>
              {/*
                  Кнопка "Назад" используется в многошаговых сценариях.
                  Когда она появляется, блок заголовка слегка сдвигается вправо.

                  Параметры spring анимации:
                  - Stiffness: 400.1
                  - Damping: 30
                  - Mass: 1
                  - Duration: 400ms
                */}

              <NavBar.StartSlot>
                <StepBackButton step={step} back={() => setStep((prev) => prev - 1)} />
              </NavBar.StartSlot>
              <NavBar.Center>
                <NavBar.Title>Title</NavBar.Title>
                <NavBar.Subtitle>Subtitle</NavBar.Subtitle>
              </NavBar.Center>
              <NavBar.EndSlot>
                <RichIcon size="$300" pressable onPress={() => setOpen(false)}>
                  <RichIcon.Icon icon={Cross} />
                </RichIcon>
              </NavBar.EndSlot>
            </NavBar>
          </Sheet.Header>
          {/* @ts-ignore */}
          <Sheet.ScrollView>
            <Stack>
              <SemanticText>Hello</SemanticText>
              <Stack flexDirection="row" gap="$200">
                <Button onPress={() => setStep((prev) => prev - 1)}>
                  <Button.Text>Back</Button.Text>
                </Button>
                <Button onPress={() => setStep((prev) => prev + 1)}>
                  <Button.Text>Next</Button.Text>
                </Button>
              </Stack>
            </Stack>
          </Sheet.ScrollView>
        </Sheet.Frame>
      </Sheet>
    </Stack>
  );
};

export const Default: Story = {
  args: {},
  render: () => <SheetStory />,
};

/*
export const ExperimentalFeatureStory: Story = {
  //👇 For this particular story, remove the inherited `stable` tag and apply the `experimental` tag
  tags: ['!stable', 'experimental'],
};
*/
