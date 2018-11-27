import React from 'react'
import { Text, StyleSheet } from 'react-native'
import Colors from '../themes/Colors'
import Container from './Container'

const styles = StyleSheet.create({
  text: {
    color: Colors.purpleInactive,
  },
})

export default class Search extends React.PureComponent<null> {
  static navigationOptions = {
    title: 'Search',
    headerTintColor: Colors.purpleInactive,
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    headerStyle: {
      backgroundColor: Colors.black,
      borderBottomColor: Colors.purpleInactive,
    },
  }

  render() {
    return (
      <Container>
        <Text style={styles.text}>aay</Text>
      </Container>
    )
  }
}
