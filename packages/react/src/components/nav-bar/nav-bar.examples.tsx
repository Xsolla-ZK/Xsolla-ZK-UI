// import { isWeb } from '@tamagui/core';
// import { Stack, Text, View } from '@tamagui/core';
// // Примечание: для реального приложения используйте актуальные пакеты
// // Этот пример демонстрирует концепцию, адаптируйте его под ваше окружение
// import { NavBar } from './nav-bar';

// // Пример использования NavBar в Web-приложении (Next.js)
// export const NavBarWebExample = () => {
//   // В реальном приложении используйте useRouter из вашей навигационной библиотеки
//   const handleBack = () => {
//     console.log('Navigate back');
//   };

//   const navigateToSettings = () => {
//     console.log('Navigate to settings');
//   };

//   return (
//     <Stack>
//       <NavBar
//         title="Профиль"
//         showBackButton={true}
//         onBackPress={handleBack}
//         headerRight={
//           <NavBar.Action onPress={navigateToSettings}>
//             <Text>Настройки</Text>
//           </NavBar.Action>
//         }
//       />
//       <View padding="$2">
//         <Text>Содержимое страницы</Text>
//       </View>
//     </Stack>
//   );
// };

// // Пример использования NavBar с React Navigation на React Native
// export const NavBarNativeExample = () => {
//   // В реальном приложении получите эти объекты из вашей навигационной библиотеки
//   const navigation = {
//     goBack: () => console.log('Go back'),
//     canGoBack: () => true
//   };

//   const navigateToSettings = () => {
//     console.log('Navigate to settings');
//   };

//   return (
//     <Stack flex={1}>
//       <NavBar
//         title="Профиль пользователя"
//         navigation={navigation}
//         headerRight={
//           <NavBar.Action onPress={navigateToSettings}>
//             <Text>Настройки</Text>
//           </NavBar.Action>
//         }
//       />
//       <View padding="$2" flex={1}>
//         <Text>Содержимое экрана</Text>
//       </View>
//     </Stack>
//   );
// };

// /**
//  * Интеграция с React Navigation / Expo Router
//  *
//  * Для интеграции с React Navigation в файле _layout.tsx:
//  *
//  * ```
//  * import { Stack } from 'expo-router';
//  * import { NavBar } from '@xsolla-zk/react';
//  *
//  * export default function Layout() {
//  *   return (
//  *     <Stack
//  *       screenOptions={{
//  *         header: (props) => (
//  *           <NavBar
//  *             title={props.options.title}
//  *             navigation={props.navigation}
//  *             route={props.route}
//  *             headerRight={props.options.headerRight?.(props)}
//  *             headerLeft={props.options.headerLeft?.(props)}
//  *           />
//  *         ),
//  *       }}
//  *     >
//  *       <Stack.Screen name="index" options={{ title: "Главная" }} />
//  *       <Stack.Screen name="profile" options={{ title: "Профиль" }} />
//  *     </Stack>
//  *   );
//  * }
//  * ```
//  */

// // Пример кастомизации NavBar с дополнительными элементами
// export const CustomizedNavBarExample = () => {
//   const handleBack = () => {
//     console.log('Navigate back');
//   };

//   return (
//     <Stack>
//       <NavBar
//         title={
//           <Stack flexDirection="row" alignItems="center">
//             <NavBar.Title>Кастомный заголовок</NavBar.Title>
//           </Stack>
//         }
//         onBackPress={handleBack}
//         headerRight={
//           <Stack flexDirection="row">
//             <NavBar.Action onPress={() => console.log('Search')}>
//               <Text>Поиск</Text>
//             </NavBar.Action>
//             <NavBar.Action onPress={() => console.log('Menu')}>
//               <Text>Меню</Text>
//             </NavBar.Action>
//           </Stack>
//         }
//       />
//       <View padding="$2">
//         <Text>Содержимое с кастомной навигационной панелью</Text>
//       </View>
//     </Stack>
//   );
// };

// export function PageWeb() {
//   const router = useRouter();

//   return (
//     <>
//       <NavBar
//         title="Заголовок страницы"
//         onBackPress={() => router.back()}
//         headerRight={<NavBar.Action onPress={() => {}}>Действие</NavBar.Action>}
//       />
//       {/* Содержимое страницы */}
//     </>
//   );
// }

// export default function PageNative() {
//   return (
//     <Stack
//       screenOptions={{
//         header: (props) => (
//           <NavBar
//             title={props.options.title}
//             navigation={props.navigation}
//             route={props.route}
//             headerRight={props.options.headerRight?.(props)}
//           />
//         ),
//       }}
//     >
//       <Stack.Screen
//         name="index"
//         options={{
//           title: "Главная",
//           headerRight: () => (
//             <NavBar.Action onPress={() => console.log('Action')}>
//               <Text>Действие</Text>
//             </NavBar.Action>
//           ),
//         }}
//       />
//     </Stack>
//   );
// }
