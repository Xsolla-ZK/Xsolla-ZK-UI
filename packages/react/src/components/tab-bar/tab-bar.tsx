/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { isWeb, withStaticProperties } from '@tamagui/core';
import { isValidElement, useId } from 'react';
import { TabBarFrame, TabBarItem, TabBarItemIcon, TabBarItemTitle } from './tab-bar.styled';
import type { TabBarProps } from './tab-bar.types';
import type { TamaguiElement } from '@tamagui/core';
import type { ForwardedRef } from 'react';

const TabBarComponent = TabBarFrame.styleable<TabBarProps>(
  ({ state, descriptors, navigation, ...rest }, ref: ForwardedRef<TamaguiElement>) => (
    <TabBarFrame {...rest} ref={ref}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          if (!isWeb) {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          } else {
            navigation.navigate(route.name);
          }
        };

        const labelComponent = isValidElement(label)
          ? label
          : typeof label === 'function'
            ? label({
                focused: isFocused,
                color: 'black',
                position: options.tabBarLabelPosition ?? 'below-icon',
                children: options.title ?? route.name,
              })
            : label;

        const icon = isValidElement(options.tabBarIcon)
          ? options.tabBarIcon
          : typeof options.tabBarIcon === 'function'
            ? options.tabBarIcon({ focused: isFocused, color: 'black', size: 24 })
            : null;

        return (
          <TabBarItem
            key={useId() + index}
            vertical={options.tabBarLabelPosition === 'below-icon'}
            onPress={onPress}
          >
            {icon}
            {options.tabBarShowLabel ? labelComponent : null}
          </TabBarItem>
        );
      })}
    </TabBarFrame>
  ),
);

export const TabBar = withStaticProperties(TabBarComponent, {
  Title: TabBarItemTitle,
  Icon: TabBarItemIcon,
});

// export function Tabbar() {
//   const currentRouteIndex = 0;

//   const [state, setState] = useState({
//     index: currentRouteIndex,
//     routes: [
//       { name: '/', key: 'Home' },
//       { name: '/about', key: 'About' },
//       { name: '/contact', key: 'Contact' },
//     ],
//   });

//   const descriptors = {
//     Home: { options: { title: 'Home' } },
//     About: { options: { title: 'About' } },
//     Contact: { options: { title: 'Contact' } },
//   };

//   return (
//     <View flexDirection="column" width="100%" minHeight={610} height="100%" maxHeight="100%">
//       <View
//         flexDirection="column"
//         width="100%"
//         flex={9}
//         alignItems="center"
//         justifyContent="center"
//       >
//         <Text fontSize="$8" fontWeight="$8" lineHeight="$8">
//           {state.routes[state.index].key}
//         </Text>
//       </View>
//       <CustomTabBar
//         theme="red"
//         alignSelf="center"
//         state={state}
//         descriptors={descriptors}
//         navigation={{
//           navigate: (route: string) => {
//             // navigate to the route using nextjs router
//             // umcomment the commented code if you are using with nextjs
//             // router.push(route);
//             // remove the following line in your code
//             setState((prevState) => ({
//               ...prevState,
//               index: prevState.routes.findIndex((r) => r.name === route),
//             }));
//           },
//         }}
//       />
//     </View>
//   );
// }
