import { createBottomTabNavigator, createAppContainer } from 'react-navigation'
import Icon from 'react-native-vector-icons/Ionicons'
import React from 'react'
import Colors from '../../themes/Colors'

export default class MainNavigator {
  static createAppContainer = (Home, Search, Menu) => {
    const TabNavigator = createBottomTabNavigator(
      {
        Home,
        Search,
        Menu,
      },
      {
        defaultNavigationOptions: ({ navigation }) => ({
          tabBarIcon: ({ focused }) => {
            const { routeName } = navigation.state
            let iconName
            if (routeName === 'Home') {
              iconName = `md-home`
            } else if (routeName === 'Search') {
              iconName = `md-search`
            } else if (routeName === 'Menu') {
              iconName = `md-menu`
            }

            return (
              <Icon
                name={iconName}
                size={35}
                color={focused ? Colors.purpleActive : Colors.purpleInactive}
              />
            )
          },
        }),
        tabBarOptions: {
          showLabel: false,
          activeTintColor: Colors.purpleActive,
          inactiveTintColor: Colors.purpleInactive,
          style: {
            backgroundColor: Colors.black,
          },
          labelStyle: {
            fontSize: 12,
          },
        },
      },
    )
    return createAppContainer(TabNavigator)
  }
}
