/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { isWeb, withStaticProperties } from '@tamagui/core';
import { isValidElement, useId } from 'react';
import { withStyledMediaContext } from '../../utils';
import {
  TabBarContext,
  TabBarFrame,
  TabBarItem,
  TabBarItemIcon,
  TabBarItemTitle,
} from './tab-bar.styled';
import type { TabBarProps } from './tab-bar.types';

const TabBarItemComponent = withStyledMediaContext(TabBarItem, TabBarContext);

const TabBarComponent = TabBarFrame.styleable<TabBarProps>(
  ({ state, descriptors, navigation, ...rest }, ref) => {
    const uniqueId = useId();

    return (
      <TabBarContext.Provider componentProps={rest}>
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
              <TabBarItemComponent
                key={uniqueId + index}
                vertical={options.tabBarLabelPosition === 'below-icon'}
                onPress={onPress}
              >
                {icon}
                {options.tabBarShowLabel ? labelComponent : null}
              </TabBarItemComponent>
            );
          })}
        </TabBarFrame>
      </TabBarContext.Provider>
    );
  },
);

export const TabBar = withStaticProperties(TabBarComponent, {
  Title: TabBarItemTitle,
  Icon: TabBarItemIcon,
});

// function TabBarStory(props: Omit<TabBarProps, 'state' | 'descriptors' | 'navigation'>) {
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
//     Home: {
//       options: {
//         title: 'Home',
//         tabBarShowLabel: true,
//         tabBarIcon: () => <TabBar.Icon icon={Home} />,
//         tabBarLabel: ({children}) => <TabBar.Title>{children}</TabBar.Title>,
//       },
//     },
//     About: {
//       options: {
//         title: 'About',
//         tabBarShowLabel: true,
//         tabBarIcon: () => <TabBar.Icon icon={Settings} />,
//         tabBarLabel: ({children}) => <TabBar.Title>{children}</TabBar.Title>,
//       },
//     },
//     Contact: {
//       options: {
//         title: 'Contact',
//         tabBarShowLabel: true,
//         tabBarIcon: () => <TabBar.Icon icon={Mail} />,
//         tabBarLabel: ({children}) => <TabBar.Title>{children}</TabBar.Title>,
//       },
//     },
//   };

//   return (
//     <Stack flexDirection="column" width="100%" minHeight={610} height="100%" maxHeight="100%">
//       <Stack
//         flexDirection="column"
//         width="100%"
//         flex={9}
//         alignItems="center"
//         justifyContent="center"
//       >
//         <Typography>{state.routes[state.index].key}</Typography>
//       </Stack>
//       <TabBar
//         {...props}
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
//     </Stack>
//   );
// }
