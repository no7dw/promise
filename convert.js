global.Promise = require("bluebird");
var fs = require("fs");

var readFilePromise = Promise.promisify(fs.readFile, fs); 
readFilePromise("foo.json", "utf8").then(function(content){
    console.log(content)
}).catch(function(err){
    console.error(err)
})
