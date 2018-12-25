import React, { Fragment } from 'react'
import { StyleSheet, Text, FlatList, View, Image } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Colors from '../themes/Colors'
import { FETCH_STATUS } from '../constants/ActionConstants'
import * as actions from '../state/actions'
import { ARTWORK_URL } from '../constants/BackendConstants'

const styles = StyleSheet.create({
  view: {
    flexDirection: 'column',
    flex: 1,
    height: 235,
  },
  column: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  firstColumn: {
    marginLeft: 10,
  },
  lastColumn: {
    marginRight: 10,
  },
  heading: {
    color: Colors.white,
    fontFamily: 'Gotham-Medium',
    fontSize: 16,
    marginLeft: 10,
    marginBottom: 5,
  },
  image: {
    width: 108,
    height: 162,
    marginLeft: 5,
    marginRight: 5,
  },
  text: {
    color: Colors.purpleInactive,
    fontFamily: 'Gotham-Book',
    margin: 5,
    width: 108,
  },
})

class ItemGroupRow extends React.PureComponent<null> {
  componentDidMount() {
    const { lookupCategory, onGetCategories } = this.props
    onGetCategories(lookupCategory.id, lookupCategory.slug, lookupCategory.name)
  }

  render() {
    const { category } = this.props
    return (
      <View style={styles.view}>
        {category && category.status === FETCH_STATUS.SUCCESS && (
          <Fragment>
            <Text style={styles.heading}>{category.title.toUpperCase()}</Text>
            <FlatList
              horizontal
              data={category.data}
              renderItem={({ item: rowData, index }) => (
                <View styles={styles.column}>
                  <Image
                    source={{
                      uri: `${ARTWORK_URL}/${rowData.poster}_200x300.jpg`,
                    }}
                    style={[
                      styles.image,
                      !index && styles.firstColumn,
                      index === category.data.length - 1 && styles.lastColumn,
                    ]}
                  />
                  <Text
                    style={[
                      styles.text,
                      !index && styles.firstColumn,
                      index === category.data.length - 1 && styles.lastColumn,
                    ]}
                    numberOfLines={2}
                  >
                    {rowData.title}
                  </Text>
                </View>
              )}
              keyExtractor={(item, index) => index.toString()}
            />
          </Fragment>
        )}
      </View>
    )
  }
}

const mapStateToProps = (state, props) => ({
  category: Object.values(state.categories).filter(
    value => value.slug === props.lookupCategory.slug,
  )[0],
})

const mapDispatchToProps = dispatch => ({
  onGetCategories: bindActionCreators(actions.onGetCategories, dispatch),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ItemGroupRow)
