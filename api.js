var connectString;
var MongoClient = require('mongodb').MongoClient;


var Api = function(cs) {
    connectString = cs;
}

Api.prototype.getGalleryImages = function(callback){
    console.log(connectString);
    MongoClient.connect(connectString, function(err, db){
        var coll = db.collection('gallery');
        
        coll.find({}).toArray(function(err, docs){
            console.log(err);
            console.log(docs);

            callback(docs);
        });
    });
}

module.exports = Api;
