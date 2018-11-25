import React from 'react'
import { SafeAreaView, View, Text, StyleSheet } from 'react-native'
import Colors from '../themes/Colors'

const styles = StyleSheet.create({
  outerWrapper: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: Colors.black,
    paddingHorizontal: 20,
    paddingTop: 70,
  },
  text: {
    color: Colors.purpleInactive,
  },
})

export default class RootContainer extends React.PureComponent<null> {
  static navigationOptions = {
    title: 'Home',
    headerTintColor: Colors.purpleInactive,
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  }

  render() {
    return (
      <SafeAreaView style={styles.outerWrapper}>
        <View style={styles.container}>
          <Text style={styles.text}>aay</Text>
        </View>
      </SafeAreaView>
    )
  }
}
