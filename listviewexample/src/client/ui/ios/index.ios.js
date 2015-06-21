/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {AppRegistry, StyleSheet, Text, View, NavigatorIOS, TouchableOpacity, PixelRatio, TouchableHighlight, StatusBarIOS} = React;
var PhotosList = require('./PhotosList.js');


var ListViewExample = React.createClass({
  render: function() {
    StatusBarIOS.setStyle(StatusBarIOS.Style.lightContent);
    return (
      <NavigatorIOS
      style={styles.container}
      initialRoute={{
        component: PhotosList,
        title: 'ListViewExample'
      }}
      titleTextColor="#AF2F2F"/>
      );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});


AppRegistry.registerComponent('listviewexample', () => ListViewExample);