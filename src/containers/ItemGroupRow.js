import React from 'react'
import { StyleSheet, Text, FlatList, View } from 'react-native'
import { connect } from 'react-redux'
import { Card } from 'react-native-elements'
import Colors from '../themes/Colors'
import { onGetCategoriesRequest } from '../state/actions'
import { FETCH_STATUS } from '../constants/ActionConstants'

const styles = StyleSheet.create({
  text: {
    color: Colors.purpleInactive,
  },
})

const data = [
  {
    imageUrl: 'http://via.placeholder.com/160x160',
    title: 'something',
  },
  {
    imageUrl: 'http://via.placeholder.com/160x160',
    title: 'something two',
  },
  {
    imageUrl: 'http://via.placeholder.com/160x160',
    title: 'something three',
  },
  {
    imageUrl: 'http://via.placeholder.com/160x160',
    title: 'something four',
  },
  {
    imageUrl: 'http://via.placeholder.com/160x160',
    title: 'something five',
  },
  {
    imageUrl: 'http://via.placeholder.com/160x160',
    title: 'something six',
  },
]

class ItemGroupRow extends React.PureComponent<null> {
  componentDidMount() {
    const { lookupCategory, onGetCategoriesRequest } = this.props
    // TODO categories fetching check
    onGetCategoriesRequest(lookupCategory.id)
  }

  render() {
    return (
      <View
        style={{
          flexDirection: 'row',
          height: 200,
        }}
      >
        <FlatList
          horizontal
          data={data}
          renderItem={({ item: rowData }) => (
            <Card
              title={null}
              image={{ uri: rowData.imageUrl }}
              containerStyle={{ padding: 0, width: 160, height: 200 }}
            >
              <Text>{rowData.title}</Text>
            </Card>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    )
  }
}

const mapStateToProps = state => ({
  categories: state.categories,
})

const mapDispatchToProps = {
  onGetCategoriesRequest,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ItemGroupRow)
