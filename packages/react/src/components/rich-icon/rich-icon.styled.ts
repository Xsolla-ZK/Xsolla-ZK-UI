import styled from '@emotion/styled';
import pickCustomColor from '@xsolla-zk-ui/react/utils/color/pick-custom-color';
import shouldForwardProp from '@xsolla-zk-ui/react/utils/should-forward-prop';
import XZKUIPimpleStyled from '../pimple/pimple.styled';
import xzkuiRichIconClasses from './rich-icon.classes';
import type { XZKUIRichIconBaseProps } from './rich-icon.types';
import type { XZKUIStyledProps } from '@xsolla-zk-ui/react/types/theme';

export const richIconPaths = {
  circle:
    'M80 40C80 62.0914 62.0914 80 40 80C17.9086 80 0 62.0914 0 40C0 17.9086 17.9086 0 40 0C62.0914 0 80 17.9086 80 40Z',
  squircle:
    'M0 36.5714C0 23.7702 0 17.3696 2.49128 12.4802C4.68267 8.17937 8.17937 4.68267 12.4802 2.49128C17.3696 0 23.7702 0 36.5714 0H43.4286C56.2298 0 62.6304 0 67.5198 2.49128C71.8206 4.68267 75.3173 8.17937 77.5087 12.4802C80 17.3696 80 23.7702 80 36.5714V43.4286C80 56.2298 80 62.6304 77.5087 67.5198C75.3173 71.8206 71.8206 75.3173 67.5198 77.5087C62.6304 80 56.2298 80 43.4286 80H36.5714C23.7702 80 17.3696 80 12.4802 77.5087C8.17937 75.3173 4.68267 71.8206 2.49128 67.5198C0 62.6304 0 56.2298 0 43.4286V36.5714Z',
  rhombus: 'M5 40L40 0L75 40L40 80L5 40Z',
  blocksHorizontal:
    'M20 0C8.95431 0 0 8.95431 0 20C0 31.0457 8.95431 40 20 40C8.95431 40 0 48.9543 0 60C0 71.0457 8.95431 80 20 80H60C71.0457 80 80 71.0457 80 60C80 48.9543 71.0457 40 60 40C71.0457 40 80 31.0457 80 20C80 8.95431 71.0457 0 60 0H20Z',
  circlesTLBR:
    'M21.2854 58.7146C8.96691 54.981 0 43.5377 0 30C0 13.4315 13.4315 0 30 0C43.5377 0 54.981 8.96691 58.7146 21.2854C71.0331 25.019 80 36.4623 80 50C80 66.5685 66.5685 80 50 80C36.4623 80 25.019 71.0331 21.2854 58.7146Z',
  leaf: 'M0 36.5714C0 23.7702 0 17.3696 2.49128 12.4802C4.68267 8.17937 8.17937 4.68267 12.4802 2.49128C17.3696 0 23.7702 0 36.5714 0H80V43.4286C80 56.2298 80 62.6304 77.5087 67.5198C75.3173 71.8206 71.8206 75.3173 67.5198 77.5087C62.6304 80 56.2298 80 43.4286 80H0V36.5714Z',
  arrowUp:
    'M0 0L11.7157 11.7157C4.4771 18.9543 0 28.9543 0 40C0 62.0914 17.9086 80 40 80C51.0457 80 61.0457 75.5229 68.2843 68.2843L80 80V36.5714C80 23.7702 80 17.3696 77.5087 12.4802C75.3173 8.17941 71.8206 4.6827 67.5198 2.49128C62.6304 0 56.2298 0 43.4286 0H0Z',
  arrowDown:
    'M80 80L68.2843 68.2843C75.5229 61.0457 80 51.0457 80 40C80 17.9086 62.0914 0 40 0C28.9543 0 18.9543 4.4771 11.7157 11.7157L0 0V43.4286C0 56.2298 0 62.6304 2.49128 67.5198C4.6827 71.8206 8.17941 75.3173 12.4802 77.5087C17.3696 80 23.7702 80 36.5714 80H80Z',
  diamond: 'M0 45.7143L14.2857 0H40H65.7143L80 45.7143L40 80L0 45.7143Z',
  oval: 'M80 40C80 56.5685 62.0914 70 40 70C17.9086 70 0 56.5685 0 40C0 23.4315 17.9086 10 40 10C62.0914 10 80 23.4315 80 40Z',
  cross:
    'M5.88745 5.88745C-1.96248 13.7374 -1.96248 26.4646 5.88745 34.3146L11.5729 40L5.88745 45.6854C-1.96248 53.5354 -1.96248 66.2626 5.88745 74.1125C13.7374 81.9625 26.4646 81.9625 34.3146 74.1125L40 68.4271L45.6854 74.1125C53.5354 81.9625 66.2626 81.9625 74.1125 74.1125C81.9625 66.2626 81.9625 53.5354 74.1125 45.6854L68.4271 40L74.1125 34.3146C81.9625 26.4646 81.9625 13.7374 74.1125 5.88745C66.2626 -1.96248 53.5354 -1.96248 45.6854 5.88745L40 11.5729L34.3146 5.88745C26.4646 -1.96248 13.7374 -1.96248 5.88745 5.88745Z',
  hexagon: 'M40 0L75 20V60L40 80L5 60V20L40 0Z',
  blocksVertical:
    'M0 60C0 71.0457 8.95431 80 20 80C31.0457 80 40 71.0457 40 60C40 71.0457 48.9543 80 60 80C71.0457 80 80 71.0457 80 60V20C80 8.9543 71.0457 0 60 0C48.9543 0 40 8.9543 40 20C40 8.9543 31.0457 0 20 0C8.95431 0 0 8.9543 0 20V60Z',
};

type StyledProps = XZKUIStyledProps<XZKUIRichIconBaseProps>;

const Root = styled('div', {
  shouldForwardProp,
})<StyledProps>(
  ({ theme, xzkuiBg }) => `
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: ${pickCustomColor(theme, xzkuiBg)};

    ${XZKUIPimpleStyled.Root} {
      position: absolute;
      top: -0.33em;
      right: -0.33em;
      min-width: 1.66em;
      min-height: 1.66em;
      padding: 0 0.33em;
      font-size: 0.25em;
      line-height: 1em;
    }
  `,
  ({ as }) =>
    as === 'button' &&
    `
      border: none;
      background: none;
      padding: 0;
      cursor: pointer;
  `,
  ({ theme, xzkuiSize }) => theme.components.richIcon.sizes[xzkuiSize],
);

const Icon = styled('svg')(
  () => `
    display: inline-block;
    position: relative;
    vertical-align: middle;
    user-select: none;
    color: inherit;
  `,
);

const Content = styled('span')(
  ({ theme }) => `
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.55em;
    color: ${theme.theme.content.neutralPrimary};

    .${xzkuiRichIconClasses.noShape} & {
      font-size: 1em;
    }
  `,
);

const XZKUIRichIconStyled = {
  Root,
  Icon,
  Content,
};

export default XZKUIRichIconStyled;
