import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { connect } from 'react-redux'
import Colors from '../themes/Colors'
import Container from './Container'
import { HeaderImage } from '../components'

const styles = StyleSheet.create({
  text: {
    color: Colors.purpleInactive,
  },
})

class Home extends React.PureComponent<null> {
  static navigationOptions = {
    headerTitle: <HeaderImage />,
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

const mapStateToProps = state => ({
  movies: state.categories.items,
})

const mapDispatchToProps = {}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home)
