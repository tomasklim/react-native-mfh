import { createStackNavigator } from 'react-navigation'
import RootContainer from './RootContainer'
import TabNavigator from './TabNavigator'
import SearchContainer from './SearchContainer'

const HomeNavigator = createStackNavigator({
  Home: RootContainer,
})

const SearchNavigator = createStackNavigator({
  Search: SearchContainer,
})

export default TabNavigator.createAppContainer(HomeNavigator, SearchNavigator)
