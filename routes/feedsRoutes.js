
module.exports = (router)=>{
    router.get('/feeds', (req, res)=>{
        // var fs = require('fs');
    
            var options = {
            'method': 'GET',
            'hostname': 'feeds.feedburner.com',
            'path': '/ndtvnews-top-stories',
            'headers': {
            },
            };
    
            var request = http.request(options, function (response) {
            var chunks = [];
    
            response.on("data", function (chunk) {
                chunks.push(chunk);
            });
    
            response.on("end", function (chunk) {
                var body = Buffer.concat(chunks);
                res.send(body.toString());
            });
    
            response.on("error", function (error) {
                console.error(error);
            });
            });
    
            request.end();
    })
}