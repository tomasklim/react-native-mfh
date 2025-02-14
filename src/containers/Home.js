import React from 'react'
import { ActivityIndicator, ScrollView, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Colors from '../themes/Colors'
import Container from './Container'
import { HeaderImage } from '../components'
import ItemGroupRow from './ItemGroupRow'
import { FETCH_STATUS } from '../constants/ActionConstants'
import * as actions from '../state/actions'

const styles = StyleSheet.create({
  loader: {
    marginTop: 10,
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
    const { onGetCategoriesLookup } = this.props
    onGetCategoriesLookup()
  }

  render() {
    const { lookupCategories, navigation } = this.props
    return (
      <Container>
        {lookupCategories.status === FETCH_STATUS.LOADING && (
          <ActivityIndicator
            animating={lookupCategories.isFetching}
            size="large"
            color={Colors.purpleInactive}
            style={styles.loader}
          />
        )}

        {lookupCategories.status === FETCH_STATUS.SUCCESS && (
          <ScrollView>
            {Object.keys(lookupCategories.data).map(slug => {
              const lookupCategory = lookupCategories.data[slug]

              if (lookupCategory && lookupCategory.hideFromMain) {
                return null
              }

              return (
                <ItemGroupRow
                  lookupCategory={lookupCategory}
                  key={slug}
                  navigation={navigation}
                />
              )
            })}
          </ScrollView>
        )}
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  lookupCategories: state.lookup.categories,
})

const mapDispatchToProps = dispatch => ({
  onGetCategoriesLookup: bindActionCreators(
    actions.onGetCategoriesLookup,
    dispatch,
  ),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home)
