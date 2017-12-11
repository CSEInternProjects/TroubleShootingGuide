 

 //var http = require('http'); 
 //var fs = require('fs');
 //var url = require('url');
//var myObj = require('./RRTJson');
//http.createServer(function (req, res) {
     
//}).listen(3002); 
 var port = 8653;
var http = require("http");
var server = http.createServer();
server.on('request', request);
server.listen(port);
function request(request, response) {
    var store = '';

    request.on('data', function(data) 
    {
        store += data;
		
    });
    request.on('end', function() 
    {   //console.log(store);
        ff(store);
		response.setHeader("Content-Type", "text/json");
        response.setHeader("Access-Control-Allow-Origin", "*");
        response.end(store)
    });
 }  
function ff(store)
{
	var fs = require('fs');
fs.writeFile("./TSGJson.json", store, function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The file was saved!");
}); 
}