import { withStaticProperties } from '@tamagui/core';
import { withStyledMediaContext } from '../../utils';
import {
  SnackBarContentDescriptionActionsFrame,
  SnackBarContentDescriptionFrame,
  SnackBarContentDescriptionListFrame,
  SnackBarContentFrame,
  SnackBarContext,
  SnackBarFrame,
} from './snack-bar.styled';
import type { SnackBarProps } from './snack-bar.types';

const ContentComponent = withStyledMediaContext(SnackBarContentFrame, SnackBarContext);
const DescriptionComponent = withStyledMediaContext(
  SnackBarContentDescriptionFrame,
  SnackBarContext,
);
const ListComponent = withStyledMediaContext(SnackBarContentDescriptionListFrame, SnackBarContext);
const ActionsComponent = withStyledMediaContext(
  SnackBarContentDescriptionActionsFrame,
  SnackBarContext,
);

const SnackBarFrameComponent = SnackBarFrame.styleable<SnackBarProps>((propsIn, ref) => (
  <SnackBarContext.Provider componentProps={propsIn}>
    <SnackBarFrame {...propsIn} ref={ref} />
  </SnackBarContext.Provider>
));

export const SnackBar = withStaticProperties(SnackBarFrameComponent, {
  Content: ContentComponent,
  Description: DescriptionComponent,
  List: ListComponent,
  Actions: ActionsComponent,
});
