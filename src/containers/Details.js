import React from 'react'
import { StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Colors from '../themes/Colors'
import { FETCH_STATUS } from '../constants/ActionConstants'
import * as actions from '../state/actions'

const styles = StyleSheet.create({})

class Details extends React.PureComponent<null> {
  render() {
    return null
  }
}

const mapStateToProps = (state, props) => ({})

const mapDispatchToProps = dispatch => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Details)
