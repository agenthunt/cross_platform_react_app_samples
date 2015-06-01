/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View
} = React;


var HelloWorld = React.createClass({
  render: function() {
    return (
      <View style={styles.mainContainer}>
      <Text>
          Hello World on iOS
      </Text>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  mainContainer: {    
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  }
});

AppRegistry.registerComponent('hello_world', () => HelloWorld);
