import { createBottomTabNavigator, createAppContainer } from 'react-navigation'
import Ionicons from 'react-native-vector-icons/Ionicons'
import React from 'react'
import Colors from '../themes/Colors'

export default class MainNavigator {
  static createAppContainer = (Home, Search) => {
    const TabNavigator = createBottomTabNavigator(
      {
        Home,
        Search,
      },
      {
        defaultNavigationOptions: ({ navigation }) => ({
          tabBarIcon: ({ focused, horizontal, tintColor }) => {
            const { routeName } = navigation.state
            let iconName
            if (routeName === 'Home') {
              iconName = `ios-home${focused ? '' : '-outline'}`
            } else if (routeName === 'Search') {
              iconName = `ios-search${focused ? '' : '-outline'}`
            }

            return (
              <Ionicons
                name={iconName}
                size={horizontal ? 20 : 25}
                color={tintColor}
              />
            )
          },
        }),
        tabBarOptions: {
          activeTintColor: Colors.purpleActive,
          inactiveTintColor: Colors.purpleInactive,
        },
      },
    )
    return createAppContainer(TabNavigator)
  }
}
