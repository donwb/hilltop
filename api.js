var Api = function(envVars) {
    
    // setup connection string here
    console.log(envVars);

}

Api.prototype.getGalleryImages = function(callback){
    console.log('do stuff');
    callback();
}

module.exports = Api;
