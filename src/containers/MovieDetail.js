import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Colors from '../themes/Colors'
import { FETCH_STATUS } from '../constants/ActionConstants'
import * as actions from '../state/actions'
import { HeaderImage } from '../components'
import Container from './Container'

const styles = StyleSheet.create({
  header: {
    color: Colors.white,
    fontFamily: 'Gotham-Medium',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 10,
  },
})

class MovieDetail extends React.PureComponent<null> {
  static navigationOptions = {
    headerTitle: <HeaderImage />,
    headerTintColor: Colors.purpleInactive,
    headerStyle: {
      backgroundColor: Colors.black,
      borderBottomColor: Colors.purpleInactive,
    },
  }

  render() {
    const { navigation } = this.props

    return (
      <Container>
        <Text style={styles.header}>
          {navigation.getParam('title', 'Unknown')}
        </Text>
      </Container>
    )
  }
}

const mapStateToProps = (state, props) => ({})

const mapDispatchToProps = dispatch => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MovieDetail)
