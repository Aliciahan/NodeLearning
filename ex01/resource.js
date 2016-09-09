var http = require('http');
var fs = require('fs');
var server = http.createServer();
server.on('request',function(req, res) {
	res.writeHead(200, {'Content-Type':'image/png'});
	fs.createReadStream('./test.png').pipe(res);
});
server.listen(3000);
console.log('Server Started');