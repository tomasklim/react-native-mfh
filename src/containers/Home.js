import React from 'react'
import { StyleSheet, Text } from 'react-native'
import Colors from '../themes/Colors'
import Container from './Container'

const styles = StyleSheet.create({
  text: {
    color: Colors.purpleInactive,
  },
})

export default class Home extends React.PureComponent<null> {
  static navigationOptions = {
    title: 'Home',
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
        <Text style={styles.text}>a</Text>
      </Container>
    )
  }
}
