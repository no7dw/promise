var Promise = require('bluebird')
var request = Promise.promisify(require("request"));
request("foo.bar").then(function(result) {
    console.log(result)
})
.catch(function(err){
    console.log('oh err ',err)
});
