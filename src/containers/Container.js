// @flow
import React from 'react'
import { SafeAreaView, View, StyleSheet, StatusBar } from 'react-native'
import { connect } from 'react-redux'
import Colors from '../themes/Colors'

import { onGetMovies } from '../state/actions'

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

type Props = {
  children: React.PureComponent,
}

class Container extends React.PureComponent<Props> {
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

const mapStateToProps = state => ({
  movies: state.test.items,
})

const mapDispatchToProps = {
  onGetMovies,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Container)
