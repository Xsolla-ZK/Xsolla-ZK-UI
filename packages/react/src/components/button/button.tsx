import CreateComponent from '../../utils/component-constructor';
import Loader from '../loader/loader';
import { ButtonContext, ButtonIcon, ButtonOverlay, ButtonRoot, ButtonText } from './button.styled';

export const ButtonComponent = CreateComponent(
  ButtonRoot,
  {
    Props: ButtonContext.Provider,
    Text: ButtonText,
    Icon: ButtonIcon,
  },
  (Root, { children, isLoading, ...props }, ref) => (
    <Root group isLoading={isLoading} {...props} ref={ref}>
      <ButtonOverlay />
      {isLoading ? <Loader /> : children}
    </Root>
  ),
);

const Button = ButtonComponent();

export default Button;
