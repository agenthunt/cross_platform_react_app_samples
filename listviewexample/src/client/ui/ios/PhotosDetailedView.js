'use strict';

var React = require('react-native');
var {StyleSheet, Image, View, PixelRatio} = React;

var PhotosDetailedView = React.createClass({
  render: function() {
    return (<View style={styles.container}>
         <Image
      source={{
        uri: 'http://localhost:8080/' + this.props.rowData.url
      }}
      style={styles.image}
      resizeMode={Image.resizeMode.contain}>
          </Image>
          </View>
      );
  }
});

var styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
    flex: 1,
    marginTop: 64,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: PixelRatio.getPixelSizeForLayoutSize(150),
    height: PixelRatio.getPixelSizeForLayoutSize(200),
    margin: 10
  },
  text: {
    flex: 1,
    justifyContent: 'center'
  },
  title: {
    fontSize: 11,
    fontWeight: 'bold'
  },
  subtitle: {
    fontSize: 10
  },
  resizeMode: {
    flex:1
  },
});

module.exports = PhotosDetailedView;