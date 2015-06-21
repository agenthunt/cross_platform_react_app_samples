(function() {
  var express = require('express');
  var app = express();

  console.log("dirname:" + __dirname);
  var Items = require('./app/model/Items.js');
  app.use(express.static('.'));
  var bodyParser = require('body-parser');

  app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(bodyParser.json());

  var port = process.env.PORT || 8080; // set our port


  var router = express.Router(); // get an instance of the express Router


  router.use(function(req, res, next) {

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  router.get('/', function(req, res) {
    res.json({
      message: 'A Items app sample with react native front end and embedded jxcore backend rest api (express, nedb)'
    });
  });

  router.route('/items')

    .post(function(req, res) {
      console.log(req.body.text);
      var item = {
        text: req.body.text,
        completed: false
      };

      Items.addItem(item, function(err, items) {
        if (err) {
          res.send(err);
        } else {
          res.json(items);
        }
      });
    })

    .get(function(req, res) {
      Items.getItems(function(err, items) {
        if (err) {
          res.send(err);
        } else {
          res.json(items);
        }
      });
    });

  router.route('/items/:item_id')

    .put(function(req, res) {

      console.log(req.body);

      Items.updateItem(req.body, function(err, items) {
        if (err) {
          res.send(err);
        } else {
          res.json(items);
        }
      });
    })
    .delete(function(req, res) {
      Items.deleteItem(req.body, function(err, items) {
        if (err) {
          res.send(err);
        } else {
          res.json(items);
        }
      });
    });


  app.use('/api', router);
  var Server = {
    start: function() {
      app.listen(port);
    }
  };
  module.exports = Server;
  Server.start();
}());