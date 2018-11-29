import { createStackNavigator } from 'react-navigation'
import Home from '../Home'
import TabNavigator from './TabNavigator'
import Search from '../Search'
import Menu from '../Menu'

const HomeNavigator = createStackNavigator({
  Home,
})

const SearchNavigator = createStackNavigator({
  Search,
})

const MenuNavigator = createStackNavigator({
  Menu,
})

export default TabNavigator.createAppContainer(
  HomeNavigator,
  SearchNavigator,
  MenuNavigator,
)
