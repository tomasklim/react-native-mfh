import React from 'react'
import { SafeAreaView, View, StyleSheet, StatusBar } from 'react-native'
import Colors from '../themes/Colors'

const styles = StyleSheet.create({
  outerWrapper: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    paddingHorizontal: 20,
    paddingTop: 70,
  },
})

export default class Container extends React.PureComponent<null> {
  render() {
    const { children } = this.props
    return (
      <SafeAreaView style={styles.outerWrapper}>
        <StatusBar barStyle="light-content" />
        <View style={styles.container}>{children}</View>
      </SafeAreaView>
    )
  }
}
