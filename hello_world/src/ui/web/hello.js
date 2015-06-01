(function() {
  'use strict';
  var React = require('react');

  var styles = {
    mainContainer: {
      display: 'flex',
      justifyContent:'center',
      alignItems:'center'
    }
  };

  var platform = process.platform;
  var Hello = React.createClass({
    render: function() {
      return (
        <div style={styles.mainContainer}>
          Hello World on {platform}
        </div>
      );
    }

  });

  module.exports = Hello;
})();
