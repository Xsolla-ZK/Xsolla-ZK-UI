import Styled from './button.styled';
import type { ButtonProps } from './button.types';

// const XZKUIButton = forwardRef(function XZKUIButton(props, ref) {
//   const {
//     size = 500,
//     variant = 'primary',
//     isLoading,
//     bgOff,
//     startAdornment,
//     endAdornment,
//     children,
//     fullWidth,
//     className,
//     onClick,
//     ...rest
//   } = props;
//   return (
//     <Styled.Root
//       xzkuiSize={size}
//       xzkuiVariant={variant}
//       className={clsx([
//         className,
//         isLoading && xzkuiButtonClasses.loading,
//         fullWidth && xzkuiButtonClasses.fullWidth,
//         bgOff && xzkuiButtonClasses.bgOff,
//         (startAdornment || endAdornment) && xzkuiButtonClasses.extraSpaces,
//       ])}
//       onClick={!props.isLoading ? onClick : undefined}
//       {...rest}
//       ref={ref}
//     >
//       {isLoading ? (
//         isValidElement(isLoading) ? (
//           isLoading
//         ) : (
//           <XZKUILoader variant={variant === 'primary' ? 'brand' : undefined} />
//         )
//       ) : (
//         renderContent(children, startAdornment, endAdornment)
//       )}
//     </Styled.Root>
//   );
// }) as OverridableComponent<ComponentButtonTypeMap>;

// function renderContent(content: ReactNode, start: ReactNode, end: ReactNode) {
//   return (
//     <>
//       {start && <Styled.Adornment>{start}</Styled.Adornment>}
//       {isValidElement(content) ? content : <Styled.Text>{content}</Styled.Text>}
//       {end && <Styled.Adornment>{end}</Styled.Adornment>}
//     </>
//   );
// }

function Button({ children, ...props }: ButtonProps) {
  return (
    <Styled group containerType="normal" {...props}>
      <Styled.Overlay />
      <Styled.Text>{children}</Styled.Text>
    </Styled>
  );
}

export default Button;
