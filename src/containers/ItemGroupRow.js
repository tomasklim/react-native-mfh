import React from 'react'
import {
  StyleSheet,
  Text,
  ActivityIndicator,
  FlatList,
  View,
} from 'react-native'
import { connect } from 'react-redux'
import { Card } from 'react-native-elements'
import Colors from '../themes/Colors'

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
    // const { onGetCategoriesLookupRequest } = this.props
  }

  render() {
    const { loading } = this.props
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

const mapStateToProps = state => ({})

const mapDispatchToProps = {}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ItemGroupRow)
