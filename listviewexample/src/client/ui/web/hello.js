(function() {
  'use strict';
  var React = require('react');
  var assign = require('object-assign');
  var AppStore = require('../../stores/appstore.js');
  var AppActions = require('../../actions/appactions.js');

  function m() {
    var res = {};
    for (var i = 0; i < arguments.length; i++) {
      if (arguments[i]) {
        assign(res, arguments[i]);
      }
    }
    return res;
  }

  var styles = {
    ul: {
      listStyleType: 'none',
      padding: 0,
      margin: 0,
      height:'100vh',
      overflow:'scroll'
    },
    li: {
      display: 'flex',
      marginBottom: 5,
      marginTop: 5,
      alignItems: 'center'
    },
    thumbnail: {
      width: 64,
      height: 64,
      marginRight: 10,
      marginLeft: 10
    },
    mainContainer: {
      display: 'flex'
    },
    master: {
      width: '25%',
      border: 'solid 1px #CACACA',
    },
    detail: {
      width: '75%',
      display: 'flex',
      alignItems: 'center',
      border: 'solid 1px #CACACA',
      padding: 10
    },
    fullImage: {
      width: '100%'
    },
    selected: {
      backgroundColor: '#CACACA'
    }
  };

  var Hello = React.createClass({
    getInitialState: function() {
      return {
        items: [{
          url: "images/0.jpg"
        }],
        selectedIndex: 0
      };
    },
    onItemClicked: function(index) {
      this.setState({
        selectedIndex: index
      });
    },
    createItem: function(itemData, index) {
      return (
        <li key={index} style={m(styles.li, this.state.selectedIndex==index && styles.selected)} onClick={this.onItemClicked.bind(this,index)}>
          <img style={styles.thumbnail} src={itemData.url}/>
          <h3> {itemData.text} </h3>
         </li>
      );
    },
    onAppStoreChange: function() {
      console.log('on appstore changed');
      if (this.isMounted()) {
        try {
          this.setState({
            items: AppStore.getItems()
          });
        } catch (err) {
          console.error(err);
        }
      }
    },
    componentDidMount: function() {
      AppStore.addChangeListener(this.onAppStoreChange);
      this.processProps(this.props);
    },
    componentWillUnmount: function() {
      AppStore.removeChangeListener(this.onAppStoreChange);
    },
    componentWillReceiveProps: function(nextProps) {
      this.processProps(nextProps);
    },
    processProps: function(props) {
      AppActions.getItems();
    },

    render: function() {
      return (
        <div style={styles.mainContainer}>
          <div style={styles.master}>
             <ul style={styles.ul}>
              {this.state.items.map(this.createItem)}
             </ul>
          </div>
          <div style={styles.detail}>
              <img style={styles.fullImage} src={this.state.selectedIndex !== -1 ? this.state.items[this.state.selectedIndex].url:''}/>
          </div>
        </div>
      );
    }

  });

  module.exports = Hello;
})();
