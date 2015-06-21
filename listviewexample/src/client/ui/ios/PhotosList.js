'use strict';

var React = require('react-native');
var {AppRegistry, StyleSheet, Text, View, ListView, Image} = React;
var AppStore = require('../../stores/appstore.js');
var AppActions = require('../../actions/appactions.js');
var AppSettings = require('../../utils/appsettings.js');
var PhotosListItem = require('./PhotosListItem.js');
var PhotosDetailedView = require('./PhotosDetailedView.js');
var ds = new ListView.DataSource({
  rowHasChanged: (r1, r2) => r1 !== r2
});



var PhotosList = React.createClass({
  getInitialState: function() {
    return {
      items: [],
      selectedIndex: 0
    };
  },
  renderRow: function(rowData, sectionID, rowID, highlightRow) {
    return (
      <PhotosListItem rowData={rowData} onItemSelected={this.onItemSelected}/>
      );
  },

  onAppStoreChange: function() {
    console.log('on appstore changed' + AppStore.getItems());
    if (this.isMounted()) {
      try {
        this.setState({
          items: AppStore.getItems(),
        });
      } catch (err) {
        console.error(err);
      }
    }
  },
  componentWillMount: function() {
    this.dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2
    });
  },
  componentDidMount: function() {
    AppStore.addChangeListener(this.onAppStoreChange);
    this.processProps(this.props);
  },
  componentWillReceiveProps: function(nextProps) {
    this.processProps(nextProps);
  },
  processProps: function(props) {
    AppActions.getItems();
  },
  onItemSelected:function(selectedRowData){
    this.props.navigator.push({
      title: selectedRowData.text,
      component:PhotosDetailedView,
      passProps:{
        rowData:selectedRowData
      }
    });
  },
  render: function() {
    var dataSource = this.dataSource.cloneWithRows(this.state.items);
    return (
      <View style={styles.container}>
      <ListView dataSource={dataSource} renderRow={this.renderRow}/>
      </View>
      );
  }
});

var styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
    flex: 1
  },
  image: {
    width: 40,
    height: 40,
    marginRight: 10
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
});

module.exports  = PhotosList;