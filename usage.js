var req = require('./sample')

// req.reqfun('http://www.123baidu1.com', function(err, value){  
//   console.log("1", err, value)
// })


req.reqfun('http://www.123baidu1.com').then(function(content){
    console.log(content)
}).catch(function(err){
    console.error(err)
})

