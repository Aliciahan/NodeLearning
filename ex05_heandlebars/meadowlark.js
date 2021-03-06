var express = require('express');
var app = express();

//set Handlebars to view engine 
var handlebars = require('express3-handlebars').create({defaultLayout:'main'});
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.set('port', process.env.PORT || 3000);

//difinir 404
/*
app.use(function(req, res){
	res.type('text/plain');
	res.status(404);
	res.send('404 Not Found');
});
*/

//personalise 500
app.use(function(err,req,res,next){
	console.error(err.stack);
	res.type('text/plain');
	res.status(500);
	res.send('500 - Server Error');
});

app.listen(app.get('port'), function(){
	console.log('Express started on http://localhost:'+app.get('port')+'; press Ctrl+C to terminate. ^o^');

});

app.get('/', function(req, res){
	res.render('home');
});

app.get('/about', function(req,res){
	res.render('about')
});

app.use(function(req, res, next){
	res.status(404);
	res.render('404');
});
app.use(function(err,req,res,next){
	console.error(err.stack);
	res.status(500);
	res.render('500');
})

