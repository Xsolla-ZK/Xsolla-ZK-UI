import { Stack } from '@tamagui/core';
import { Cross } from '@xsolla-zk/icons';
import { Button } from '../button';
import { RichIcon } from '../rich-icon';
import { Typography } from '../typography';
import { ToastProvider } from './provider/toast-provider';
import { Toast } from './toast';
import { ToastViewport, useToastController, useToastState } from '.';
import type { ToastProps } from '.';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  component: Toast,
  parameters: {
    layout: 'centered',
  },
  tags: ['stable'],
  argTypes: {
    children: { table: { disable: true } },
  },
  args: {},
  play: async ({ canvasElement }) => {},
} as Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof meta>;

function ToastBase(props: ToastProps) {
  const currentToast = useToastState();

  return (
    <Toast
      key={currentToast?.id}
      animation="medium"
      enterStyle={{ opacity: 0, transform: [{ translateY: 100 }] }}
      exitStyle={{ opacity: 0, transform: [{ translateY: 100 }] }}
      transform={[{ translateY: 0 }]}
      opacity={1}
      scale={1}
      viewportName={currentToast?.viewportName}
      {...props}
    >
      <Toast.Title>Toast Title</Toast.Title>
      <Toast.Description>Toast Description</Toast.Description>
      <Toast.Action altText="Toast Action 1">
        <Typography>Action</Typography>
      </Toast.Action>
      <Toast.Close>
        <RichIcon>
          <RichIcon.Icon icon={Cross} />
        </RichIcon>
      </Toast.Close>
    </Toast>
  );
}

function ToastShowHide() {
  const toast = useToastController();

  return (
    <Stack flexDirection="row" justifyContent="center" gap={12}>
      <Button
        onPress={() => {
          toast.show('Success!', {
            message: 'Some description message',
          });
        }}
      >
        <Button.Text>Show</Button.Text>
      </Button>
      <Button
        onPress={() => {
          toast.hide();
        }}
      >
        <Button.Text>Hide</Button.Text>
      </Button>
    </Stack>
  );
}

function ToastComposition(args: ToastProps) {
  return (
    <Stack gap="$200">
      <ToastShowHide />
      <ToastBase {...args} />
    </Stack>
  );
}

export const Default: Story = {
  args: {},
  render: (args) => (
    <ToastProvider>
      <ToastViewport />
      <ToastViewport name="viewport-custom" />
      <ToastComposition {...args} />
    </ToastProvider>
  ),
};

/*
export const ExperimentalFeatureStory: Story = {
  //👇 For this particular story, remove the inherited `stable` tag and apply the `experimental` tag
  tags: ['!stable', 'experimental'],
};
*/
