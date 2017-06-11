var MongoClient = require('mongodb').MongoClient;
var url = process.env.MONGO_URL;

MongoClient.connect(url, function(err, db) {
  
  console.log("Connected successfully to server");

  var coll = db.collection('gallery');
  console.log('inserting...')
  coll.insertMany([
        {
            "name": "Front Yard",
            "file": "DJI_0051.jpg",
            "sort":10,
            "active": true
        },
        {
            "name": "Front Yard",
            "file": "DJI_0050.jpg",
            "sort":20,
            "active": true
        },
        {
            "name": "Front Yard",
            "file": "DJI_0046.jpg",
            "sort":30,
            "active": true
        },
        {
            "name": "Front Yard",
            "file": "DJI_0044.jpg",
            "sort":40,
            "active": true
        },
        {
            "name": "Front Yard",
            "file": "DJI_0041.jpg",
            "sort":50,
            "active": true
        },
        {
            "name": "Front Yard",
            "file": "DJI_0039.jpg",
            "sort":60,
            "active": true
        },
        {
            "name": "Front Yard",
            "file": "DJI_0036.jpg",
            "sort":70,
            "active": true
        },
  ]);

  console.log('done....');

  db.close();
});
