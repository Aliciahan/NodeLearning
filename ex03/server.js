var http = require('http');
var fs = require('fs');

function servStaticFile(res, path, contentType, responseCode){
	if(!responseCode) responseCode=200;
	fs.readFile(__dirname + path, function(err,data){
		if(err){
			res.writeHead(500, {'Content-Type': 'text/plain'});
			res.end('500 Internal Error');

		} else{
			res.writeHead(responseCode, {'Content-Type':'contentType'});
			res.end(data);
		}
	});
}

http.createServer(function(req,res){
	var path = req.url.replace(/\/?(?:\?.*)?$/,'').toLowerCase();
	switch (path){
		case '':
			res.writeHead(200, {'Content-Type': 'text/html'});
			servStaticFile(res,'/public/home.html','text/html');
			break;
		case '/about':
			res.writeHead(200,{'Content-Type':'text/html'});
			servStaticFile(res,'/public/about.html','text/html');			
			break;
		case '/img/logo.jpg':
			servStaticFile(res,'/public/img/IMG_6753.JPG','image/jpg');
			break;
		default:
			res.writeHead(404, {'Content-Type':'text/html'});
			servStaticFile(res,'/public/notfound.html','text/html');			
			break;
	}
}).listen(3000);

console.log('Server started on 3000');