import React from 'react'
import { StyleSheet, ActivityIndicator, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import Colors from '../themes/Colors'
import Container from './Container'
import { HeaderImage } from '../components'
import { onGetCategoriesLookupRequest } from '../state/actions'
import ItemGroupRow from './ItemGroupRow'

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
    const { onGetCategoriesLookupRequest } = this.props
    onGetCategoriesLookupRequest()
  }

  render() {
    const { lookupCategories } = this.props
    return (
      <Container>
        {lookupCategories.isFetching && (
          <ActivityIndicator
            animating={lookupCategories.isFetching}
            size="large"
            color={Colors.purpleInactive}
          />
        )}
        {!lookupCategories.loading && lookupCategories.data && (
          <ScrollView>
            {Object.keys(lookupCategories.data).map(slug => {
              const lookupCategory = lookupCategories.data[slug]

              if (lookupCategory && lookupCategory.hideFromMain) {
                return null
              }

              return <ItemGroupRow slug key={slug} />
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

const mapDispatchToProps = {
  onGetCategoriesLookupRequest,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home)
