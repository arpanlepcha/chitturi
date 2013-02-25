chitturi
========

simple poc for facebook feed fetch named after my friend

using get feeds
fb = require('./fb')

var facebook =  new fb(PAGEID,ACCESS_TOKEN);

facebook.getFeeds('/feed?fields=comments.limit(10000).fields(likes.limit(100),from,message,created_time),likes.limit(10000),actions,caption,created_time,from,id,link,object_id,message,type,name,picture,icon,status_type,privacy,description,story&limit=100&since=1349261208&until=1349434008',function(response){
    console.log(response);
})
