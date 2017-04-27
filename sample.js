var request = require('request')
var reqWrap = function(url, callback){
    return request(url, function (error, response, body) {
      if(error || response.statusCode != 200 ){
          console.error('got an error', error , response )      
           callback(error)
      }        
      else
           callback(null, 'ok')
    })
}
var bluebird = require('bluebird')
module.exports.reqfun = bluebird.promisify(reqWrap)
