import { styled, useTheme } from '@tamagui/core';
import { useContext } from 'react';
import Svg, { Circle } from 'react-native-svg';
import CreateComponent from '../../utils/component-constructor';
import { LoaderContext, LoaderRoot, LoaderText } from './loader.styled';

const LoaderComponent = CreateComponent(
  LoaderRoot,
  {
    Props: LoaderContext.Provider,
    Text: LoaderText,
    Icon: styled(Text),
  },
  (Root, { children, ...props }, ref) => (
    <Root ref={ref} {...props}>
      <LoaderSpinner />
      {children}
    </Root>
  ),
);

export function LoaderSpinner() {
  const ctx = useContext(LoaderContext);
  const theme = useTheme();

  return (
    <Svg fill="none" width={ctx.size} height={ctx.size} viewBox="0 0 28 28">
      <Circle cx={14} cy={14} r={12} strokeWidth={4} stroke={theme[ctx.color]?.get()} />
      <Circle
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDashoffset={150}
        strokeDasharray="18 150"
        strokeWidth={4}
        cx={14}
        cy={14}
        r={12}
        stroke={theme['$spinColor']?.get()}
      />
    </Svg>
  );
}

// const AnimatedCircle = Animated.createAnimatedComponent(Circle);

// export function AnimatedStrokeCircle() {
//   const progress = useSharedValue(0);
//   const theme = useTheme();

//   useEffect(() => {
//     progress.value = withRepeat(withTiming(1, { duration: 2000 }), -1);
//   }, []);

//   const animatedProps = useAnimatedProps(() => {
//     const p = progress.value % 1;
//     // Вычисляем strokeDash* сами
//     return {
//       strokeDasharray: [Math.floor(18 - 18 * p), 150],
//       strokeDashoffset: 150 - 75 * p,
//     };
//   });

//   return (
//     <AnimatedCircle
//       cx="50"
//       cy="50"
//       r="40"
//       fill="none"
//       strokeWidth={8}
//       animatedProps={animatedProps}
//       transform="rotate(-90, 50, 50)"
//       stroke={theme['$spinColor']?.get()}
//     />
//   );
// }

// const AnimatedCircle = Animated.createAnimatedComponent(Circle);

// export function LoaderSpinnerNative() {
//   const ctx = useContext(LoaderContext);
//   const theme = useTheme();

//   const progress = useSharedValue(0);

//   // При монтировании запускаем «бесконечный цикл»
//   useEffect(() => {
//     progress.value = withRepeat(
//       withTiming(1, {
//         duration: 1000,
//         easing: Easing.linear,
//       }),
//       -1, // бесконечно
//       false,
//     );
//   }, []);

//   const animatedProps = useAnimatedProps(() => {
//     // progress.value идёт от 0 до 1
//     // допусти, 0..0.5 = первый ключ, 0.5..0.75 = второй, 0.75..1 = третий

//     // Ниже – очень «прямолинейная» кусочно‐линейная интерполяция
//     if (progress.value < 0.5) {
//       // от 0% до 50%
//       return {
//         strokeDasharray: [18, 150],
//         strokeDashoffset: 150,
//       };
//     } else if (progress.value < 0.75) {
//       // от 50% до 75%
//       return {
//         strokeDasharray: [18, 150],
//         strokeDashoffset: 112,
//       };
//     } else {
//       // от 75% до 100%
//       return {
//         strokeDasharray: [0, 150],
//         strokeDashoffset: 75,
//       };
//     }
//   });

//   return (
//     <Svg fill="none" width={ctx.size} height={ctx.size} viewBox="0 0 28 28">
//       <Circle cx={14} cy={14} r={12} strokeWidth={4} stroke={theme[ctx.color]?.get()} />
//       <AnimatedCircle
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         strokeDashoffset={150}
//         strokeDasharray="0 150"
//         strokeWidth={4}
//         animatedProps={animatedProps}
//         transform="rotate(-90, 50, 50)"
//         cx={14}
//         cy={14}
//         r={12}
//         stroke={theme['$spinColor']?.get()}
//       />
//     </Svg>
//   );
// }

// const CustomLoader = LoaderComponent.overrides(
//   {
//     Root: {
//       color: 'black',
//       variants: {
//         size: {
//           ':string': (val) => ({
//             color: val,
//           }),
//         },
//       },
//     },

//     Text: {
//       variants: {
//         size: {
//           $5000: (val) => ({
//             color: 'red',
//           }),
//         },
//       },
//     },
//   },
//   (Root, { children, ...props }, ref) => (
//     <Root ref={ref} {...props}>
//       <LoaderSpinner />
//       {children}
//     </Root>
//   ),
// );

// function Fsasd() {
//   return (
//     <CustomLoader size="qweq">
//       {' '}
//       // wrong return type - size must be string | number | undefined
//       <CustomLoader.Text size="">sfdsaf</CustomLoader.Text> // wrong return type size - must be
//       number | $5000 | undefined
//     </CustomLoader>
//   );
// }

const Loader = LoaderComponent();

export default Loader;
