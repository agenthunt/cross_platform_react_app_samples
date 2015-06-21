var React = require('react-native');
var {StyleSheet, Text, View, Image, SwitchIOS, TouchableHighlight, LayoutAnimation} = React;


var PhotosListItem = React.createClass({
  onItemSelected:function(rowData){
    this.props.onItemSelected(rowData);
  },
  render: function() {
    var rowData = this.props.rowData;
    return (
      <TouchableHighlight onPress={this.onItemSelected.bind(this,rowData)} underlayColor='#AF4F4F'>
      <View style={styles.container}>
      <View style={styles.row}>
          <Image
      source={{
        uri: 'http://localhost:8080/' + rowData.url
      }}
      style={styles.image}>
          </Image>
          <Text style={styles.text}>
            {rowData.text}
          </Text>
      </View>
      <View style={styles.divider}/>
      </View>
      </TouchableHighlight>
      );
  }

});

var styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingLeft: 10,
    paddingRight:10,
    paddingTop:5,
    paddingBottom:5,
    alignItems:'center'
  },
  divider: {
    backgroundColor: '#f0f0f0',
    height: 1,
    flex: 1,
    marginLeft: 0,
    marginRight: 0
  },
  text: {
    fontSize: 24,
    color: '#4d4d4d',
    fontFamily: 'Helvetica Neue',
    fontWeight: '200',
    flex: 3
  },
  switchStyle: {
    marginRight: 0
  },
  container: {
    flex: 1
  },
  image: {
    width: 70,
    height: 50,
    marginRight: 10
  },
});




module.exports = PhotosListItem;