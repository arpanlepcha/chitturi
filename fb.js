//app chituri
var https = require('https');

var fb = function(pageId,token){
    this.pageId = pageId;
    this.token = token;
    
    this.getFeeds = function(options,callback){
        var get_options = {
            hostname: 'graph.facebook.com',
            port: 443,
            path: '/'+ this.pageId+options+'&access_token='+this.token,
            method: 'GET'
        };
       
        https.get(get_options, function(response){
                                var message = "";
                                response.on("data", function(chunk) {
                                        message+=chunk;
                                });
                                response.on("end",function(){
                                    return callback(JSON.parse(message));
                                    
                                })
                            }
        ).on('error', function(e) {
                return callback("Got error: " + e.message);
        });
               
    }
}

exports.fb = fb;


