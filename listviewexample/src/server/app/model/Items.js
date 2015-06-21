// Type 2: Persistent datastore with manual loading
// 
console.log('HOME DIR:' + process.env['HOME']);
console.log('Platform:' + process.platform);
var databaseFileName;
if(process.platform === 'ios'){
  databaseFileName = process.env['HOME'] + '/Documents/data/items.db';
}else if(process.platform === 'darwin') {
  databaseFileName = __dirname + '/../../../data/items.db';
}else {
  databaseFileName = './data/items.db';
}

var Datastore = require('nedb'),
  db = new Datastore({
    filename: databaseFileName
  });
db.loadDatabase(function(err) { // Callback is optional
  // Now commands will be executed
  console.log("loadingDatabase Error:" + err);
});

var Items = {
  addItem: function(item, callback) {
  	console.log('inserting item' + JSON.stringify(item));
  	item._id = Date.now();
    db.insert(item, function(err) {
      if(err) {
        callback(err, null);
      } else {
        Items.getItems(callback);
      }
    });
  },
  getItems: function(callback) {
    db.find({}).exec(function(err, items) {
      if(err) {
        callback(err, null);
      } else {
        callback(null, items)
      }
    });
  },
  updateItem: function(item, callback) {
    db.find(item, function(err, oldItem) {
      if(err) {
        callback(err, null);
      } else {
        db.update({
          _id: item._id
        }, item, function(err) {
          if(err) {
            callback(err, null);
          } else {
            Items.getItems(callback);
          }
        });
      }
    })
  },
  deleteItem: function(item, callback) {
    console.log('deleting item' + item);
    db.remove( item, function(err, numRemoved) {
      console.log('numRemoved:' + numRemoved);
      if(err) {
        console.log(err);
        callback(err, null);
      } else {
        Items.getItems(callback);
      }
    });
  }
};

module.exports = Items;
