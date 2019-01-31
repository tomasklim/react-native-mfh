import { createStackNavigator } from 'react-navigation'
import Home from '../Home'
import TabNavigator from './TabNavigator'
import Search from '../Search'
import Menu from '../Menu'
import MovieDetail from '../MovieDetail'

const HomeNavigator = createStackNavigator({
  Home,
  MovieDetail,
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
