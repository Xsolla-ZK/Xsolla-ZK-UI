import { Stack } from '@tamagui/core';
import { Sheet } from '@tamagui/sheet';
import { useState } from 'react';
import Button from '../button/button';
import SemanticText from '../semantic-text/semantic-text';
// import { Sheet } from './sheet';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  component: Sheet,
  // subcomponents: { Thumb: XZKUISwitch.Thumb },
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

export const Default: Story = {
  args: {},
  render: () => {
    const [open, setOpen] = useState(false);
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
          <Sheet.Overlay
            animation="state"
            // backgroundColor="$layer.floor-scrim"
            enterStyle={{ opacity: 0 }}
            exitStyle={{ opacity: 0 }}
          />
          {/* <Sheet.Handle /> */}
          <Sheet.Frame>
            <Sheet.ScrollView>
              <Stack>
                <SemanticText>Hello</SemanticText>
                <Button onPress={() => setOpen(false)}>
                  <Button.Text>Close</Button.Text>
                </Button>
              </Stack>
            </Sheet.ScrollView>
          </Sheet.Frame>
        </Sheet>
      </Stack>
    );
  },
};

/*
export const ExperimentalFeatureStory: Story = {
  //👇 For this particular story, remove the inherited `stable` tag and apply the `experimental` tag
  tags: ['!stable', 'experimental'],
};
*/
