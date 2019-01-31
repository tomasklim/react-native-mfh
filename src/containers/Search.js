import React from 'react'
import Colors from '../themes/Colors'
import Container from './Container'
import { HeaderImage } from '../components'

export default class Search extends React.PureComponent<null> {
  static navigationOptions = {
    headerTitle: <HeaderImage />,
    headerStyle: {
      backgroundColor: Colors.black,
      borderBottomColor: Colors.purpleInactive,
    },
  }

  render() {
    return <Container />
  }
}
