import React from 'react'
import { StyleSheet, ActivityIndicator, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import Colors from '../themes/Colors'
import Container from './Container'
import { HeaderImage } from '../components'
import { onGetCategoriesRequest } from '../state/actions'

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

  componentDidMount() {
    const { onGetCategoriesRequest } = this.props
    onGetCategoriesRequest()
  }

  render() {
    const { loading, categories } = this.props
    return (
      <Container>
        {loading && (
          <ActivityIndicator
            animating={loading}
            size="large"
            color={Colors.purpleInactive}
          />
        )}
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  loading: state.categories.loading,
  categories: state.categories.data,
})

const mapDispatchToProps = {
  onGetCategoriesRequest,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home)
